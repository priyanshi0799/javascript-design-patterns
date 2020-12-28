//! The bridge pattern allows separate components with separate interfaces to work together. 
//! It keeps an object’s interface separate from its implementation, allowing the two to 
//! vary independently.

//! An example is controlling an air conditioner with a remote. The air conditioners can be 
//! of different types and each of them is controlled by a different remote. The remotes 
//! can vary, that is, a new one with better features can be introduced, but that won’t make 
//! any changes to the air conditioner classes. The same goes the other way round. 
//! The bridge pattern allows input and output devices to work together but vary independently.


class SimpleRemoteControl{
    constructor(ac){
        this.ac = ac;
    
        this.on = function() {
            this.ac.on();
        };
    
        this.off = function() {
            this.ac.off();
        };
    
        this.setTemperature = function(temp) {
            this.ac.setTemperature(temp);
        };
    }
};
  
class InverterRemoteControl {
    constructor(ac){
        this.ac = ac;
        
    
        this.heat = function() {
            this.ac.heatOn();
        };
    
        this.cold= function() {
            this.ac.coldOn();
        };
    
        this.on = function() {
            this.ac.on();
        };
    
        this.off = function() {
            this.ac.off();
        };
    
        this.setTemperature = function(temp) {
            this.ac.setTemperature(temp);
        };
    }
};
  
  
class SimpleAC {
    constructor(){
        this.on = function() {
            console.log('Simple AC is on');
        };
    
        this.off = function() {
            console.log('Simple AC is off');
        };
    
        this.setTemperature = function(temp) {
            console.log(`Simple AC's cooling is set to ` + temp + ' degrees');
        };
    }
}
  
class InverterAC {
    constructor(){
        this.setting = "cool"
    
        this.on = function() {
            console.log('Inverter AC is on');
        };
    
        this.off = function() {
            console.log('Inverter AC is off');
        };
    
        this.heatOn = function(){
            this.setting = "heat"
            console.log("Inverter AC's heating is on")
        };
    
        this.coldOn = function() {
            this.setting = "cool"
            console.log("Inverter AC's cooling is on")
        };
    
        this.setTemperature = function(temp) {
            if(this.setting == "cool"){
            console.log(`Inverter AC's cooling is set to ` + temp + ' degrees');
            }
            if(this.setting == "heat"){
            console.log(`Inverter AC's heating is set to ` + temp + ' degrees');
            }
            
        };
    }
}
  
const simpleAC = new SimpleAC()
const inverterAC = new InverterAC()
  
const simpleRemote = new SimpleRemoteControl(simpleAC)
const inverterRemote = new InverterRemoteControl(inverterAC)
  
simpleRemote.on()
simpleRemote.setTemperature(16)
simpleRemote.off()
  
inverterRemote.on()
inverterRemote.heat()
inverterRemote.setTemperature(22)
inverterRemote.off()


//! You can use the bridge pattern if you want to:

//! extend a class in several independent dimensions
//! change the implementation at run time
//! share the implementation between objects