import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "../operations";

const handlePending = state => {
	state.isLoading = true;
};

const handleRejected = (state, action) => {
	state.isLoading = false;
	state.error = action.payload;
};


const contactSlice = createSlice({
	name: "contacts",
	initialState: {
		arrContacts: [],
		isLoading: false,
		error: null,
	},
	// Добавляем обработку внешних экшенов
	extraReducers: {
		[fetchContacts.pending]: handlePending,
		[fetchContacts.fulfilled](state, action) {
			state.isLoading = false;
			state.error = null;
			state.arrContacts = action.payload;
		},
		[fetchContacts.rejected]: handleRejected,
		[addContact.pending]: handlePending,
		[addContact.fulfilled](state, action) {
			state.isLoading = false;
			state.error = null;
			state.arrContacts.push(action.payload);
		},
		[addContact.rejected]: handleRejected,
		[deleteContact.pending]: handlePending,
		[deleteContact.fulfilled](state, action) {
			state.isLoading = false;
			state.error = null;
			const index = state.arrContacts.findIndex(
				contact => contact.id === action.payload.id
			);
			state.arrContacts.splice(index, 1);
		},
		[deleteContact.rejected]: handleRejected,
	},
});
export const contactReducer = contactSlice.reducer;


// import { createSlice } from '@reduxjs/toolkit';

// const contactsInitialState = {
// 	arrContacts: []
// };

// const contactSlice = createSlice({
// 	name: 'contacts',
// 	initialState: contactsInitialState,
// 	reducers: {
// 		addContact(state, action) {
// 			state.arrContacts.push(action.payload);
// 		},
// 		deleteContact(state, action) {
// 			const index = state.arrContacts.findIndex(el => el.id === action.payload);
// 			state.arrContacts.splice(index, 1);
// 		},
// 		toggleCompleted(state, action) {
// 			for (const task of state) {
// 				if (task.id === action.payload) {
// 					task.completed = !task.completed;
// 					break;
// 				}
// 			}
// 		},


// 	},
// })

// export const { addContact, deleteContact, toggleCompleted } = contactSlice.actions

// export const contactReducer = contactSlice.reducer;