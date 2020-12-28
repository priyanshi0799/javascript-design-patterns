//! The singleton pattern is a type of creational pattern that restricts the instantiation 
//! of a class to a single object. This allows the class to create an instance of the class 
//! the first time it is instantiated. However, on the next try, the existing instance of 
//! the class is returned. No new instance is created.

//! A real-life example is a printer a couple of office employees want to use. It’ll be a 
//! shared resource amongst all the employees.


let instance = null;
class Printer {
  constructor(pages) {
    this.display= function(){
      console.log(`You are connected to the printer. You want to print ${pages} pages.`)
    }
  }

  static getInstance(numOfpages){
    if(!instance){
      instance = new Printer(numOfpages);
    }
    return instance;
  }
}

var obj1 = Printer.getInstance(2)
console.log(obj1)
obj1.display()
var obj2 = Printer.getInstance(3)
console.log(obj2)
obj2.display()
console.log(obj2 == obj1)


//! The singleton pattern is mostly used in cases where you want a single object to 
//! coordinate actions across a system. Singletons are mostly used by:

//! Services: services can be singleton since they store the state, configuration, and 
//! provide access to resources. Therefore, it makes sense to have a single instance of 
//! a service in an application.
//! Databases: when it comes to database connections, databases such as MongoDB utilize 
//! the singleton pattern.
//! Configurations: if there is an object with a specific configuration, you don’t need a 
//! new instance every time that configuration object is needed.

