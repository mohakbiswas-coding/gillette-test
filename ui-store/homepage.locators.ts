import { Locator, Page } from "@playwright/test"

export class homePageLocators{
    readonly COOKIES: Locator;

    constructor(page:Page){
        this.COOKIES = page.getByRole('button', {'name' : 'Accept All'});
    }
}