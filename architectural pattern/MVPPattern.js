//! The MVP pattern stands for model view presenter. It is derived from the MVC pattern, 
//! which focuses on the user interface. MVP however, is focused on improving the presentation logic.

//! It consists of three components:
//! Model: provides the data that the application requires, which we want to display in the view
//! View: to display the data from the model, it passes the user actions/commands to the 
//! presenter to act upon that data
//! Presenter: acts as the middle man between the model and the view. Retrieves data from 
//! the model, manipulates it, and returns it to view for display. It also reacts to the 
//! user’s interaction with the view.


class Model{
    constructor(text){
        this.text = text;
    }
    setText(text){
        this.text = text;
    }
    getText(){
        return this.text;
    }
}

class View{
    constructor(){
        this.presenter = null;
    }

    registerWith(presenter){
        this.presenter = presenter;
    }

    displayError(){
        console.log("Text is not in upper case");
    }

    displayMessage(text){
        console.log("The text is: " + text);
    }

    changeText(text){
        this.presenter.changeText(text);
    }
}

class Presenter{
    constructor(view){
        this.view = view;
        this.model = null;
    }

    setModel(model){
        this.model= model;
    }

    getView(){
        return this.view;
    }

    changeText(text){
        if(text !== text.toUpperCase()){
            this.view.displayError();
        }else{
            this.model.setText(text); 
            this.view.displayMessage(this.model.getText());
        }
    }
}

var model   = new Model("Hello world!")
var view = new View()
var presenter = new Presenter(view)
presenter.setModel(model)
view.registerWith(presenter)
presenter.getView().changeText("unagi")
presenter.getView().changeText("UNAGI")


//! You can use this pattern:
//! If your application requires a lot of reuse of the presentation logic
//! If your application requires a lot of user interaction
//! If your application has complex views
//! For easier testing as the presenter can provide a mock interface that can be unit tested