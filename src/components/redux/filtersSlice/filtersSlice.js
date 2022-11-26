import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
	name: "filters",
	initialState: '',
	reducers: {
		setStatusFilter(state, action) {
			return state = action.payload;
		},
	},
});
// Экспортируем генераторы экшенов и редюсер
export const { setStatusFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;