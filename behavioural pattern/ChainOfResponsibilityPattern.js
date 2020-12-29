//! The chain of responsibility pattern allows a request sent by a client to be received 
//! by more than one object. It creates a chain of loosely-coupled objects that, upon 
//! receiving the request, either handle it or pass it to the next handler object.

//! A common example of this pattern is event bubbling in DOM. An event propagates through 
//! different nested elements of the DOM until one of them handles it.


class HandlerChain 
{ 
    setNextObj(nextObjInChain){}
    processMultiple(req){
        console.log("No multiple for: " + req.getMultiple());
    }
} 
  
class Multiple
{
    constructor(multiple){
        this.multiple = multiple;
    }
  
    getMultiple(){ 
        return this.multiple; 
    } 
  
} 
  

class MultipleofTwoHandler extends HandlerChain
{
    constructor(){
        super()
        this.nextObjInChain = new HandlerChain()
    } 
    
    setNextObj(nextObj){ 
        this.nextObjInChain = nextObj; 
    } 
    
    processMultiple(req) { 
        if ((req.getMultiple() % 2) == 0) { 
            console.log("Multiple of 2: " + req.getMultiple()); 
        }else{ 
            this.nextObjInChain.processMultiple(req); 
        } 
    } 
} 
  
class MultipleofThreeHandler extends HandlerChain 
{ 
    constructor(){
        super()
        this.nextObjInChain = new HandlerChain()
    } 
    
    setNextObj(nextObj){ 
        this.nextObjInChain = nextObj; 
    } 
    
    processMultiple(req) 
    { 
        if ((req.getMultiple() % 3) == 0) { 
            console.log("Multiple of 3: " + req.getMultiple()); 
        }else{ 
            this.nextObjInChain.processMultiple(req); 
        } 
    } 
} 


class MultipleofFiveHandler extends HandlerChain
{ 
    constructor(){
        super()
        this.nextObjInChain = new HandlerChain()
    }
    
    setNextObj(nextObj){ 
        this.nextObjInChain = nextObj; 
    } 
    
    processMultiple(req) { 
        if ((req.getMultiple() % 5) == 0) { 
            console.log("Multiple of 5: " + req.getMultiple()); 
        }else{ 
            this.nextObjInChain.processMultiple(req); 
        } 
    } 
} 

//configuring the chain of handler objects
var c1 = new MultipleofTwoHandler(); 
var c2 = new MultipleofThreeHandler(); 
var c3 = new MultipleofFiveHandler(); 
c1.setNextObj(c2); 
c2.setNextObj(c3); 
  
//the chain handling different cases
c1.processMultiple(new Multiple(95)); 
c1.processMultiple(new Multiple(50)); 
c1.processMultiple(new Multiple(9)); 
c1.processMultiple(new Multiple(4)); 
c1.processMultiple(new Multiple(21));
c1.processMultiple(new Multiple(23)); 


//! You can use it if your program is written to handle various requests in different ways 
//! without knowing the sequence and type of requests beforehand. It allows you to chain 
//! several handlers, thus, allowing all of them a chance to process the request.

//! A good example of the use of the chain of responsibility pattern is in the process of 
//! event bubbling in the DOM, where the event propagates through the nested elements, one 
//! of which may choose to handle the event.