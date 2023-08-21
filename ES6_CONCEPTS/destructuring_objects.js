
let myObj = {
    name : "Sreeram",
    age : "22",
    hometown : "Palakkad",
    job : {
        role : "Software Engineer",
        income : 1000000
    }
}

//we can destructure using same name as given in objects key
let {name,age,hometown, job} = myObj;
console.log(name, job)

//we can also give a different name as well
let {name : n,age : a,hometown: h, job : {role, income : inc}} = myObj;
console.log(a,role, inc)

