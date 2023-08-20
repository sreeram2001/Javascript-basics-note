'use strict'
//using strict mode

//we get empty object
console.log(this)


//inside a function - return undefined
function pp()
{
    console.log(this);
}
pp()

//function inside a an object - returns object itself
var op = {
    name : "SPid",
    oho : function()
    {
        console.log(this);
    }
}
op.oho();


//function insde of a function within an object returns undefined
var op = {
    name : "SPid",
    oho : function()
    {
        function pop()
        {
            console.log(this)
        }
        pop()
    }
}
op.oho();

//output => 
// {}
// undefined
// { name: 'SPid', oho: [Function: oho] }
// undefined
