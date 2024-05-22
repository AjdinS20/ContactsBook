import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Store, select } from "@ngrx/store";
import { Observable } from 'rxjs';
import { Contact } from '../../models/contact.model';
import { selectAllContacts } from '../../store/selectors/contact.selectors';
import { AppState } from '../../store';

@Component({
  selector: 'app-contact-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.scss'
})
export class ContactListComponent implements OnInit {
  contacts$: Observable<Contact[]>;

  constructor(private store: Store<AppState>){
    this.contacts$ = this.store.pipe(select(selectAllContacts))
  }

  ngOnInit(): void {} // currently does not need to do anything on init

  //TODO define a selectContact here later on
}
