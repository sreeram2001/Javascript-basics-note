//here variable b can be accessed outside the block also, which creates security issues
//var b can be redeclared as well.

var a = 2;
var a = 20;

if(a == 20)
{
    var b = 15;
    console.log(b);
}
//b can be accesed outside this if block.
console.log(b)


//var c can't be used this time as variables with var keyword are not 
//blocked scoped they are function scoped

function print()
{
    var c = 10;
    console.log(c);
}
print()
console.log(c)
