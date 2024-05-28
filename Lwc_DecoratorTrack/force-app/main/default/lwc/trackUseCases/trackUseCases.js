import { LightningElement, track } from 'lwc';

export default class TrackUseCases extends LightningElement {

    @track fullName = {salutation:'Mr.', firstName: 'Proximus', lastName: 'Caesar'}

    salutationsList = [
      { label: 'Mr.', value: 'Mr.' },
      { label: 'Ms.', value: 'Ms.' },
      { label: 'Mrs.', value: 'Mrs.' },
      { label: 'Dr.', value: 'Dr.' },
      { label: 'Prof.', value: 'Prof.' },
    ];

  get salutationOptions() {
      return this.salutationsList;
  }

  handleChange(event) {
    this.fullName.firstName = event.detail.firstName;
    this.fullName.lastName = event.detail.lastName;
    this.fullName.salutation = event.detail.salutation;
  }
}
