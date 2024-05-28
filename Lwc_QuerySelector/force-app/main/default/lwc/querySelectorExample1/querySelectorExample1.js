import { LightningElement } from 'lwc';

export default class QuerySelectorExample1 extends LightningElement {

  name = "Spider-Man";

  handleClick(event){
    this.name = this.template.querySelector('lightning-input.inputclass').value.toUpperCase();
  }
}
