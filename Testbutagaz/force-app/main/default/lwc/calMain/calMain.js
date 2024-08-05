import { LightningElement,  api, track} from 'lwc';

export default class CalMain extends LightningElement {
  @api content;

  handleOkay() {
      this.close('okay');
  }

}
