import { configureStore } from '@reduxjs/toolkit';
import { contactReducer } from "./contactSlice/contactSlice";
import { filtersReducer } from "./filtersSlice/filtersSlice";
import { frontBackReducer } from "./frontBackSlice/frontBackSlice";




export const store = configureStore({
	reducer: {
		contacts: contactReducer,
		filters: filtersReducer,
		frontBack: frontBackReducer,
	},
});