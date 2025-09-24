class Select2Helper {
    constructor(page) {
        this.page = page;
    }

    // trigger - selector string or Locator
    // optionText - text of the option to click
    // opts - { timeout }
    async selectByText(trigger, optionText, opts = {}) {
        const page = this.page;
        const timeout = opts.timeout ?? 10000;

        // Normalize trigger to a locator
        const triggerLocator = typeof trigger === 'string' ? page.locator(trigger) : trigger;
        if (await triggerLocator.count() === 0) {
            throw new Error(`Select2 trigger not found: ${String(trigger)}`);
        }

        await triggerLocator.first().click();

        // Try to find an input inside the trigger container
        let searchInput = null;
        try {
            const first = triggerLocator.first();
            const maybeInput = first.locator('input.select2-input[role="combobox"]').first();
            if (await maybeInput.count() > 0 && await maybeInput.isVisible()) {
                searchInput = maybeInput;
            }
        } catch (e) {
            // ignore
        }

        if (searchInput) {
            await searchInput.waitFor({ state: 'visible', timeout }).catch(() => {});
            await searchInput.fill(optionText);
        } else {
            // fallback: type into focused element (some Select2 variants move focus to a global input)
            try {
                await page.evaluate(() => { if (document.activeElement) document.activeElement.focus(); });
            } catch (e) {
                // ignore
            }
            await page.keyboard.type(optionText);
        }

        // Wait for the option to appear and click it
        const optionLocator = page.locator('.select2-result-label', { hasText: optionText });
        await optionLocator.waitFor({ state: 'visible', timeout });
        await optionLocator.first().click();
    }
}

export default Select2Helper;
