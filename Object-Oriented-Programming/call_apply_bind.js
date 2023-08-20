let ppl1 ={
    name : 'Tony',
    lastname : 'Stark',
    hero : 'Ironman',

    details : function()
    {
        console.log(`Hey I am ${this.name} ${this.lastname} AKA ${this.hero}`)
    }
}

let ppl2 = {
    name : 'Steve',
    lastname : 'Rogers',
    hero : 'Captain America'

}

//  now u can use call method and help ppl2 object reuse details from ppl1 object
ppl1.details.call(ppl2)

//HERE PPL2 IS PASSED INSTEAD OF PPL1 DETAILS

//another way to use this is : 

let p1 ={
    name : 'Tony',
    lastname : 'Stark',
    hero : 'Ironman',
}

let p2 = {
    name : 'Steve',
    lastname : 'Rogers',
    hero : 'Captain America'

}

let details = function(city)
    {
        console.log(`Hey I am ${this.name} ${this.lastname} AKA ${this.hero} from ${city}`)
    }

    //here you can details as a global funciton and even pass parameters using call method
details.call(p1,'New York');
details.call(p2, 'Berlin');


//Apply also does the same job but you need to pass as array
let apl1 = {
    name : 'Steve',
    lastname : 'Rogers',
    hero : 'Captain America'

}

let detail = function(city)
    {
        console.log(`Hey I am ${this.name} ${this.lastname} AKA ${this.hero} from ${city}`)
    }

    //here you can details as a global funciton and even pass parameters using call method
detail.apply(apl1,['New York']);


//BIND METHOD WILL CREATE A VARIABLE THAT STORES THE FUNCTION 
//EVERYTIME IT IS CALLED IT WILL INVOKE THE FUNCTION
let bindop = detail.bind(apl1)
console.log(bindop)
bindop()        //when you call it , it will invoke original funciton
