//Asynchronous javascript method

const fs = require('fs')
console.log("Line 1")

let data1 = fs.readFile('file1.txt', cb1)   //cb1 and cb2 are callback functions
let data2 = fs.readFile('file2.txt', cb2)

function cb1(err, data1)
{
    if(err)
    {   
        //if we encounter any errors
        console.log(err)
    }
    console.log("File 1 : " + data1)
}

function cb2(err, data2)
{
    if(err)
    {   
        //if we encounter any errors
        console.log(err)
    }
    console.log("File 2 : " + data2)
}

console.log("End Line")

//if you notice the outputcarefully here : 

// Line 1
// End Line
// File 2 : I Will join Google on October
// File 1 : Hi I am Somebody

//end line printed before file1 and file2 becuase in async we don't wait
//for one line to wait or function to execute we keep moving while the others
//print slowly and execute in the background



//INPORTANT NOTES : 
//in js we have a callback stack, callback queue and node API stack
//all synch calls go to callback stack
//all async calls go to api stack, only after callback stack is empty eventloop checks it
//if all sync calls are over, async calls or methods will be called.
//so async calls stays in callback queue, event loops checks if callback stack is empty everytime
//if yes move from queue to stack and execute the async callback work
