//polymorphism basically means many forms
//in the example given below we use same method name for all classes 
//but different operation - its overriden
//we can perform single action or the same action in different forms

class Animal
{
    Hello()
    {
        console.log("Hi I am Animal")
    }
}

class Dog
{
    Hello()
    {
        console.log("Hi its a dog")
    }
}

class Tiger
{
    Hello()
    {
        console.log("Better stay away from Me")
    }
}


a = new Animal()
d = new Dog()
t = new Tiger()
a.Hello()
d.Hello()
t.Hello()
