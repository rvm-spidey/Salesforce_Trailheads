import { MessageContext, subscribe, unsubscribe } from 'lightning/messageService';
import { LightningElement, wire } from 'lwc';
import ComrevoChannel from '@salesforce/messageChannel/ComrevoChannel__c'

export default class SubscriberComponent extends LightningElement {
  firstName = '';
  lastName = '';

  subscription = null;
  @wire (MessageContext) messageContext

  // call when component is loaded in DOM
  connectedCallback(){
    this.handleSubscribe();
  }

  disconnectedCallback() {
    this.handleUnsubscribe();
  }

  handleSubscribe() {
    if (!this.subscription) {
      subscribe(this.messageContext, ComrevoChannel,
      (parameter) => {
        console.log(" parameter ", parameter);
        this.firstName =  parameter.firstname;
        this.lastName =  parameter.lastname;
      }
      )
    }
  }

  handleUnsubscribe() {
    unsubscribe(this.subscription);
    this.subscription = null;
  }

}
