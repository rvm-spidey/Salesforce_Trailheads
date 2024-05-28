import { LightningElement, wire, track, api } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi'; // Import the missing adapter
import ACCOUNT_OBJECT from "@salesforce/schema/Account";
import ACCOUNT_NAME_FIELD from "@salesforce/schema/Account.Name";
import ACCOUNT_OWNER_NAME_FIELD from "@salesforce/schema/Account.Owner.Name";
import NAME_FIELD from '@salesforce/schema/Account.Name'
import WEBSITE_FIELD from '@salesforce/schema/Account.Website'
import PHONE_FIELD from '@salesforce/schema/Account.Phone'
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry'


export default class WireExample2 extends LightningElement {

  @api recordId; //current Account's Id
  accData;

  @wire(getRecord, {
    recordId: '$recordId',
    fields: [NAME_FIELD, WEBSITE_FIELD, PHONE_FIELD, INDUSTRY_FIELD]
  })
  accountObjectData({ data, error }) {
    if (data) {
      console.log(" dataaa ", data);
      this.accData = data.fields
      console.log(error);
    }
  }

}
