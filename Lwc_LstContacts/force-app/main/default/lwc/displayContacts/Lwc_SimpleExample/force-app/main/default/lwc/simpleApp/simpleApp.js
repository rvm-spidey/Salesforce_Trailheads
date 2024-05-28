import { LightningElement } from 'lwc';

export default class SimpleApp extends LightningElement {

  employee = {
    fname: "Peter",
    lname: "Parker",
    age: 35,
    city: 'London'
  }

  get getEmployeeRank() {
    const Rank = this.employee.age > 50 ? 'One' : this.employee.age > 30 ? 'Two' : 'Three';
    return Rank;
  }

  getRandomNumber() {
    return Math.random();
  }

  // Without the get keyword, you would need to call the method with parentheses like a regular function, i.e., employeeObj.getEmployeeRank().


}
