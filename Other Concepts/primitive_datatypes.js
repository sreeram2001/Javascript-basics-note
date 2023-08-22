//in this example we are using primitve data types, we assign value of first to second
//and change second but first remains same
let first = 'a'
let second = first

first = 'b'
console.log("first : ", first)
console.log("second : ", second)


//in this example we are using an object, we assign a to b and change one parameter it gets 
//changed in b as well, this is reference data type
var a = {
    name : "sree"
}
var b = a;
a.name = "ram"
console.log(a,b)


//in primitive data types we use stack memory, in reference data types we use heap memeory
//values are fixed in stack memory

//in reffernece datatypes, inside the stack memory we store a 
//pointer that points to the memory location in a heap, we dont store the value
//we store the address
