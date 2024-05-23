import { Component } from '@angular/core';
import { Contact } from '../../models/contact.model';
import { Store } from '@ngrx/store';
import { randomUUID } from 'crypto';
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
  contact: Contact = { id: '', firstName: '', lastName: '', phone: '', email: '', address: '' };
  constructor( private store: Store){}
  onSubmit(){
    this.contact.id = randomUUID();
    this.store.dispatch(addContact({contact: this.contact}));
    this.contact = { id: '', firstName: '', lastName: '', phone: '', email: '', address: '' };
  }
}
