# Contact Form CAPTCHA — Design

## Problem

`src/components/Contact.tsx` sends messages directly from the browser via EmailJS (`emailjs.send()`), with no backend server. It has no spam/bot protection.

## Approach

Add Google reCAPTCHA v2 (checkbox widget) using the `react-google-recaptcha` package, and rely on EmailJS's built-in reCAPTCHA verification (configured in the EmailJS dashboard for this template) to reject sends with a missing/invalid token. No backend function is needed — EmailJS verifies the token server-side on its end.

Considered and rejected:
- Manually loading Google's script and managing the widget by hand — `react-google-recaptcha` already does this (script injection, ref-based reset, cleanup).
- Switching to EmailJS's `sendForm()` with a hidden `g-recaptcha-response` input (EmailJS's own docs pattern) — this form is fully controlled (state + validation), and switching to an uncontrolled-form API would be a larger refactor for no benefit over passing the token through the existing `send()` params object.

## Changes

**Dependencies**: add `react-google-recaptcha` and `@types/react-google-recaptcha`.

**Env var**: add `VITE_RECAPTCHA_SITE_KEY` (Vite exposes it as `import.meta.env.VITE_RECAPTCHA_SITE_KEY`). This is the project's first env var, so add a `.env.example` with a placeholder and confirm `.env` is gitignored. The real site key is set in Netlify's env vars for prod and in a local `.env` for dev; both are the user's responsibility to create (Google reCAPTCHA console + EmailJS dashboard template settings), not part of this implementation.

**`src/components/Contact.tsx`**:
- Import `ReCAPTCHA` from `react-google-recaptcha` and render it between the Message field and the Send button, styled consistent with the form's dark theme (default reCAPTCHA `theme="dark"`).
- Hold the token in state (`captchaToken: string | null`), set via the widget's `onChange`.
- Extend `Fields`/`Errors`/`validate()` (or a parallel check alongside them) so submitting without a completed checkbox shows an inline error below the widget, styled like the existing field-error text (`color: "#A0521F"`, matching `MuiFormHelperText-root.Mui-error`), and blocks the `emailjs.send()` call — consistent with how the other three fields already validate on submit.
- Add a ref to the `ReCAPTCHA` component; call `.reset()` on it after both successful and failed sends (v2 tokens are single-use and expire after ~2 minutes), and clear `captchaToken` state accordingly.
- Add `"g-recaptcha-response": captchaToken` to the params object passed to `emailjs.send()` — this is EmailJS's documented mechanism for verifying reCAPTCHA when using `send()` rather than `sendForm()`.

**Tests (`Contact.test.tsx`)**: mock `react-google-recaptcha` (it renders a real iframe/script in a browser, not viable in jsdom). The mock should render a simple button/checkbox that calls `onChange("test-token")` when clicked, and expose enough for a ref `.reset()` call to be a no-op. Add/update cases:
- Submitting with valid fields but no completed captcha shows the captcha error and does not call `emailjs.send()`.
- Completing the mocked captcha and submitting successfully calls `emailjs.send()` with `"g-recaptcha-response": "test-token"` included in the params.

## Out of scope

- Setting up the actual Google reCAPTCHA site key or enabling captcha verification in the EmailJS dashboard — user-owned account setup steps.
- Any other anti-spam layer (honeypot, rate limiting, etc.).
