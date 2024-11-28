
import React from 'react';
import { useSelector } from 'react-redux';
import BookItem from './BookItem';

const BookList = () => {
  const books = useSelector(state => state.books.books);

  return (
    <div>
      <h2 className='book-list-title'>Book List</h2>
      <ul>
        {books.map(book => (
          <BookItem key={book.id} book={book} />
        ))}
      </ul>
    </div>
  );
};

export default BookList;
