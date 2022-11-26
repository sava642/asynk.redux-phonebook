import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";


axios.defaults.baseURL = "https://6380e9ba8efcfcedac12e3a6.mockapi.io/app";


export const fetchContacts = createAsyncThunk("contacts/fetchAll", async (_, thunkAPI) => {
	try {
		const response = await axios.get("/contacts");
		return response.data;
	} catch (e) {
		return thunkAPI.rejectWithValue(e.message);
	}
});

export const addContact = createAsyncThunk(
	"contacts/addContact",
	async (contact, thunkAPI) => {
		try {
			console.log(contact)
			const response = await axios.post("/contacts", contact);
			return response.data;
		} catch (e) {
			return thunkAPI.rejectWithValue(e.message);
		}
	}
);

export const deleteContact = createAsyncThunk(
	"contacts/deleteContact",
	async (id, thunkAPI) => {
		try {
			const response = await axios.delete(`/contacts/${id}`);
			return response.data;
		} catch (e) {
			return thunkAPI.rejectWithValue(e.message);
		}
	}
);