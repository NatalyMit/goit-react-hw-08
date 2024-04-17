import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from './operations';
import { updateContact } from './operations';

const initialStateContacts = {
  items: [],
  loading: false,
  error: null,
};

const handleRejected = (state, { payload }) => {
  state.loading = false;
  state.error = payload;
  state.isDeleteContact = null;
  state.isEditContact = null;
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
        state.isAddingContact = true;
      })
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.error = null;
        state.items.push(payload);
        state.isAddingContact = false;
      })
      .addCase(addContact.rejected, handleRejected)
      .addCase(deleteContact.pending, (state, action) => {
        state.loading = true;
        state.error = false;
        state.isDeleteContact = action.meta.arg;
      })
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.error = null;
        const index = state.items.findIndex(
          contact => contact.id === payload.id
        );
        state.items.splice(index, 1);
        state.isDeleteContact = false;
      })
      .addCase(deleteContact.rejected, handleRejected)
      .addCase(updateContact.pending, (state, action) => {
        state.loading = true;
        state.error = false;
        state.isEditContact = action.meta.arg.id;
      })
      .addCase(updateContact.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        const index = state.items.findIndex(
          contact => contact.id === action.payload.id
        );
        if (index !== -1) {
          state.items[index] = action.payload;
        }
        state.error = null;
        state.updatingItem = null;
        state.isEditContact = false;
      })
      .addCase(updateContact.rejected, handleRejected);
  },
});

export const contactsReducer = contactsSlice.reducer;
