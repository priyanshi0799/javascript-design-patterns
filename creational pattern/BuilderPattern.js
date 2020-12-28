//! The builder pattern is a type of creational pattern that helps in building complex 
//! objects using simpler objects. It provides a flexible and step-by-step approach towards 
//! making these objects. It also keeps the representation and process of creation shielded.

//! Consider the example of a restaurant that has to build a meal for its customers. 
//! The building process has various stages:

//! The customer comes in and places an orders for a meal to the cashier
//! The cashier forwards the order to the crew member (the builder) who makes the order
//! The builder assembles the meal consisting of the burger, fries, and soda of choice
//! The cashier receives the final meal from the builder
//! The customer receives the final order from the cashier

//! Every meal ordered by the customer regardless of the choices for the burger, fries, 
//! and soda will follow the same process. As you can see, a complex object is created 
//! following a step-by-step process.

function Meal() {
    this.make = function(builder){
      builder.step1();
      builder.step2();
      builder.step3();
      builder.step4();
      return builder.get();
    }
  }
   
  function MealBuilder(pattie,side,soda) {
     this.meal = null;
     this.step1 = function() {
          this.meal = new Order();
      };
   
      this.step2 = function() {
          this.meal.addBurger(pattie);
      };
  
      this.step3 = function(){
        this.meal.addSide(side);
      }
      
      this.step4 = function(){
        this.meal.addSoda(soda);
      }
   
      this.get = function() {
          return this.meal;
      };
  }
   
  function Order() {
      this.burger = null;
      this.side = null;
      this.soda = null; 
   
      this.addBurger = function(pattie) {
          this.burger = pattie;
      };
   
      this.addSide = function(side) {
          this.side = side;
      };
  
      this.addSoda = function(soda){
        this.soda = soda;
      }
  
      this.display = function(){
        console.log(`You meal has a ${this.burger} burger, ${this.side} on the side, and a ${this.soda}.`)
      }
  }
   
  var meal = new Meal();
  var mealBuilder = new MealBuilder("chicken","curly fries","coke");
  var chickenBurgerMeal = meal.make(mealBuilder);
  chickenBurgerMeal.display();   