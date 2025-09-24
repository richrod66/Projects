const flag = true

if (!flag){
    console.log("condition satisfied")
}else{
    console.log("condition not satisfied")
}
let i =0
while (i<10){
    i++
    console.log("The value of i is : ", i)

}


let y = 0

for( let x = 1 ; x<=10 ; x++){
    console.log('This is the value of x in the for loop: ', x)
    
    y++

    if (x%2 == 0){
        console.log("this is even :", x)
    }

    if ( x%2 == 0 && y == 2 || y == 4){
        console.log('x = ', x ," ", 'Y = ', y)

    }
}