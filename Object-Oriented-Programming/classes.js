class Person
{
    constructor(_name, _age)
    {   
        //this keyword refers to the object itself
        this.name = _name
        this.age = _age
    }

    //create methods
    Hello()
    {
        console.log(`HI There ${this.name}`)
    }
}

p1 = new Person("sree",22);         //object p1 is an instance of class Person
p1.Hello();
