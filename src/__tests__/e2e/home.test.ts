import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:3000/')
})

test('if the logo is displayed', async ({ page }) => {
  const title = page.locator('h1')
  await expect(title).toHaveText('Sketch Viewer')
})
