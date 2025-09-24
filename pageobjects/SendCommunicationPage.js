class SendCommunicationPage {
    constructor(page) {
        this.page = page;
    this.revenueCenterDropdown = page.locator('select[name="revenueCenter"], select:has-text("Select a Revenue Center")');
    }

    async selectRevenueCenter(centerName) {
    await this.revenueCenterDropdown.waitFor({ state: 'visible', timeout: 10000 });
    await this.revenueCenterDropdown.selectOption({ label: centerName });
    await this.page.waitForLoadState('networkidle');
    }
}

export default SendCommunicationPage;
