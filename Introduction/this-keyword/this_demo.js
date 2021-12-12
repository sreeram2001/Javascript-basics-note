
let v = {
    name : 'a',
    id : 56,

    plugin() {
        console.log(this);
        console.log(this.name);
        console.log(this.id);

    }
};


v.plugin();

v.stop = function() {
    console.log(this);
}


v.stop();




function Hero(title,power) {
    this.title = title;
    this.power = power;
    console.log(this);
    console.log(this.power);
    console.log(this.title);
}

const h = new Hero('batman',900);






const student = {
    name : 'rahul',
    friends : ['rakesh','john','rocky'],
    
    showfriends() {
        this.friends.forEach(function(element) {
            console.log(this.name,element);

        },this)
    }
}

student.showfriends();