var a = {
    name:"sree",
    numb : 1,

    ADDRESS : {
        city : "Dubai"
    }
}

var b = JSON.parse(JSON.stringify(a))   //deep copy an object
//now if we change the address it doesnt affect a at all. 
//we have introduced one higher level of mutation
b.ADDRESS.city = "AMERICA"
console.log(a,b)

//as you can notice change in b doesn;t affect change in a,we have created a new pointer in stack memory
