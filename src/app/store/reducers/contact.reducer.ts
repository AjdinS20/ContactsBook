import { createReducer, on } from '@ngrx/store';
import { addContact, selectContact } from '../actions/contact.actions';
import { Contact } from '../../models/contact.model';

export interface ContactState {
  contacts: Contact[];
  selectedContact: Contact | null;
}

export const initialState: ContactState = {
  contacts: [],
  selectedContact: null,
};

export const contactReducer = createReducer(
  initialState,
  on(addContact, (state, { contact }) => ({
    ...state,
    contacts: [...state.contacts, contact],
  })),
  on(selectContact, (state, { contact }) => ({
    ...state,
    selectedContact: contact,
  }))
);
