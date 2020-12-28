//!  The abstract pattern is similar to Factory Pattern; the difference is that it provides 
//! a constructor to create families of related objects. It is abstract, meaning it does
//! not specify concrete classes or constructors.

function Soda(name,type,price) {
    this.name = name;
    this.type = type;
    this.price = price;
    this.display = function(){
        console.log(`The ${this.type} ${this.name} costs ${this.price} dollars`)
    }
}

function Chips(name,type,price) {
    this.name = name;
    this.type = type;
    this.price = price;
    this.display = function(){
        console.log(`The ${this.type} ${this.name} costs ${this.price} dollars`)
    }
}

function JunkFoodFactory(){
    var junkfood;
    this.createJunkFood = function(name,type,price) {
        switch (name) {
            case "chips":
                junkfood =  new Chips(name,type,price);
                break;
            case "soda":
                junkfood = new Soda(name,type,price);
                break;
            default:
                junkfood = new Chips(name,type,price);
                break;
        }
        return junkfood;
    }  
}
 

var factory = new JunkFoodFactory();
var chips = factory.createJunkFood("chips","potato",1.50)
chips.display()

chips = factory.createJunkFood("chips","corn",2.50)
chips.display()

var soda = factory.createJunkFood("soda", "Energy Drink", 10)
soda.display()

soda = factory.createJunkFood("soda", "Cola", 7)
soda.display()


//! The abstract pattern for creating instances is preferred over initializing when using 
//! the new operator since constructors have limited control over the process. Whereas, 
//! a factory pattern will have broader knowledge.

//! The use cases for this pattern are:

//! applications requiring the reuse or sharing of objects
//! applications with complex logic because they have multiple families of related objects 
//! that need to be used together
//! object caching
//! when the object creation process is to be shielded from the client