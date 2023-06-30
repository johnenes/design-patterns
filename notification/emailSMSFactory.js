//this designe patterns for email and sms
class Notification {
    send(message){
	throw new Error('send() method must be implemented');
    }
}

//EMAIL NOTIFICATION
class EmailNotification extends Notification {
    send(message){
	console.log(`sending email notification:${message}`);
    }
}

//SMS NOTIFICATION
class SMSNotification extends Notification{
    send(message){
	console.log(`sending sms notification ${message}`);
    }
}


//MESSAGE ABSTRACTION
class Message {
    constructor(notification){
	this.notification = notification;
    }
    //taking method send()
    send(){
	this.notification.send(this);
    }
}


// EMAIL MESSAGE CLASS
class EmailMessage extends Message{
    constructor(notification, to, subject, body){
	super(notification);
	this.to = to;
	this.subject = subject;
	this.body = body;
    }
    send(){
	console.log(`Send email to : ${this.to}`);
	console.log(`Subject : ${this.subject}`);
	console.log(`Body : ${this.body}`)
        super.send();
    }
}

//SMS MESSAGE CLASS
class SMSMessage extends Message{
    constructor(notification, phoneNumber, body){
	super(notification);
	this.phoneNumber = phoneNumber;
	this.body = body;
    }
    send(){
	console.log(`Sending sms message : ${this.phoneNumber}`);
	console.log(`Body : ${this.body}`);
	super.send();
    }
}

//Message Factory patterns
class NotificationFactory {
    createNotification(type){
	switch(type){
	case 'email':
	    return new EmailNotification();
	case 'sms':
	    return new SMSNotification();
	default:
	    throw new Error(`invalid Notification passed : ${type}`);
	}
    }
}

//usage

const factory = new NotificationFactory();

//creating and email message
const emailNotification =  factory.createNotificatio('email');
const emailMessage = new EmailMessage(emailNotification, 'johneneojo1@gmail.com','Meeting','just keep you inform concernning the meeting');
emailMessage.send();



//create and send sms message
const smsNotification = factory.createNotification('sms');
const smsMessage = new SMSMessage(smsNotification, '+2348061278120', 'Good day friend');
smsMessage.send();
