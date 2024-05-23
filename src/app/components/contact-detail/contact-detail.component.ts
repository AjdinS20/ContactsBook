import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from '../../models/contact.model';
import { AppState } from '../../store';
import { selectCurrentContact } from '../../store/selectors/contact.selectors';
import { Store, select } from '@ngrx/store';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact-detail.component.html',
  styleUrl: './contact-detail.component.scss'
})
export class ContactDetailComponent implements OnInit {
  contact$: Observable<Contact | null>

  constructor(private store: Store<AppState>){
    this.contact$ = this.store.pipe(select(selectCurrentContact))
  }

  ngOnInit(): void {}
}
