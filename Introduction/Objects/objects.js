//Objects are colllection of unordered key-value pairs
//An entity iis an object, separately identical

var person = {
name : "Sreeram",
age : 22,
car : false
};

console.log(person);

//bracket notation to access values
console.log("AGE :", person['age']);

//dot notation to access values
var name1 = person.name;
console.log("name: " , name1);

var ironman = 
{
    name : "Tony Stark",
    age : 40,
    cars : ['Audi', 'Cadillac', 'Rolls Royce'],

    //object inside an object
    address : 
    {
        state : "Los Angeles",
        city :
        { place : "New York"
        }
    }
}

console.log(ironman)
//access address
console.log(ironman.address);
console.log(ironman.address.city)

//alter value in objects
ironman.cars.push(" bmw");
ironman.address.state = "WASHINGTON"
console.log("Updated Object : ", ironman)

//create a new entry in object
ironman.movies = ["ironman2", "ironman3", "endgame"]
console.log("New Entries", ironman)

//delete an entry
delete ironman.age
console.log(ironman)