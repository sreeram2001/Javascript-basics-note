//to produce a Promise
//4 stages of Promise => pending-> fulfil/reject -> settled

let promise1 = new Promise(function(resolve, reject)
{      
    const a = 100;
    const b = 200;

    //setTimeout(functionname, time limit in seconds to wait)
    setTimeout(()=>
    {
        if(a==b)
        {
            console.log("promise1 : Value equal")      //resolve case
        }
        else if(a != b)
        {
            console.log("promise1 : Values Not Equal")     //reject case
        }
    },2000)
});

//this would print Promise is pending thenprints value equal, in case a==b
// console.log(promise1)

//when value a!=b,  we need to catch the exception
//consuming promises
promise1.then(function(result)
{
    console.log(result)
}) //fulfilled state

//this catches the exception and prints the desired value, when exception occurs , i.e failed 
promise1.catch(function(failed)
{
    console.log(failed)
})  //rejected state



//RESOLVE REJECT EXAMPLE
let promise2 = new Promise(function(resolve, reject)
{      
    const aa = 200;
    const bb = 100;

    //setTimeout(functionname, time limit in seconds to wait)
    setTimeout(()=>
    {
        if(aa==bb)
        {
            resolve("Value equal")      //resolve case
        }
        else if(aa != bb)
        {
            reject("Values Not Equal")     //reject case
        }
    },2000)
});

promise2.then(function(resultt)
{
    console.log(resultt)
})

//this catches the exception and prints the desired value, when exception occurs , i.e failed 
promise2.catch(function(failedd)
{
    console.log(failedd)
})  //rejected state
