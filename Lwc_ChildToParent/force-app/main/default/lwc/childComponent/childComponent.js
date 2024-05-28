import { LightningElement } from 'lwc';

export default class ChildComponent extends LightningElement {

  firstName = "";
  lastName = "";

  handleChangeFirstName(event) {
    this.firstName = event.target.value;
  }

  handleChangeLastName(event) {
    this.lastName = event.target.value;
  }


  // handleClick(event) {
  //   const searchEvent = new CustomEvent('getsearchevent',
  //   {
  //     detail: this.name
  //   });
  //   this.dispatchEvent(searchEvent);
  // }

  handleClick(event) {
    const searchEvent = new CustomEvent('getsearchevent',
    {
      detail:  {
        FirstName: this.firstName,
        LastName: this.lastName
      }
    });
    this.dispatchEvent(searchEvent);
  }
}
