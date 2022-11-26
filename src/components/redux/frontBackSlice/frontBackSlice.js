import { createSlice } from "@reduxjs/toolkit";

const frontBackSlice = createSlice({
	name: "handle",
	initialState: false,
	reducers: {
		handleFrontBack(state, action) {
			return state = action.payload;
		},
	},
});
// Экспортируем генераторы экшенов и редюсер
export const { handleFrontBack } = frontBackSlice.actions;
export const frontBackReducer = frontBackSlice.reducer;