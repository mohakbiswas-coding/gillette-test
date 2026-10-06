import { Locator, Page } from "@playwright/test"

export class homePageLocators{
    readonly COOKIES: Locator;
    readonly LEARN: Locator

    constructor(page:Page){
        this.COOKIES = page.getByRole('button', {'name' : "Accept All"});
        this.LEARN = page.locator("//span[text()='Learn']");
    }
}