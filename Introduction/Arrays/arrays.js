
//define the array
var arr = [1,"Sree","ar",123]

//print the array
console.log(arr)

//access index
var a = arr[0]
console.log("Array ACcess : ", a)

//replace value in array
arr[1] = "RAM"
console.log(arr)

//length of array
console.log("LENGTH : ", arr.length)

//add element to array
arr.push(5);
console.log(arr);

//delete element
var popp = arr.pop();
console.log("Popped : ", popp)

//shift method 
//remmove element from starting
var first_deleted = arr.shift();
console.log(first_deleted)
console.log(arr)


//unshift method
//inserts value at first of array
arr.unshift(400);
console.log(arr)