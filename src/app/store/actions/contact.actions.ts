import { createAction, props } from '@ngrx/store';
import { Contact } from '../../models/contact.model';

export const addContact = createAction(
  '[Contact] Add Contact',
  props<{ contact: Contact }>()
);

export const selectContact = createAction(
  '[Contact] Select Contact',
  props<{ contact: Contact }>()
);
