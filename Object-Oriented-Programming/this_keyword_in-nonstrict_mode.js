
console.log(this) //returns empty object


//this keyword refers to Global Object inside a function
function Displ()
{
    console.log(this)
}
Displ();


//when function is created inside an object
let dummy = {
    name : "sreeram",
    age : 34,
    car : function()
    {
        console.log(this);
    }
}
//this keyword refers to the object itself
dummy.car();


//when there is a function inside a function
//when function created inside an object
let dummy1 = {
    name : "sreeram",
    age : 34,
    car : function()
    {
        
        function yo()
        {
            console.log(this);
        }
        
        yo();
    }
}
//we get the global object
dummy1.car();
