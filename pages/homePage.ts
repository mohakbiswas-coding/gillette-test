import { Page, Browser, BrowserContext, chromium } from "@playwright/test";
import { homePageLocators } from "../ui-store/homepage.locators";
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({
    path: path.resolve(__dirname, '..', '.env')
});

export class homePage{
    private readonly locators: homePageLocators;
    page: Page;

    constructor(page:Page){
        this.page=page;
        this.locators = new homePageLocators(page);
    }

    async open(){
        await this.page.goto(process.env.BASE_URL!);
    }

    async clickAcceptCookies(){
        await this.locators.COOKIES.click();
    }

    async hoverOnNav(){
        await this.locators.LEARN.hover();
    }
}