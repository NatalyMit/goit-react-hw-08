export const selectContacts = state => state.contacts.items;
export const selectLoading = state => state.contacts.loading;
export const selectError = state => state.contacts.error;
export const selectAllContacts = state => state.contacts;
export const selectIsAddingContact = state => state.contacts.isAddingContact;
export const selectIsDeletingContact = state => state.contacts.isDeleteContact;
export const selectIsEditingContact = state => state.contacts.isEditContact;
