import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from './operations';
import { updateContact } from './operations';
import { logOut } from '../auth/operations';

const initialStateContacts = {
  items: [],
  loading: false,
  error: null,
};

const handleRejected = (state, { payload }) => {
  state.loading = false;
  state.error = payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialStateContacts,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, state => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.error = null;
        state.items = payload;
      })
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addContact.pending, state => {
        state.loading = true;
        state.error = false;
      })
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.error = null;
        state.items.push(payload);
      })
      .addCase(addContact.rejected, handleRejected)
      .addCase(deleteContact.pending, state => {
        state.loading = true;
        state.error = false;
      })
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.error = null;
        const index = state.items.findIndex(
          contact => contact.id === payload.id
        );
        state.items.splice(index, 1);
      })
      .addCase(deleteContact.rejected, handleRejected)
      .addCase(logOut.fulfilled, state => {
        state.items = [];
        state.error = null;
        state.loading = false;
      })
      .addCase(updateContact.pending, state => {
        state.loading = true;
        state.error = false;
      })
      .addCase(updateContact.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.error = null;
        state.items.find(contact => {
          if (contact.id === payload.id) {
            contact.name = payload.name;
            contact.number = payload.number;
          }
        });
      })
      .addCase(updateContact.rejected, handleRejected);
  },
});

export const contactsReducer = contactsSlice.reducer;
