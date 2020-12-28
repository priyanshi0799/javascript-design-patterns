// * What is Factory Pattern??
//! The factory pattern is a creational pattern that provides a template that can be used 
//! to create objects. It is used in complex situations where the type of the object 
//! required varies and needs to be specified in each case.

//!It does not use the new keyword directly to instantiate objects. This means it does not 
//! explicitly require the use of a constructor to create objects. Instead, it provides a 
//! generic interface that delegates the object creation responsibility to the corresponding subclass.


// * Example of this pattern??
class IceCreamFactory{
    constructor(){
        this.createIceCream = function(flavor){
            let icecream;

            if(flavor === 'chocolate'){
                icecream = new Chocolate();
            }else if(flavor === 'mint'){
                icecream = new Mint();
            }else if(flavor === 'strawberry'){
                icecream = new Strawberry();
            }

            return icecream;
        }
    }
}

class Chocolate{
    constructor(){
        this.icecreamFlavor = 'chocolate';
        this.message = function(){
            return `You chose the ${this.icecreamFlavor} flavor.`;
        };
    }
}

class Mint{
    constructor(){
        this.icecreamFlavor = 'mint';
        this.message = function(){
            return `You chose the ${this.icecreamFlavor} flavor.`;
        };
    }
}

class Strawberry{
    constructor(){
        this.icecreamFlavor = 'strawberry';
        this.message = function(){
            return `You chose the ${this.icecreamFlavor} flavor.`;
        };
    }
}

const iceCreamfacroty = new IceCreamFactory();
const chocolate = iceCreamfacroty.createIceCream('chocolate');
const mint = iceCreamfacroty.createIceCream('mint');
const strawberry = iceCreamfacroty.createIceCream('strawberry');

console.log(chocolate.message());
console.log(mint.message());
console.log(strawberry.message());


// * When to use this pattern??
//! When the type of objects required cannot be anticipated beforehand 
//! When multiple objects that share similar characteristics need to be created
//! When you want to generalize the object instantiation process since the object set up is complex in nature