import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { preview } from "vite";
import puppeteer from "puppeteer";

const routes = [
  { route: "/", out: "index.html" },
  { route: "/case-study/mui-design-system", out: "case-study/mui-design-system/index.html" },
  { route: "/case-study/theming-platform", out: "case-study/theming-platform/index.html" },
  { route: "/case-study/component-system", out: "case-study/component-system/index.html" },
];

const server = await preview({ preview: { port: 4173, strictPort: false } });
const baseUrl = server.resolvedUrls.local[0].replace(/\/$/, "");

// --no-sandbox is required in most CI/hosted build containers (e.g. Netlify),
// which don't grant the unprivileged user namespaces Chromium's sandbox needs.
const browser = await puppeteer.launch({
  headless: true,
  args: ["--no-sandbox", "--disable-setuid-sandbox"],
});

try {
  for (const { route, out } of routes) {
    const page = await browser.newPage();
    await page.goto(`${baseUrl}${route}`, { waitUntil: "networkidle0", timeout: 30000 });
    // The Suspense fallback (<Loader/>) renders no text, only an SVG — waiting
    // for real body text is a route-agnostic signal that the lazy chunk mounted.
    await page.waitForFunction(
      () => document.body.innerText.trim().length > 200,
      { timeout: 15000 }
    );
    const html = await page.content();

    const outPath = path.resolve("dist", out);
    await mkdir(path.dirname(outPath), { recursive: true });
    await writeFile(outPath, html);
    console.log(`Prerendered ${route} -> dist/${out}`);
    await page.close();
  }
} finally {
  await browser.close();
  await new Promise((resolve, reject) =>
    server.httpServer.close((err) => (err ? reject(err) : resolve()))
  );
}
