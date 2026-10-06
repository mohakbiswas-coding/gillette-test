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
  await home.open();
});

test.afterAll(async() => {
  await browser.close();
})

test("flow_1", async() => {
  await test.step('navigate on homepage and click accept cookies', async() => {
    await home.clickAcceptCookies();
  });

  await test.step('hover on the navbar items', async() => {
    await home.hoverOnNav();
  });
});