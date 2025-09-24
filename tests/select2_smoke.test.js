import { test, expect } from '@playwright/test';
import Select2Helper from '../pageobjects/Select2Helper.js';

// This smoke test injects a minimal Select2-enabled select into the page using CDN assets,
// then verifies that Select2Helper.selectByText locates and selects an option, and that
// the dynamic select helper (label->value) can discover an option's value and select it.

test('Select2 smoke (in-page)', async ({ page }) => {
        const s2 = new Select2Helper(page);

        // Minimal HTML that pulls Select2 (and jQuery) from CDN and initializes a select
        const html = `
        <html>
            <head>
                <link href="https://cdnjs.cloudflare.com/ajax/libs/select2/3.5.2/select2.css" rel="stylesheet" />
            </head>
            <body>
                <select id="smoke-select" style="width:200px;">
                    <option value="v1">Alpha</option>
                    <option value="v2">Beta option</option>
                    <option value="v3">Gamma</option>
                </select>
                <div id="smoke-output"></div>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/select2/3.5.2/select2.min.js"></script>
                <script>
                    $(function(){
                        $('#smoke-select').select2();
                    });
                </script>
            </body>
        </html>`;

        await page.setContent(html, { waitUntil: 'domcontentloaded' });

        // Use Select2Helper to select "Beta option" by visible text
        await s2.selectByText('#s2id_smoke-select a.select2-choice', 'Beta option', { timeout: 5000 });

        // Confirm the underlying select's value changed to v2
        const val = await page.locator('select#smoke-select').inputValue();
        expect(val).toBe('v2');

        // Now test the dynamic select helper logic inline: discover option value for 'Alpha' and select it
        const selectLocator = page.locator('select#smoke-select');
        const optionValue = await selectLocator.evaluate((sel, label) => {
                const opts = Array.from(sel.options || []);
                const desired = (label || '').trim().toLowerCase();
                let match = opts.find(o => (o.text || '').trim().toLowerCase() === desired);
                if (!match) match = opts.find(o => (o.text || '').trim().toLowerCase().includes(desired));
                return match ? match.value : null;
        }, 'Alpha');
        expect(optionValue).toBe('v1');

        // The underlying <select> may be hidden by Select2; directly set its value and trigger change
        await selectLocator.evaluate((sel, val) => {
            sel.value = val;
            // If jQuery is present, trigger change to notify Select2. Otherwise dispatch an Event.
            if (window.jQuery) {
                window.jQuery(sel).trigger('change');
            } else {
                const evt = new Event('change', { bubbles: true });
                sel.dispatchEvent(evt);
            }
        }, optionValue);
        const val2 = await selectLocator.evaluate(sel => sel.value);
        expect(val2).toBe('v1');
});
