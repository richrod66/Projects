class ActionsPage {
    constructor(page) {
        this.page = page;
    // Update the locator to match the actual clickable element for the ACTIONS menu
    // Example: If it's a button, use getByRole('button', { name: 'ACTIONS' })
    this.actionsMenu = page.getByRole('button', { name: 'ACTIONS' });
    // If it's a link, use getByRole('link', { name: 'ACTIONS' })
    // Adjust as needed based on your UI implementation
    this.sendCommunication = page.locator('text=Send Communication');
    }

    async navigateToSendCommunication() {
        await this.actionsMenu.click();
        await this.sendCommunication.waitFor({ state: 'visible', timeout: 10000 });
        await Promise.all([
            this.page.waitForNavigation({ waitUntil: 'networkidle' }),
            this.sendCommunication.click()
        ]);
    }
}

export default ActionsPage;
