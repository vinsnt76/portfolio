// tests/theme.spec.ts
import { test, expect } from '@playwright/test';

test.describe('Theme Persistence and FOUC Prevention', () => {
  test('should load in dark mode without flicker if localStorage is set', async ({ page }) => {
    // 1. Set the theme in localStorage before navigating to the page.
    // This simulates a returning user who has already selected dark mode.
    await page.addInitScript(() => {
      window.localStorage.setItem('theme', 'dark');
    });

    // 2. Go to the homepage.
    await page.goto('/');

    // 3. Assert that the <html> element has the 'dark' class immediately.
    // We check this on the initial server-rendered document.
    await expect(page.locator('html')).toHaveClass(/dark/);

    // 4. (Optional but good) Take a screenshot to visually confirm no flicker.
    // The initial paint should be dark.
    await expect(page).toHaveScreenshot('dark-mode-initial-load.png');
  });

  test('should default to system preference (dark) without flicker', async ({ page }) => {
    // Use Playwright's built-in ability to set the user's color scheme preference.
    await page.emulateMedia({ colorScheme: 'dark' });

    // Go to the homepage without any localStorage set.
    await page.goto('/');

    // Assert that the <html> element has the 'dark' class based on system preference.
    await expect(page.locator('html')).toHaveClass(/dark/);

    // Visually confirm the initial paint is dark.
    await expect(page).toHaveScreenshot('dark-mode-system-preference.png');
  });
});
