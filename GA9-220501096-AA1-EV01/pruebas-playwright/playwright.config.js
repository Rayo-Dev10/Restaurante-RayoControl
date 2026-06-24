import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30000,
  reporter: [
    ['list'],
    ['html', { outputFolder: '../resultados/reporte-playwright', open: 'never' }]
  ],
  use: {
    baseURL: 'http://localhost:5173',
    headless: false,
    screenshot: 'on',
    video: 'retain-on-failure',
    trace: 'retain-on-failure'
  },
  projects: [
    {
      name: 'Microsoft Edge',
      use: {
        ...devices['Desktop Chrome'],
        channel: 'msedge'
      }
    },
    {
      name: 'Chromium',
      use: {
        ...devices['Desktop Chrome']
      }
    }
  ]
});
