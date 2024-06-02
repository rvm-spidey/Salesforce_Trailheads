import { LightningElement, wire } from 'lwc';
import { MessageContext, subscribe, unsubscribe } from 'lightning/messageService';
import ComrevoChannel from '@salesforce/messageChannel/ComrevoChannel__c'

export default class ShowAccountContacts extends LightningElement {

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
      subscribe(this.messageContext, Comrevo,
      (parameter) => {
        console.log(" parameter ", parameter);
      }
      )
    }
  }

}
