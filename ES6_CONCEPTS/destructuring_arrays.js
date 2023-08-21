//destructuring assgt syntax is a JS syntax, to unpack values from arrays or properties from
//objects into distinct variables

let arr = ['hey', "whats", 'the', 4, `tata`]

let [a,b,c,d,e] = arr;

//a contains "hey"
//b contains "whats"
//similarly the rest
console.log(a,b,e,c,d)
console.log(e.length)