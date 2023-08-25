const fs = require('fs')
console.log("Print start")

//to read a file synchronucosly
let filename = fs.readFileSync('file1.txt')
//filename stores the contents of the file

console.log("contents : " + filename)

//if file is very large sync is not good to use
