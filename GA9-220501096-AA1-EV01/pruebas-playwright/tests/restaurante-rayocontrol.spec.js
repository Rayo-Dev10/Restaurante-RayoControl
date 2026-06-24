import { test, expect } from '@playwright/test';

test('carga la aplicacion Restaurante RayoControl', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('body')).toBeVisible();

  const contenido = await page.locator('body').innerText();
  expect(contenido.length).toBeGreaterThan(20);

  await page.screenshot({
    path: '../capturas/06_app_cargada_playwright.png',
    fullPage: true
  });
});

test('verifica contenido funcional visible de la aplicacion', async ({ page }) => {
  await page.goto('/');

  const contenido = await page.locator('body').innerText();
  expect(contenido).toMatch(/restaurante|rayo|control|producto|pedido|cocina|administr/i);

  await page.screenshot({
    path: '../capturas/07_interfaz_principal_playwright.png',
    fullPage: true
  });
});
