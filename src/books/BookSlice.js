// src/features/books/booksSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
};

const BookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    updateBook: (state, action) => {
      const index = state.books.findIndex(book => book.id === action.payload.id);
      if (index !== -1) {
        state.books[index] = action.payload;
      }
    },
    deleteBook: (state, action) => {
      state.books = state.books.filter(book => book.id !== action.payload);
    },
  },
});

export const { addBook, updateBook, deleteBook } = BookSlice.actions;
export default BookSlice.reducer;
