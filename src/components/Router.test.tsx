import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "@mui/material/styles";
import { SnackbarProvider } from "notistack";
import { HelmetProvider } from "react-helmet-async";
import { describe, expect, it, afterEach } from "vitest";
import Router from "./Router";
import getTheme from "../helpers/theme";

const renderAt = (path: string) => {
  window.history.pushState({}, "", path);
  return render(
    <ThemeProvider theme={getTheme("dark")}>
      <SnackbarProvider>
        <HelmetProvider>
          <Router />
        </HelmetProvider>
      </SnackbarProvider>
    </ThemeProvider>,
  );
};

afterEach(() => {
  window.history.pushState({}, "", "/");
});

describe("Router", () => {
  it("renders the home page at /", async () => {
    renderAt("/");

    expect(
      await screen.findByRole("heading", { name: /building beautiful systems for humans/i }),
    ).toBeInTheDocument();
  });

  it("renders the MUI design system case study", async () => {
    renderAt("/case-study/mui-design-system");

    expect(
      await screen.findByRole("heading", { name: /modernizing frontend architecture/i }),
    ).toBeInTheDocument();
  });

  it("renders the theming platform case study", async () => {
    renderAt("/case-study/theming-platform");

    expect(
      await screen.findByRole("heading", { name: /building a theme-driven platform/i }),
    ).toBeInTheDocument();
  });

  it("renders the component system case study", async () => {
    renderAt("/case-study/component-system");

    expect(
      await screen.findByRole("heading", {
        name: /building the bridge between design and engineering/i,
      }),
    ).toBeInTheDocument();
  });

  it("renders the not found page for an unknown route", async () => {
    renderAt("/this-route-does-not-exist");

    expect(await screen.findByText(/404/)).toBeInTheDocument();
    expect(
      screen.getByText(/looks like you've wandered beyond the horizon/i),
    ).toBeInTheDocument();
  });
});
