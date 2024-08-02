import { Locator, Page } from '@playwright/test'

export class HomePage {
    page: Page;
    btnBurger: Locator;
    inputSearch: Locator;

    constructor(page: Page) {
        this.page = page;
        this.btnBurger = page.getByTestId('btnBurger');
        this.inputSearch = page.locator('');
    }
}