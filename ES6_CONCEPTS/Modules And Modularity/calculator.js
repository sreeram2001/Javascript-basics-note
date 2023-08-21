//this file was created for implementing modules and modularity

function add(a,b)
{
    console.log(a+b)
}

function sub(a,b)
{
    console.log(a-b)
}

function mult(a,b)
{
    console.log(a*b)
}

function div(a,b)
{
    console.log(a/b)
}

module.exports = {
    addition:add,
    sub:sub,
    mult:mult,
    div:div
}