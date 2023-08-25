const fs = require('fs')

//  THE PROBLEM WITH ASYNC CALLS IS IT GETS EXECUTED IN RANDOM ORDER WHEN PARALLEL
//HENCE WE USE SERIAL EXECUTION THAT IS MAKE CALLBACK FUNCTION2 ONCE CALLBACK1 IS OVER
//SO WE MAKE CALLBACK FUNCTION CALL1 INSIDE CALLBACK1

let data = fs.readFile('file1.txt',cb1)

//function callback1
function cb1(err, data)
{
    //if error is faced
    if(err)
    {
        console.log(err)
    }
    console.log("File 1 : " + data)

    //make function call here for callback2
    fs.readFile('file2.txt',cb2)
}

//function callback2
function cb2(err, data)
{
    //if error is faced
    if(err)
    {
        console.log(err)
    }
    console.log("File 2 : " + data)
    fs.readFile('file3.txt',cb3)

}

//function callback3
function cb3(err, data)
{
    //if error is faced
    if(err)
    {
        console.log(err)
    }
    console.log("File 3: " + data)
}