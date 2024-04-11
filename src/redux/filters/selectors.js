import { selectContacts } from '../selectors';
import { selectNameFilter } from './filtersSlice';
import { createSelector } from '@reduxjs/toolkit';

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filters) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filters.toLowerCase())
    );
  }
);
