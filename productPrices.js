//You have an array called productPrices with various product prices
let productPrices = Array.from([10.00, 30.00, 50.00,70.00,90.00])
console.log(productPrices)

//Apply a 10% discount to all prices using the map method and store the results in a new array called discountedPrices
let discountedPrices = productPrices.map((x) => x-(x*0.1))
console.log(discountedPrices)

//USe Filter method to create a new array called affordableProducts containing only products prices below $50
let affordableProducts = discountedPrices.filter((discountedPrices) => discountedPrices < 50)
console.log(affordableProducts)

//Calculate the total cost of all items in the affordableProducts array using the reduce method
const total = affordableProducts.reduce((total,currentValue) => total + currentValue,0);
console.log(total)

