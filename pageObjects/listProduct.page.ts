import { Locator, Page } from "@playwright/test";

export class ListProduct {
    page: Page;
    cardProdcutItem: Locator;
    inputProductName: Locator;

    constructor(page: Page) {
        this.page = page;
        this.cardProdcutItem = page.locator('');
    }
}