const Person = require('./basics7')
let day = 'tuesday '

//since in javaScript s string is a collection of characters hou can manipulate the content os the string variable
//1. Get the lenght od the string variable use method .length

let dayLengh = day.length
console.log('day lenght = ' ,dayLengh)

//2. get the day abriviation of Tue

let shortDay = day.slice(0,3)
console.log('The short nanem is: ', shortDay)

//3. Split the day into tues and  day

let daySplit = day.split('s')
console.log("First element: ",daySplit[0].trim())
console.log("Second element: ",daySplit[1].trim())

//to convert strings into integer use the parsInt() method

let date ='23'
let nextDate = '27'

console.log(typeof(date))
console.log(typeof(nextDate))

console.log('The diff = ',(parseInt(nextDate)-parseInt(date)))

//how many time doe the word day apear in "tuesday is funday"?

let phrase = "tuesday is funday but wednesday is humpday"
console.log(phrase.includes("day"))

let indVal1= phrase.indexOf("day",5)
console.log(indVal1)

let match = phrase.match(/day/g)
console.log("How many time does the word 'day' apear in the phrase ? ",match.length)


let person = new Person('Richard ','Rodriguez')
person.fullName()

