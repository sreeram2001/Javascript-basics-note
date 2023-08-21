//ARROW FUNCTIONS IN JS IN ES6 MODULE

let print = function(a)
{
    console.log(a);
}

let add = function(a,b)
{
    console.log(a+b);
}

//now writing this in terms of ES6 - arrow functions style
let print1 = (a)=>{
    console.log(a);
}

//we can even write them in one liner
let print2 = a=>{
    console.log(a);
}

//add function in one line -easy syntax arrow functions
let add1 = (a,b)=> console.log(a+b);

// -> remove function keyword
// -> after closing bracket ) , put the arrow symbol '=>'
//remove the curly braces if you want to "{"


print(10)
print1(11)
print2(12)
add(20,30)
add1(21,31)
