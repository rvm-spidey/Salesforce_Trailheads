import { LightningElement, track} from 'lwc';

export default class TrackCounterExample extends LightningElement {

  counter = 0;

  increment() {
    this.counter++;
  }

  decrement() {
    this.counter--;
  }

  firstName = '';
  lastName = '';

  handleChange(event) {
    const field = event.target.name;
    if (field === 'firstName') {
        this.firstName = event.target.value;
    } else if (field === 'lastName') {
        this.lastName = event.target.value;
    }
  }

    get uppercasedFullName() {
        return `${this.firstName} ${this.lastName}`.trim().toUpperCase();
    }

}
