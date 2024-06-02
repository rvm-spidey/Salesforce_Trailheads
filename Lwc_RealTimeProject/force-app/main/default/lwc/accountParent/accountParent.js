import { LightningElement } from 'lwc';

export default class AccountParent extends LightningElement {

  searchTextParent = '';

  handleEvent(event) {
    console.log("## handleEvent parent ", event);
    this.searchTextParent = event.detail;
  }
}
