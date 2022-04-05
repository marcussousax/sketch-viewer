import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:3000/')
  await page.locator('a[data-testid=document-link-0]').click()
})

test('if the selected document is displayed', async ({ page }) => {
  const title = page.locator('h2')

  await expect(title).toHaveText('Code test')

  const grid = page.locator('data-testid=artboards-grid')
  await expect(grid).toBeVisible()
})
