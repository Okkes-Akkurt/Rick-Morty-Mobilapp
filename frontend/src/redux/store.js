import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './searchSlice';
import favoriteReducer from './favoriteSlice';

const store = configureStore({
	reducer: {
		search: searchReducer,
		favorite: favoriteReducer,
	},
});

export default store;
