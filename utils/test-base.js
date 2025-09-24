const base = require('@playwright/test');

exports.customtest = base.test.extend(
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
