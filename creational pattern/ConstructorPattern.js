//! The “constructor pattern”, as the name defines, is a class-based pattern that uses the 
//! constructors present in the class to create specific types of objects.

function Human(name, age, occupation){ 

    //ES5 function based constructor 
    //defining properties inside the constructor function
    //constructor initializing the property values upon object creation
    this.name = name; 
    this.age = age;
    this.occupation = occupation;


    //defining a method inside the constructor function
    this.describe = function(){
      console.log(`${this.name} is a ${this.age}-year-old ${this.occupation}`);
    }
}

//creating a "person" object using the Human constructor
//the constructor uses the arguments passed into it to
//initialize the property values name, age and sex
var person = new Human("Elle", "23", "Engineer");


//calling the describe method for the person object
person.describe();

//creating a second object
var newperson = new Human("Joe", "13","Painter");
newperson.describe();


//! You can use it when you want to create multiple instances of the same template, since 
//! the instances can share methods but can still be different. Some examples of where it 
//! can be useful include:

//! libraries
//! plugins