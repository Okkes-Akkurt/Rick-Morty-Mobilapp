import { createSlice } from '@reduxjs/toolkit';

export const favoriteSlice = createSlice({
	name: 'favorite',
	initialState: {
		characters: [], 
	},
	reducers: {
		addFavorite: (state, action) => {
			if (!state.characters.some((character) => character.id === action.payload.id)) {
				state.characters.push(action.payload);
			}
		},
		removeFavorite: (state, action) => {
			state.characters = state.characters.filter((character) => character.id !== action.payload.id);
		},
	},
});

export const { addFavorite, removeFavorite } = favoriteSlice.actions;

export default favoriteSlice.reducer;
