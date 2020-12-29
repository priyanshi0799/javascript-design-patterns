//! It is a behavioral pattern that allows a mediator (a central authority) to act as the 
//! coordinator between different objects, instead of the objects referring to each other 
//! directly. A mediator as the name implies, is a central authority through which various 
//! components can communicate. It allows the loose coupling of objects.

//! A real-life example is a chat application. Here, the chat box acts as the mediator 
//! through which various users interact with one another.


class User{
    constructor(name,userId){
        this.name = name
        this.userId = userId
        this.chatbox = null;
    }
    sendMessage(message,sendTo){
        this.chatbox.send(message,this,sendTo)
    }
    receiveMessage(message,receiveFrom){
        console.log(`${receiveFrom.name} sent the message: ${message}`)
    }
}
  
class ChatBox{
    
    constructor(){
        this.users = []
    }
    
    register(user){
        this.users[user.userId] = user
        user.chatbox = this;
    }
  
    send(message,receiveFrom,sendTo){
        sendTo.receiveMessage(message, receiveFrom);    
    }
}
  
var chatbox = new ChatBox();
var joey = new User("Joey",1);
var phoebe = new User("Phoebe",2);
chatbox.register(joey);
chatbox.register(phoebe);
joey.sendMessage("Hey, how you doing?",phoebe);
phoebe.sendMessage("Smelly Cat, Smelly Cat..",joey);
joey.sendMessage("I love this song!", phoebe);


//! It can be used:
//! If your system has multiple parts that need to communicate
//! To avoid tight coupling of objects in a system with a lot of objects
//! To improve code readability
//! To make code easier to maintain
//! If communication between objects becomes complex and hinders the reusability of code