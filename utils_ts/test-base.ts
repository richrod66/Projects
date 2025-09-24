import{test as baseTest} from '@playwright/test';

interface TestDataForOrder {
  userName: string;
  passWord: string;
  country: string;
  productToPurchase: string;
  ccnumber: string;
  ccexpirymonth: string;
  ccexpiryyear: string;
  cvv: string;
  ccname: string;
}


export const customTest = baseTest.extend<{testDataForOrder : TestDataForOrder}>(
  {
    testDataForOrder : {
      userName: "rich944@gmail.com",
      passWord: "Kronites2!",
      country: "United States",
      productToPurchase: "ZARA COAT 3",
      ccnumber: "3714 4963 5398 431",
      ccexpirymonth: "06",
      ccexpiryyear: "26",
      cvv: "123",
      ccname: "QA User",
    }

  }
)

//module.exports = { test: testExtended }
