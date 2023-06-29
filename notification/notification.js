// class Interface
class Notification{
    send(mesage){
	throw new Error('send() method must be implmented');
    }

}

// Create Email Notification class
class EmailNotification{
    send(message){
	console.log(`sending Email Notification ${message}`);
    }
}
// Create SMS Notification class
class SMSNotification {
    send(message){
	console.log(`sendiing SMS notification ${message}`);
    }
}

//Create Notification factory class
class NotificationFactory{
    //create fuction handing the notifications
    createNotification (type){
	switch(type){
	case "email":
	    return new EMailNotification();
	case "sms":
	    return new SMSNotification();
	    
	default:
	    throw new Error(`Invalid Notification ${type}`);
	}
    }
}

//Creating the new Factory class object

const factory  = new NotificationFactory();

//creating calling the factory 
const emailNotification  = factory.createNotification('email');
emailNotification.send('Your got this email because you apply for 2023 admission');

//creating sms notification
const smsNotification  = factory.createNotification('sms');
smsNotification.send('Congratulation, if you got this message');

