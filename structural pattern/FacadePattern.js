//! a facade pattern provides a simpler interface that hides the complex functionalities 
//! of a system.

//! The facade pattern allows you to hide all the messy logic from the client and only 
//! display the clear and easy-to-use interface to them. This allows them to interact 
//! with an API easily in a less error-prone way and without accessing the inner workings 
//! directly.

//! A simple example of the facade pattern is placing an order at a restaurant. Imagine 
//! yourself as a customer who wants to eat at a restaurant. You are the client in this 
//! scenario. Depending on the place you go to eat, it’s either the waiter will take your 
//! order, or you’ll place it at the counter. Then, you’ll wait for a few minutes and the 
//! next thing you know, your food will be served.

//! How was your food made? Which chef was assigned the task to make your food? What 
//! ingredients were used? How much stock was used or left afterward? Who cleaned the 
//! kitchen after your food had been prepared? All of these complexities are hidden from 
//! you. These are the unnecessary details that you as a customer, don’t need to know.

//! The illustration above presents a visualization of this situation.


let orderNumber = 0;

class PlaceFoodOrder {
  placeOrder(orderDetails) {
    const orderId = PlaceFoodOrder.generateId();
    let chef;
    if (orderDetails.foodType === 'Main Course') {
      chef = new MainCourseChef();
    } else if (orderDetails.foodType == 'Dessert') {
      chef = new DessertChef();
    }
    return chef.addFoodOrder({ orderId, orderDetails });
  }

  static generateId() {
    return ++orderNumber;
  }
}

class FoodOrders {
  constructor() {
    this.orders = [];
  }

  addFoodOrder(order) {
    this.orders.push(order);
    return this.conveyOrder(order);
  }

  timetoMakeOrder(){}
  conveyOrder(order) {}
}

class MainCourseChef extends FoodOrders {
  constructor() {
    super()
    this.assigned = true
    return this;
  }

  timetoMakeOrder(){
    return Math.floor(Math.random() * 50) + 10  
  }

  conveyOrder({orderId,orderDetails}) {
    const time = this.timetoMakeOrder()
    console.log( `Order number ${orderId}: ${orderDetails.foodDetails} will be served in ${time} minutes.`);
  }
}

class DessertChef extends FoodOrders {
  constructor() {
    super()
    this.assigned = true;
    return this;
  }
 
  timetoMakeOrder(){
    return Math.floor(Math.random() * 30) + 10  
  }

  conveyOrder({ orderId, orderDetails }) {
    const time = this.timetoMakeOrder()
    console.log( `Order number ${orderId}: ${orderDetails.foodDetails} will be served in ${time} minutes.`);
  }
}


const customer = new PlaceFoodOrder();
const order1 = customer.placeOrder({foodType: "Main Course", foodDetails: "Pasta with Shrimps"});
const order2 = customer.placeOrder({foodType: "Dessert", foodDetails: "Molten Lava Cake"});


//! The facade pattern is used to simplify a client’s interaction with a system. So, it 
//! can be used when an application has a large and complex underlying code that the client 
//! does not need to see.

//! It can also be used when you want to interact with the methods present in a library 
//! without knowing the processing that happens in the background. An example can be of the 
//! JavaScript libraries such as jQuery.