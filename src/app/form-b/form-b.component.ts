import { Component } from '@angular/core';

@Component({
  selector: 'app-form-b',
  templateUrl: './form-b.component.html',
  styleUrls: ['./form-b.component.css']
})
export class FormBComponent {
  firstName : string = '';
  lastName : string = '';
  selectedOption : string = '';
  contactDetails : string = '';

  onContactOptionUpdate(){
    // this.contactDetails = '';

    // if(this.selectedOption !== 'phone' && this.selectedOption === 'email'){
    //   this.selectedOption = '';
    // }
    if (this.selectedOption === 'phone') {
      this.contactDetails = '';
    } else if (this.selectedOption === 'email') {
      this.contactDetails = '';
    } else {
      this.contactDetails = '';
      this.selectedOption = '';
    }
  }
}
