import { ActionReducerMap } from '@ngrx/store';
import { ContactState, contactReducer } from './reducers/contact.reducer';

export interface AppState {
  contacts: ContactState;
}

export const reducers: ActionReducerMap<AppState> = {
  contacts: contactReducer,
};
