import { test, expect, Browser, BrowserContext, Page, chromium } from '@playwright/test';
import { homePage } from '../pages/homePage';

let browser: Browser;
let context: BrowserContext;
let page: Page;
let home: homePage;

test.beforeAll(async() => {
  browser = await chromium.launch();
  context = await browser.newContext();
  page = await context.newPage();
  home = new homePage(page);
});

test.afterAll(async() => {
  await browser.close();
})

test("Navigate to homepage and accept cookies", async() => {
  await home.open();
  await home.clickAcceptCookies();
});
