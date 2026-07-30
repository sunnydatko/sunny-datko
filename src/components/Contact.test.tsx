import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ThemeProvider } from "@mui/material/styles";
import { SnackbarProvider } from "notistack";
import { describe, expect, it, vi, beforeEach } from "vitest";
import emailjs from "@emailjs/browser";
import Contact from "./Contact";
import getTheme from "../helpers/theme";

vi.mock("@emailjs/browser", () => ({
  default: { send: vi.fn() },
}));

const { mockReset } = vi.hoisted(() => ({ mockReset: vi.fn() }));

vi.mock("react-google-recaptcha", async () => {
  const actualReact = await vi.importActual<typeof import("react")>("react");
  type MockReCAPTCHAProps = { onChange: (token: string | null) => void };
  const MockReCAPTCHA = actualReact.forwardRef<{ reset: () => void }, MockReCAPTCHAProps>(
    ({ onChange }, ref) => {
      actualReact.useImperativeHandle(ref, () => ({ reset: mockReset }));
      return (
        <button type="button" onClick={() => onChange("test-token")}>
          Complete captcha
        </button>
      );
    },
  );
  return { default: MockReCAPTCHA };
});

const renderContact = () =>
  render(
    <ThemeProvider theme={getTheme("dark")}>
      <SnackbarProvider>
        <Contact />
      </SnackbarProvider>
    </ThemeProvider>,
  );

const submit = async (user: ReturnType<typeof userEvent.setup>) =>
  user.click(screen.getByRole("button", { name: /send message/i }));

const completeCaptcha = async (user: ReturnType<typeof userEvent.setup>) =>
  user.click(screen.getByRole("button", { name: /complete captcha/i }));

beforeEach(() => {
  vi.mocked(emailjs.send).mockReset();
  mockReset.mockClear();
});

describe("Contact", () => {
  it("shows validation errors and does not send when the form is empty", async () => {
    const user = userEvent.setup();
    renderContact();

    await submit(user);

    expect(await screen.findByText("Name is required.")).toBeInTheDocument();
    expect(screen.getByText("Email is required.")).toBeInTheDocument();
    expect(screen.getByText("Message is required.")).toBeInTheDocument();
    expect(emailjs.send).not.toHaveBeenCalled();
  });

  it("flags an invalid email address", async () => {
    const user = userEvent.setup();
    renderContact();

    await user.type(screen.getByLabelText(/email/i), "not-an-email");
    await user.tab();

    expect(
      await screen.findByText("Please enter a valid email address."),
    ).toBeInTheDocument();
  });

  it("does not send and shows an error when the captcha is not completed", async () => {
    const user = userEvent.setup();
    renderContact();

    await user.type(screen.getByLabelText(/name/i), "Ada Lovelace");
    await user.type(screen.getByLabelText(/email/i), "ada@example.com");
    await user.type(screen.getByLabelText(/message/i), "Hello, let's talk!");
    await submit(user);

    expect(
      await screen.findByText("Please complete the captcha."),
    ).toBeInTheDocument();
    expect(emailjs.send).not.toHaveBeenCalled();
  });

  it("sends the message and resets the form on success", async () => {
    vi.mocked(emailjs.send).mockResolvedValueOnce({ status: 200, text: "OK" });
    const user = userEvent.setup();
    renderContact();

    await user.type(screen.getByLabelText(/name/i), "Ada Lovelace");
    await user.type(screen.getByLabelText(/email/i), "ada@example.com");
    await user.type(screen.getByLabelText(/message/i), "Hello, let's talk!");
    await completeCaptcha(user);
    await submit(user);

    await waitFor(() =>
      expect(emailjs.send).toHaveBeenCalledWith(
        "service_u9cedck",
        "template_h9f3cqa",
        {
          from_name: "Ada Lovelace",
          reply_to: "ada@example.com",
          message: "Hello, let's talk!",
          "g-recaptcha-response": "test-token",
        },
        "NdM8NyR0F77gTL9mL",
      ),
    );
    expect(await screen.findByText("Your message was sent.")).toBeInTheDocument();
    expect(screen.getByLabelText(/name/i)).toHaveValue("");
    expect(mockReset).toHaveBeenCalledTimes(1);
  });

  it("shows an error message when sending fails", async () => {
    vi.mocked(emailjs.send).mockRejectedValueOnce(new Error("network error"));
    const user = userEvent.setup();
    renderContact();

    await user.type(screen.getByLabelText(/name/i), "Ada Lovelace");
    await user.type(screen.getByLabelText(/email/i), "ada@example.com");
    await user.type(screen.getByLabelText(/message/i), "Hello, let's talk!");
    await completeCaptcha(user);
    await submit(user);

    expect(await screen.findByText("An error occurred.")).toBeInTheDocument();
    expect(mockReset).toHaveBeenCalledTimes(1);
  });
});
