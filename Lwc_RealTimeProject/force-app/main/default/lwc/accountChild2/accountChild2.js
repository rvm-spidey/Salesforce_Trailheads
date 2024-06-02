import { LightningElement, api, wire } from 'lwc';
import getAccounts from '@salesforce/apex/AccountClass.getAccounts';
import { MessageContext, subscribe, unsubscribe } from 'lightning/messageService';
import ComrevoChannel from '@salesforce/messageChannel/ComrevoChannel__c'

export default class AccountChild2 extends LightningElement {

  @api searchTextChild2;

  columns = [
    {label:'Id', fieldName: 'Id'},
    {label:'Name', fieldName: 'Name'},
    {label:'Actions', fieldName: 'Actions', type: 'button', typeAttributes:
    {
      label: 'View Contacts',
      value: 'view_contacts'
    }
  }
  ]

  rows = [
    {Id: '23', Name: 'Parag', Actions: ''},
    {Id: '30', Name: 'Mayur', Actions: ''},
    {Id: '40', Name: 'Handge', Actions: ''},
  ]

  currentId;
  currentName;

  @wire (MessageContext) messageContext;

  handleRowAction(event) {

    if (event.detail.action.value == 'view_contacts') {
      console.log("## event", event);
      this.currentId = event.detail.row.Id;
      this.currentName = event.detail.row.Name;

      let payload = {
        accountId: this.currentId,
        accountName:this.currentName
      }
      publish(this.messageContext, Comrevo, payload)

    }
  }

  @wire (getAccounts, {searchTextClass: '$searchTextChild2'}) accountRecords

  // @wire (getAccounts) accountRecords({error, data}) {
  //   if (data) {
  //     console.log("### data ", data);
  //   }
  //   else if (error) {
  //     console.log("### error ", error);
  //   }
  // };


}
