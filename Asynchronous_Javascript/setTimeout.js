//we provide a time, and after the it executes s
//setTimeout(cb, 2000) cb is callback function and 2000 is 2secs

//e.g
function sayHello()
{
    console.log("Hey There !")
}

console.log("Before : ")
setTimeout(sayHello, 3000)      //here it executes after 3 seconds
//this is also asynchronous
console.log("After : ")

//since it is async it wont wait for  setTimeout to get over, instead it finishes all synchronous calls
//o/p ->
//before
//after
//sayHello executes
