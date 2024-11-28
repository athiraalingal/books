
import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../books/BookSlice'

const BookItem = ({ book }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteBook(book.id));
  };

  return (
    <li>
      <span>{book.title} by {book.author}</span>
      <button onClick={handleDelete}>Delete</button>
      
    </li>
  );
};

export default BookItem;
