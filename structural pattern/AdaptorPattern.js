//! The adapter pattern allows classes that have different interfaces (properties/methods 
//! of an object) to work together. It translates the interface for a class to make it 
//! compatible with another class.

//! This pattern is useful if an API is modified or new implementations are added to it. 
//! In this case, if the other parts of a system are still using the old API, the adapter 
//! pattern will translate the interface so that the two can work together.


class SimpleEarphones{
    constructor(){
        this.attach = function(){
        console.log("Use Earphones with Type C phone")
        }
    }
    
}
  
class EarPhoneAdapter extends SimpleEarphones{
    constructor(typeCphone){
        super()
        this.attach = function(){
            typeCphone.attach()
        }
    }
}
  
class TypeCPhone {
    constructor(){
        this.attach = function(){
        console.log("Earphones attached to Type C phone")
        }
    } 
}
  
var typeCphone = new TypeCPhone()
var adapter = new EarPhoneAdapter(typeCphone)
adapter.attach()


//! The adapter pattern is used when we need old APIs to work with new refactored ones or 
//! when an object needs to cooperate with a class that has an incompatible interface. 
//! It can also be used to reuse the existing functionality of classes.
