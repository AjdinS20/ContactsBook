import { Component } from '@angular/core';
import { Contact } from '../../models/contact.model';
import { Store } from '@ngrx/store';
import { addContact } from '../../store/actions/contact.actions';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-add-contact-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-contact-form.component.html',
  styleUrl: './add-contact-form.component.scss'
})
export class AddContactFormComponent {
  contact: Contact = { firstName: '', lastName: '', phone: '', email: '', address: '' };
  constructor( private store: Store){}
  onSubmit(event: Event){
    event.preventDefault();
    console.log("works");
    this.store.dispatch(addContact({contact: this.contact}));
    this.contact = { firstName: '', lastName: '', phone: '', email: '', address: '' };
  }
}
