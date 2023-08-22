//shallow copy allows you not to change the contents of first object
//when the contents of second object is changed
//NOTE : but if you change a nested object then all the first and second objects also gets changed

var a = {
    name:"sree",
    numb : 1,

    ADDRESS : {
        city : "Dubai"
    }
}

var b = {...a}      //this is the spread operator used to implement shallow copy

b.name = "RAHUL"
console.log(a,b)   //as you can see the a.name is not changed only b is changed

a.name = "opl"
console.log(a,b)    //now you can see that change in a doesn't affect b


//IN THE FOLLOWING EXAMPLE
//when we alter the object, the values are changed this is a drawback
b.ADDRESS.city = "Paris"
console.log(a,b)
