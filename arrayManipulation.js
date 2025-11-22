//Create an Array of strings "Student Names"
let studenList = Array.from(['James', 'Peter', 'Paul', 'Marie', 'Rahul'])
console.log(studenList)

//Add a new student name to the beginning of the array

studenList.unshift('Richard')
console.log(studenList)

//Remove the last student name from the array
studenList.pop()
console.log(studenList)

//Alphabetize the student names within the array
studenList.sort()
console.log(studenList)