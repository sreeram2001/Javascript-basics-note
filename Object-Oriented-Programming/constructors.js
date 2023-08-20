//CONSTRUCTORS
//A constructor is a special method of a class or structure
//in object-oriented programming that initializes a newly created object of that type. 
//Whenever an object is created, the constructor is called automatically.

function Cars(_name, _company)
{
    this.name = _name;
    this.company = _company;
    this.print = function()
    {
        console.log(`I own a ${this.company} ${this.name}`)
    }
}

//so basically this is => {} an empty object by making "this.name" we are
//creating new keys inside the object so
// now this object => { name : _name, company : _company, print : function()}

//using constructors to create objects
car1 = new Cars("XF", "JAGUAR");
car1.print()
