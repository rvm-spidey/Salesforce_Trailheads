import { LightningElement } from 'lwc';

export default class LwcConditionalRendering extends LightningElement {

  flag = false;

  statusChanged(event) {
    this.flag = event.target.checked;
  }

}
