import { LightningElement } from 'lwc';

export default class ParentComponent extends LightningElement {
  firstName =  '';
  lastName =  '';

  handleEvent(event) {
    this.firstName = event.detail.FirstName;
    this.lastName = event.detail.LastName;
  }
}
