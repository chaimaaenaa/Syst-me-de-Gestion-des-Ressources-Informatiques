import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contact = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  onSubmit(): void {
    console.log('Form Submitted', this.contact);
    // Here you can add logic to send the contact data to a backend or display a success message.
  }
}
