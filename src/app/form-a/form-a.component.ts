import { Component } from '@angular/core';

@Component({
  selector: 'app-form-a',
  templateUrl: './form-a.component.html',
  styleUrls: ['./form-a.component.css']
})

export class FormAComponent {
  firstName: string = '';
  lastName: string = '';
  selectedOption: string = '';
  contactDetails : string = '';

  onContactOptionUpdate(){
    this.contactDetails = '';
  }
}
