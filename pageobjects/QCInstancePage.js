class QCInstancePage {
    constructor(page) {
        this.page = page;
        // Locators for instance selection grid and button
        this.instanceRows = page.locator("text=QC-QA10-2");
        this.enterSelectedButton = page.locator("button:has-text('Enter Selected Instance')");
    }

    async selectThirdQCQA10_2Instance() {
        // Select the third occurrence of QC-QA10-2
        const rows = await this.instanceRows.elementHandles();
        if (rows.length < 3) throw new Error("Less than three QC-QA10-2 instances found");
        await rows[2].click();
        await this.enterSelectedButton.click();
        await this.page.waitForLoadState('networkidle');
    }
}

export default QCInstancePage;
