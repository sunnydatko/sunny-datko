# Contact Form CAPTCHA Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a Google reCAPTCHA v2 checkbox to the contact form so EmailJS rejects spam sends, with no backend server required.

**Architecture:** `react-google-recaptcha` renders the widget inside the existing controlled `Contact.tsx` form. The token it produces is added to the `emailjs.send()` params object as `"g-recaptcha-response"`; EmailJS verifies that token server-side (once reCAPTCHA is enabled on the template in the EmailJS dashboard — a user-owned account step, out of scope here). Submission is blocked client-side until the widget produces a token, matching the existing per-field validation pattern in the form.

**Tech Stack:** React 18, TypeScript, Vite, MUI v7, `react-google-recaptcha` (new dependency), Vitest + Testing Library.

## Global Constraints

- No backend/server code — this project builds to static files (Vite + prerender), deployed to Netlify. Verification of the captcha token happens on EmailJS's side, not ours.
- The reCAPTCHA site key is read from the Vite env var `VITE_RECAPTCHA_SITE_KEY`. Obtaining a real key from Google and enabling captcha verification on the EmailJS template are user-owned setup steps, not part of this plan.
- Follow the existing code style in `Contact.tsx`: controlled form state, submit-time validation, MUI `sx` styling matching the current dark theme (error color `#A0521F`, error font size `12.5px`).
- `npm run lint` must pass with zero warnings (`--max-warnings 0`) after every task.

---

### Task 1: Add the dependency and env var scaffolding

**Files:**
- Modify: `package.json`
- Create: `src/vite-env.d.ts`
- Create: `.env.example`
- Modify: `.gitignore`

**Interfaces:**
- Produces: `import.meta.env.VITE_RECAPTCHA_SITE_KEY: string`, usable by any file from Task 2 onward without a TypeScript error.

