// Renders cv.html to public/cv/ as a PDF with a headless Chromium browser.
// Usage: npm run cv   (set CHROME to the browser binary if it isn't Google Chrome)
import { execFileSync, spawn } from "node:child_process";
import { mkdirSync } from "node:fs";
import { resolve } from "node:path";

const PORT = 4399;
const OUTPUT = resolve("public/cv/Mohamed-Amine-Bouzahar-CV.pdf");
const CHROME = process.env.CHROME ?? "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

const server = spawn("npx", ["vite", "preview", "--port", String(PORT), "--strictPort"], { stdio: "ignore" });

try {
  await waitForServer(`http://localhost:${PORT}/cv.html`);
  mkdirSync(resolve("public/cv"), { recursive: true });
  execFileSync(CHROME, [
    "--headless=new",
    "--disable-gpu",
    "--no-pdf-header-footer",
    "--virtual-time-budget=5000",
    `--print-to-pdf=${OUTPUT}`,
    `http://localhost:${PORT}/cv.html`,
  ]);
  process.stdout.write(`Wrote ${OUTPUT}\n`);
} finally {
  server.kill();
}

async function waitForServer(url) {
  for (let attempt = 0; attempt < 50; attempt += 1) {
    try {
      if ((await fetch(url)).ok) return;
    } catch {
      // Not listening yet.
    }
    await new Promise((done) => setTimeout(done, 200));
  }
  throw new Error(`Preview server did not start on ${url}`);
}
