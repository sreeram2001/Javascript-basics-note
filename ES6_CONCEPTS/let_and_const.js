
//let is blocked scoped, so you can't access it outside the block unlike var keyword
if(true)
{
    let c = 30;
    console.log(c);
}

console.log(c);


//we cannot redeclare a variable in let but we can reassign the variable let, in var you can do both
let a = 10;
let a = 25;


//const keyword is also blocked scoped and it cannot be redeclared or reassinged
const d = 10;
console.log(d)
