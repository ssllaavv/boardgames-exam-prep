const { test, expect } = require('@playwright/test');

test('Check header', async ({ page }) => {
    await page.goto('http://localhost:8080/about');  // you can replace this URL with any page that includes the header
    const homeLink = await page.$('a[href="/boardgames"]');
    const text = await homeLink.textContent();
    expect(text).toBe('View Boardgames');
  });
  