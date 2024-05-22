import { createSelector, createFeatureSelector } from '@ngrx/store';
import { ContactState } from '../reducers/contact.reducer';

export const selectContactState = createFeatureSelector<ContactState>('contacts');

export const selectAllContacts = createSelector(
  selectContactState,
  (state: ContactState) => state.contacts
);

export const selectCurrentContact = createSelector(
  selectContactState,
  (state: ContactState) => state.selectedContact
);
