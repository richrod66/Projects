let marks = Array (6);
marks = new Array(20,30,40,50,60,70);

marks = [20,45,87,69,87,55];
console.log(marks[2]);
console.log(marks);

marks[3] = 14;
console.log(marks);
console.log(marks.length);

marks.push(15)
console.log(marks);
console.log(marks.length);

marks.pop();
console.log(marks);
console.log(marks.length);

marks.unshift(33);
console.log(marks);
console.log(marks.length);

console.log(marks.indexOf(87));

console.log(marks.includes(140));

let subMarks = marks.slice(2,5);

console.log(subMarks);
let sum = 0
for(let x=0 ; x < marks.length ; x++){
    console.log(marks[x])
    sum = sum + marks[x]
   
}
 console.log('The sum : ',sum)

//reduce filter  map

let total = marks.reduce((sum,marks)=>sum+marks,0)
console.log('The Total : ', total)

//filter

var Scores = [12,13,14,16]
let newFilterEvenScore = Scores.filter(score=>score%2 == 0)
console.log(newFilterEvenScore)


//map

let mappedArray = newFilterEvenScore.map(score=>score*3)
console.log(mappedArray)

let mappedArraySum = mappedArray.reduce((MASum,mappedArray)=>MASum+mappedArray,0)

console.log(mappedArraySum)

let fruits = ["Banana","Mango","Pomegrante", "Apple"]
console.log(fruits)

fruits.sort()

console.log(fruits)

let score2 = [30,73,002,81,20,66]
console.log(score2)

score2.sort((a,b)=>a-b)
console.log(score2)

score2.sort((a,b)=>b-a)
console.log(score2)

score2.reverse()
console.log(score2)

let score3 = [300,73,002,881,20,66]

console.log(score3.sort((a,b)=>a-b).reverse())