This task has no test cycle (it's dependency/config only) but ends with a type-check to catch mistakes before Task 2 relies on it.

- [ ] **Step 1: Install the dependency and its types**

Run:
```bash
npm install react-google-recaptcha@^3.1.0
npm install -D @types/react-google-recaptcha@^2.1.9
```

Expected: `package.json` gains `"react-google-recaptcha": "^3.1.0"` under `dependencies` and `"@types/react-google-recaptcha": "^2.1.9"` under `devDependencies`.

- [ ] **Step 2: Add Vite env var typing**

The project has no `vite-env.d.ts` yet (no code references `import.meta.env` today), so TypeScript doesn't know `import.meta.env` exists. Create `src/vite-env.d.ts`:

```ts
/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_RECAPTCHA_SITE_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
```

- [ ] **Step 3: Add a `.env.example`**

Create `.env.example` at the project root:

```
VITE_RECAPTCHA_SITE_KEY=your-recaptcha-v2-site-key
```

- [ ] **Step 4: Gitignore the real `.env` file**

`.gitignore` currently has `*.local` (covers `.env.local`) but nothing that covers a plain `.env`. Add a `.env` entry so a real site key never gets committed, while `.env.example` (no leading-dot-only match) stays tracked. Open `.gitignore` and add, right after the `*.local` line:

```
.env
```

- [ ] **Step 5: Type-check**

Run:
```bash
npx tsc --noEmit
```

Expected: no errors (confirms `vite-env.d.ts` is syntactically valid and doesn't conflict with existing types).

- [ ] **Step 6: Commit**

```bash
git add package.json package-lock.json src/vite-env.d.ts .env.example .gitignore
git commit -m "Add react-google-recaptcha dependency and env var scaffolding"
```

---

### Task 2: Render the captcha widget and block submission until it's completed

**Files:**
- Modify: `src/components/Contact.tsx`
- Modify: `src/components/Contact.test.tsx`

**Interfaces:**
- Consumes: `import.meta.env.VITE_RECAPTCHA_SITE_KEY` (Task 1).
- Produces: `Contact.tsx` internal state `captchaToken: string | null` and `captchaError: string | null`, and a `recaptchaRef: React.RefObject<ReCAPTCHA>` — Task 3 adds the token to the send payload and calls `recaptchaRef.current?.reset()` using these same names.

`react-google-recaptcha` renders a real Google iframe/script, which isn't viable in jsdom, so the test file mocks it as a plain button that fires `onChange("test-token")` when clicked — this task also updates the file's `beforeEach` and adds a `completeCaptcha` helper that the existing "success" and "failure" tests need to keep passing once submission is gated on a token.

Note: while touching the "sending fails" test in this task, also fix a pre-existing, unrelated typo — the test currently asserts `"An error occured."` (missing an "r") against the component's actual `"An error occurred."`, so it fails on `master` today, independent of this work. Fixing the assertion string is a one-line, in-scope correction since this exact test needs editing anyway for the captcha step.

- [ ] **Step 1: Write the failing test and update the two tests that will start needing a completed captcha**

Replace the full contents of `src/components/Contact.test.tsx` with:

```tsx
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
        },
        "NdM8NyR0F77gTL9mL",
      ),
    );
    expect(await screen.findByText("Your message was sent.")).toBeInTheDocument();
    expect(screen.getByLabelText(/name/i)).toHaveValue("");
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
  });
});
```

- [ ] **Step 2: Run the tests and confirm the expected failures**

Run:
```bash
npx vitest run src/components/Contact.test.tsx
```

Expected: FAIL. The new "does not send and shows an error when the captcha is not completed" test fails because no `"Please complete the captcha."` text exists yet. The "sends the message..." and "shows an error message when sending fails" tests fail because `screen.getByRole("button", { name: /complete captcha/i })` can't find the button (`Contact.tsx` doesn't render `ReCAPTCHA` yet).

- [ ] **Step 3: Implement the widget and blocking validation in `Contact.tsx`**

In `src/components/Contact.tsx`, change the `react` import (line 1) to add `useRef`:

```tsx
import { useRef, useState } from "react";
```

Add the import for `ReCAPTCHA` after the `notistack` import (after line 8):

```tsx
import ReCAPTCHA from "react-google-recaptcha";
```

Inside the `Contact` component, after the existing `touched` state declaration (originally line 90), add:

```tsx
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [captchaError, setCaptchaError] = useState<string | null>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const handleCaptchaChange = (token: string | null) => {
    setCaptchaToken(token);
    if (token) setCaptchaError(null);
  };
```

Replace the `sendEmail` function (originally lines 108-135) with:

```tsx
  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const allTouched = { from_name: true, reply_to: true, message: true };
    setTouched(allTouched);
    const validationErrors = validate(fields);
    setErrors(validationErrors);
    if (!captchaToken) {
      setCaptchaError("Please complete the captcha.");
    }
    if (Object.keys(validationErrors).length > 0 || !captchaToken) return;

    emailjs
      .send(
        "service_u9cedck",
        "template_h9f3cqa",
        { from_name: fields.from_name, reply_to: fields.reply_to, message: fields.message },
        "NdM8NyR0F77gTL9mL",
      )
      .then(
        () => {
          enqueueSnackbar("Your message was sent.", { variant: "success" });
          setFields(EMPTY);
          setErrors({});
          setTouched({});
        },
        (err) => {
          console.error("EmailJS error:", err);
          enqueueSnackbar("An error occurred.", { variant: "error" });
        },
      );
  };
```

Finally, add the widget between the Message `TextField` and the submit `Button` (originally between lines 212 and 213):

```tsx
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
                  onChange={handleCaptchaChange}
                  theme="dark"
                />
                {captchaError && (
                  <Typography sx={{ color: "#A0521F", fontSize: "12.5px" }}>
                    {captchaError}
                  </Typography>
                )}
              </Box>
```

- [ ] **Step 4: Run the tests and confirm they pass**

Run:
```bash
npx vitest run src/components/Contact.test.tsx
```

Expected: all 5 tests PASS.

- [ ] **Step 5: Lint**

Run:
```bash
npm run lint
```

Expected: no errors, no warnings.

- [ ] **Step 6: Commit**

```bash
git add src/components/Contact.tsx src/components/Contact.test.tsx
git commit -m "Render reCAPTCHA widget and block contact form submission until completed"
```

---

### Task 3: Send the captcha token to EmailJS and reset the widget after send

**Files:**
- Modify: `src/components/Contact.tsx`
- Modify: `src/components/Contact.test.tsx`

**Interfaces:**
- Consumes: `captchaToken`, `captchaError`, `recaptchaRef` from Task 2 (same names, same component).

- [ ] **Step 1: Extend the success test to assert the token is sent and the widget resets; assert reset on failure too**

In `src/components/Contact.test.tsx`, replace the `"sends the message and resets the form on success"` test body with:

```tsx
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
```

And replace the `"shows an error message when sending fails"` test body with:

```tsx
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
```

- [ ] **Step 2: Run the tests and confirm the expected failures**

Run:
```bash
npx vitest run src/components/Contact.test.tsx
```

Expected: FAIL on both tests — the `emailjs.send` assertion fails because the actual call doesn't include `"g-recaptcha-response"` yet, and `expect(mockReset).toHaveBeenCalledTimes(1)` fails because nothing calls `.reset()` yet.

- [ ] **Step 3: Implement — include the token in the payload and reset the widget after send**

In `src/components/Contact.tsx`, replace the `sendEmail` function's `emailjs.send(...)` call (added in Task 2) with:

```tsx
    emailjs
      .send(
        "service_u9cedck",
        "template_h9f3cqa",
        {
          from_name: fields.from_name,
          reply_to: fields.reply_to,
          message: fields.message,
          "g-recaptcha-response": captchaToken,
        },
        "NdM8NyR0F77gTL9mL",
      )
      .then(
        () => {
          enqueueSnackbar("Your message was sent.", { variant: "success" });
          setFields(EMPTY);
          setErrors({});
          setTouched({});
          setCaptchaToken(null);
          recaptchaRef.current?.reset();
        },
        (err) => {
          console.error("EmailJS error:", err);
          enqueueSnackbar("An error occurred.", { variant: "error" });
          setCaptchaToken(null);
          recaptchaRef.current?.reset();
        },
      );
```

- [ ] **Step 4: Run the tests and confirm they pass**

Run:
```bash
npx vitest run src/components/Contact.test.tsx
```

Expected: all 5 tests PASS.

- [ ] **Step 5: Lint and full suite**

Run:
```bash
npm run lint
npm test
```

Expected: both pass with no errors, no warnings.

- [ ] **Step 6: Commit**

```bash
git add src/components/Contact.tsx src/components/Contact.test.tsx
git commit -m "Send reCAPTCHA token to EmailJS and reset the widget after each send"
```

---

## After this plan

Before the captcha actually blocks spam in production, set (user-owned, not part of this plan):
- `VITE_RECAPTCHA_SITE_KEY` in Netlify's site env vars (and in a local `.env` for `npm run dev`), using a real reCAPTCHA v2 site key from https://www.google.com/recaptcha/admin.
- reCAPTCHA verification enabled on the `template_h9f3cqa` template in the EmailJS dashboard, using the matching secret key.
