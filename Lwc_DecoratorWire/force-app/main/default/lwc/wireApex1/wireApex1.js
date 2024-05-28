import getAccountList from '@salesforce/apex/AccountHelper.getAccountList';
import { LightningElement, wire, api } from 'lwc';

export default class WireApex1 extends LightningElement {

  @api recordId;
  @wire (getAccountList, { accId: '$recordId' }) accounts;

  @wire(getAccountList, { accId: '$recordId' })
  wiredAccounts({ error, data }) {
    if (data) {
      console.log('Data accc :', data);
    } else if (error) {
      console.error('Error:', error);
    }
  }

  connectedCallback() {
    console.log('Record ID isss :', this.recordId);
  }
}
