import { LightningElement } from 'lwc';

export default class QuerySelectorAll extends LightningElement {

  fname = "Andrew";
  lname = "Garfield";

  handleClick(event){
    var input = this.template.querySelectorAll('lightning-input');
    input.forEach((e) => {
      if (e.name == "firstname") {
        this.fname = e.value
      }
      else if (e.name == "lastname") {
        this.lname = e.value
      }
    }, this)
  }

}
