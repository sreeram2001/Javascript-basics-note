//INHERITANCE
//WE USE INHERITANCE TO INHERIT THE METHOD/FUNCTIONS AND ATTRIBUTES/DATA MEMEBERS OF A CLASS
//THE CLASS THAT IS INHERITED FROM IS CALLED AS PARENT/BASE CLASS, AND THE INHERITED CLASS IS THE CHILD/DERIVED CLASS.
//IN JS WE USE THE EXTENDS KEYWORD TO INHERIT THE CLASS, TO INHERIT THE MEMBER WE USE SUPER KEYWORD

class Person
{
    constructor(name, age)
    {
        this.name = name;
        this.age = age;
    }

    //METHODS
    WELCOME()
    {
        console.log(`Hey there ${this.name}`)
    }
}

class Student extends Person{

    constructor(name, age, cgpa)
    {
        super(name, age)    //super is used to inherit data members from parent/base class
        this.cgpa = cgpa
    }

    //inherit method from base class using super keyword
    test()
    {
        super.WELCOME();
    }
}

class Teacher extends Person{
    constructor(name, age, total)
    {
        super(name, age)
        this.totalstrength =total
    }
}


p1 = new Person("goku", 22)
p2 = new Student("goku", 22, 9.2)
p3 = new Teacher("goku", 22, 50)
console.log(p1, p2, p3)
p2.test()

