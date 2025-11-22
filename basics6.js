const Person = require('./basics7.js')

//Object is a collection of properties

let person = {

    fname: 'Tim',
    lname: 'Joe',
    pAge: 59,
    fullName: function()
    {
       console.log(this.fname +" "+ this.lname)

    }
}

//console.log("The name is: ", person.fname,person.lname)

person.fname = 'Tom'

//console.log("The name is: ", person.fname,person.lname)

person.gender = 'Male'

//console.log("The name is: ", person)

delete person.gender

//console.log("The name is: ", person)

if (!('gender' in person)){
    person.gender = 'Male'
}
//console.log("The full name is: ", person.fname)
//console.log("The full name is: ", person.lname)
person.fullName()


for(let key in person)
{
    console.log(person[key])
}




console.log(person.fullName)




