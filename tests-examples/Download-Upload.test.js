
// This script reads an Excel file and logs the values of each cell in the first sheet to the console.
const ExcelJS = require('exceljs');

const { test, expect } = require('@playwright/test');

let filePath = 'C:/Users/Richa/Downloads/download.xlsx'; // Path to the Excel file




// This function reads an Excel file and logs the values of each cell in the first sheet to the console.
// This function reads an Excel file, searches for a specific value, and replaces it with a new value.    
async  function writeExcelTest(searchText, replaceText, change, filePath){
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.readFile(filePath);
    const worksheet = workbook.getWorksheet('Sheet1'); // Retrieve existing worksheet  
    if (!worksheet) {
        console.error('Sheet1 does not exist in the workbook.');
        return;
    }  
    const output = await readExcel(worksheet, searchText);

    const cell = worksheet.getCell(output.row, output.column+change.colChange);
    cell.value = replaceText;
    console.log(`Row ${output.row}, Column ${output.column+change.colChange} : Value - ${cell.value}`);
    await workbook.xlsx.writeFile(filePath);
}


async function readExcel(worksheet, searchText) {

let output = {row:-1, column:-1};
    worksheet.eachRow((row, rowNumber) => {
        row.eachCell((cell, colNumber) => {
            if (cell.value === searchText) {
                output.row = rowNumber;
                output.column = colNumber;
            }
        });
    });

    if (output.row === -1 || output.column === -1) {
        console.error(`Value "${searchText}" not found in the worksheet.`);
    } else {
        console.log(`Found "${searchText}" at Row ${output.row}, Column ${output.column}`);
    }

    return output;  
    
}



//update Mango Price to $3.50.
test ('Upload download excel validation', async ({page}) => {
    
    const textSearch = "Mango";
    const UpdateValue = "$3.50";
    await page.goto('https://rahulshettyacademy.com/upload-download-test/');
    const downloadPromise = page.waitForEvent('download');
    await page.getByRole('button', { name: 'Download' }).click();
    await downloadPromise;
    await writeExcelTest(textSearch,UpdateValue,{rowChange:0, colChange:2}, filePath).then(() => {console.log('Excel file updated successfully.'); }).catch((error) => {console.error('Error updating Excel file:', error);
    })

    await page.locator('#fileinput').click();
    await page.locator("#fileinput").setInputFiles(filePath); 
    const textlocator = page.gatbyRole('row').filter({ hasText: textlocator});
    await expect(desiredRow.locator("#cell-4-undefined")).toContainText(UpdateValue);
});
