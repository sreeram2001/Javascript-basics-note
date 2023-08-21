
let a = 2
let b = "2"

console.log(a==b)   //loose checking, checks only if value is same and not the data type
//in the above case they are equal and output is true

//this is strict checking, this check for both data type and value are same or not
//a is int type and 2 is string data type so they wont match
console.log(a===b)  //here output is false