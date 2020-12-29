//! The command pattern allows encapsulation of the requests or operations into separate 
//! objects. It decouples the objects that send requests from the objects responsible for 
//! executing those requests.

//! Consider an example where the client is accessing the methods of an API directly 
//! throughout the application. What will happen if the implementation of that API changes? 
//! The change will have to be made everywhere the API is being used. To avoid this, we 
//! could make use of abstraction and separate the objects requesting from those implementing 
//! the request. Now, if a change occurs, only the object making the call will need to change.

//! Invoker: asks the command to carry out the request
//! Command: has information about the action and binds it to the receiver by invoking the 
//! corresponding operation on it
//! Receiver: knows how to perform the operations associated with the command
//! Client: creates a command and sets the receiver who’ll receive the command


class Command {
    execute() {};
}
  
  //TurnOnPrinter command
class TurnOnPrinter extends Command {
      
    constructor(printingMachine) {
        super();
        this.printingMachine = printingMachine;
        this.commandName = "turn on" 
    }
      
    execute() {
        this.printingMachine.turnOn();
    }
}
  
  //TurnOffPrinter command
class TurnOffPrinter extends Command {
  
    constructor(printingMachine) {
        super();
        this.printingMachine = printingMachine;
        this.commandName = "turn off" 
    }
    
    execute() {
      this.printingMachine.turnOff();
    }
    
}
  
  //Print command
class Print extends Command {
  
    constructor(printingMachine) {
        super();
        this.printingMachine = printingMachine;
        this.commandName = "print" 
    }
    
    execute() {
        this.printingMachine.print();
    }
    
}
  
  //Invoker
class PrinterControlPanel {
    pressButton(command) {
        console.log(`Pressing ${command.commandName} button`);
        command.execute();
    }
}
  
  //Reciever: 
class PrintingMachine {
  
    turnOn() {
        console.log('Printing machine has been turned on');
    }
    
    turnOff() {
        console.log('Printing machine has been turned off');
    }
  
    print(){
        console.log('The printer is printing your document')
    }
}
  
  
const printingMachine = new PrintingMachine();
const turnOnCommand = new TurnOnPrinter(printingMachine);
const turnOffCommand = new TurnOffPrinter(printingMachine);
const printCommand = new Print(printingMachine)
const controlPanel = new PrinterControlPanel();
controlPanel.pressButton(turnOnCommand);
controlPanel.pressButton(turnOffCommand);
controlPanel.pressButton(printCommand);


//! You can use it if you want to:
//! queue and execute requests at different times
//! perform operations such as reset or undo
//! keep a history of requests made