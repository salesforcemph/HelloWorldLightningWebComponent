import { LightningElement, api} from 'lwc';

export default class Button extends LightningElement {
    @api label;
    @api icon;
    @api btnlabel;
    handleButton(event) {
      this.dispatchEvent(new CustomEvent('buttonclick',{bubbles: true}));
    }
}