//lexical scope is nothing but a function defined inside a function
//will always have outer scope
function demo()
{
    let a = 3;
    
    function print()
    {
        console.log(a);
        //variable "a" which is declared outside in function demo
        //is global for function print and it can be accessed within function print()
    }

    return print
}

let pp = demo()
pp()