//NewsLetter Observer Patterns

function NewsLetter (){
    this.observer = [];
}
//adding NewsLetter propertis and function
NewsLetter.prototype = {
    subscribe: function(fn){
	this.observer.push(fn);
    },
    unsubscribe: function(fnToBeRemove){
	this.observer = this.observer.filter(fn=>{
	    if(fn != fnToBeRemove)
		return fn;
	})	    
    },
    
    triger: function(){
	
	this.observer.forEach(fn => {

	        fn.call();  
	})	   
    },
}
    
//creating the constructor object
const newsLetter = new NewsLetter();

    //creating observer functions
    function Observer1(){
	console.log('observer 1 is triged');
    }

    function Observer2(){
	console.log('observer 2 is triged');
    }

newsLetter.subscribe(Observer1);

newsLetter.subscribe(Observer2);

newsLetter.unsubscribe(Observer1);
newsLetter.triger();

	
	     
