//! The prototype creational pattern is used to instantiate objects with some default 
//! values using an existing object. It clones the object and provides the existing 
//! properties to the cloned object using prototypal inheritance.

//! In prototypal inheritance, a prototype object acts as a blueprint from which other 
//! objects inherit when the constructor instantiates them. Hence, any properties defined 
//! on the prototype of a constructor function will also be present in the cloned object 
//! it creates.

var car = {
    drive(){
        console.log("Started Driving")
        },
    brake(){
        console.log("Stopping the car")
    },
    numofWheels : 4  
} 

const car1 = Object.create(car);
car1.drive();
car1.brake();
console.log(car1.numofWheels);

const car2 = Object.create(car)
car2.drive();
car2.brake();
console.log(car2.numofWheels);