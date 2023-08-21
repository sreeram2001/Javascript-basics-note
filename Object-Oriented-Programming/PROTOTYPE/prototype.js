//Prototype chaining is one prototype chained to another one or connected
//the prototype you created by your object linked to prebuilt object prototype which linked 
//to null container prototype - happens in browser

let obj
console.log(obj)    //UNDEFINED IN THIS CASE

let person = 
{
    name : 'Arjun',
    age : 30
}

console.log(person)                         //this created a default prototype object
console.log(person.hasOwnProperty('name'))    //using prototype methods - returns true has it key exist
console.log(person.hasOwnProperty('gender_name'))   //returns false

//lets create another constructor function
function mafia(name, age)
{
    this.name = name;
    this.age = age;
}

m = new mafia('sree',24)
console.log(m)

//THE OUTPUT WILL BE : //we create an extra prototype as we created a new object m
// mafia {name: 'sree', age: 24}
// age
// : 
// 24
// name
// : 
// "sree"
// [[Prototype]]
// : 
// Object
// constructor
// : 
// ƒ mafia(name, age)
// [[Prototype]]
// : 
// Object


//NOW LETS CREATE A FUNCTION FOR A PROTOTYPE SO THAT WE NEED NOT CREATE EVERYTIME WE 
//CREATE AN OBJECT USING OUR CONSTRUCTOR FUNCTION
function CAR(model, color)
{
    this.model = model;
    this.color = color;
}

//using prototype object and creating a common function
CAR.prototype.getModel = function(){

    console.log(`Car is ${this.model}`)
}

//now lets create an object
car = new CAR('AUDI', 'white')
car2 = new CAR('BMW','black')
console.log(car)
console.log(car2)
