import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  timeout: 120_000,
  workers: 2,
  retries: 0,
  use: {
    baseURL: process.env.PLAYWRIGHT_BASE_URL ?? "http://localhost:3000",
    trace: "retain-on-failure",
  },
  projects: [
    { name: "mobile-390", use: { ...devices["Pixel 7"], viewport: { width: 390, height: 844 } }, testMatch: /(styleguide|shell)\.spec\.ts/ },
    { name: "tablet-768", use: { viewport: { width: 768, height: 1024 } }, testMatch: /(styleguide|shell)\.spec\.ts/ },
    { name: "laptop-1024", use: { viewport: { width: 1024, height: 768 } }, testMatch: /(styleguide|shell)\.spec\.ts/ },
    { name: "desktop-1440", use: { viewport: { width: 1440, height: 900 } }, testMatch: /(styleguide|shell)\.spec\.ts/ },
    { name: "desktop-1280", use: { viewport: { width: 1280, height: 800 } }, testMatch: /shell\.spec\.ts/ },
    { name: "content", use: { viewport: { width: 1440, height: 900 } }, testMatch: /content\.spec\.ts/ },
    { name: "phase4", use: { viewport: { width: 1440, height: 900 } }, testMatch: /phase4\.spec\.ts/ },
  ],
});
