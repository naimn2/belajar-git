import { Locator, Page } from '@playwright/test'

export class HomePage {
    page: Page;
    btnBurger: Locator;
    btnProfil: Locator;
    inputSearch: Locator;
    btnSubmit: Locator;

    constructor(page: Page) {
        this.page = page;
        this.btnBurger = page.getByTestId('btnBurger');
        this.btnProfil = page.locator('');
        this.inputSearch = page.locator('');
    }
}