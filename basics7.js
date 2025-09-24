//JavaScript Classes and it's Properties, Methods in javaScript

module.exports = class Person
{
    age = 25
    
    //location = "Canada"

    get location()
    {
        return "Canada"
    }

    //Constructor is a method wich executes by default when you create an object os the class

    constructor(firstName,lastName)
    {
        this.fName = firstName
        this.lName =lastName
    }

//methods
fullName()
{
    console.log(this.fName+this.lName)
}


}



