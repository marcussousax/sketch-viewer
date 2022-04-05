import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:3000/')
  await page.locator('a[data-testid=document-link-0]').click()
  await page.locator('a[data-testid=artboard-link-0]').click()
})

test('if the selected artboard is displayed', async ({ page }) => {
  const title = page.locator('h2')

  await expect(title).toBeVisible()
})

test('if the navigation is working', async ({ page }) => {
  const oldTitle = await page.locator('h2').innerText()
  await page.locator('button[data-testid=next-navigation]').click()

  const title = await page.locator('h2').innerText()
  await expect(title).not.toEqual(oldTitle)
})
