import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { addContact } from '../actions/contact.actions';
import { map } from 'rxjs/operators';

@Injectable()
export class ContactEffects {
  constructor(private actions$: Actions) {}

  logNewContact$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addContact),
      map(action => {
        console.log('New contact added:', action.contact);
      })
    ),
    { dispatch: false }
  );
}
