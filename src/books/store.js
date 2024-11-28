
import { configureStore } from '@reduxjs/toolkit';
import booksReducer from '../books/BookSlice';

export const store = configureStore({
  reducer: {
    books: booksReducer,
  },
});
