class Person{
    constructor(_name, _age)
    {
        this.name = _name
        this.age = _age
    }

    Hellow()
    {
        console.log("Hi this is",this.name)
    }
}

pp = new Person("mpl",25)
pp.name = "RAM"
pp.Hellow();

//in the example above we can easily alter the (this.name) variable/data member - this creates security issues
//Inorder to get rid of such incidents, we have encapsulation, which does allow you to alter anything
//we have to use a getter setter method to access the values
//we do not expose our variables outside of the class

//ENCAPSULATION

class Person1{

    constructor(_name, _age)
    {
        let name = _name
        this.age = _age
    }

    Hellow()
    {
        console.log("Hi this is",name)
    }
}

pp1 = new Person1("mpl",25)
pp1.name = "RAM"
pp1.Hellow();
