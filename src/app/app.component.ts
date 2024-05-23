import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddContactFormComponent } from './components/add-contact-form/add-contact-form.component';
import { ContactListComponent } from "./components/contact-list/contact-list.component";
import { ContactDetailComponent } from "./components/contact-detail/contact-detail.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, AddContactFormComponent, ContactListComponent, ContactDetailComponent]
})
export class AppComponent {
  title = 'ContactsBookTask';
}
