import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const initialState = [];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare({ name, number }) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },
    removeContact(state, action) {
      return state.filter(contact => contact.id !== action.payload);
    },
  },
});

export const { addContact, removeContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
