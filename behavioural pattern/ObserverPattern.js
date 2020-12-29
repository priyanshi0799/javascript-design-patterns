//! It allows objects (observers) that have subscribed to an event to wait for input and 
//! react to it when notified. This means they don’t have to continuously keep checking 
//! whether the input has been provided or not. The main subject maintains a list of all 
//! the observers and whenever the event occurs, it notifies the observers so they can 
//! update their states accordingly.

//! Let’s look at a real-life example that we can map to this pattern. Consider a website 
//! that posts interesting articles. Every day, you visit the site to check for new articles 
//! and if there is none, you revisit after some time/days. What if you get a subscription 
//! to the website instead? Once you have the subscription, you’ll get notified every time 
//! a new article is posted. So now, instead of checking the site every few hours, you just 
//! wait for the notification about a new article.


class Subject{
    constructor(){
        this.observerList = []
        this.newArticlePosted = false
        this.articleName = null
    }
    subscribe(observer){
        this.observerList.push(observer)
    }
	unsubscribe(observer){
        this.observerList = this.observerList.filter(obs => obs !== observer)
    }
    notify(){
        if(this.newArticlePosted){
            this.observerList.forEach(subscriber => subscriber.update())
        }
        else{
            return 
        }
    }
    getUpdate(){
        return this.articleName
    }
    postNewArticle(articleName){
        this.articleName = articleName
        this.newArticlePosted = true
        this.notify()
    }
}

class Observer{
    constructor(){
        this.subject = new Subject()
    }
    update(){
        if(subject.getUpdate() == null){
            console.log("No new article")
        }else{
            console.log(`The new article ${subject.getUpdate()} is posted`)
        }
    }
    setSubject(subject){
        this.subject = subject
    }
}
var subject = new Subject()
var observer = new Observer()
observer.setSubject(subject)
subject.subscribe(observer)
observer.update()
subject.postNewArticle("Dark matter")


//! The observer pattern can be used to:
//! To improve code management by breaking down large applications into a system of 
//! loosely-coupled objects.
//! provide greater flexibility by enabling a dynamic relationship between observers and 
//! subscribers which is otherwise not possible due to tight coupling.
//! improve communication between different parts of the application.
//! create a one-to-many dependency between objects that are loosely coupled.

