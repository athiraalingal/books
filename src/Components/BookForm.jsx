
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../books/BookSlice'
import { nanoid } from '@reduxjs/toolkit';

const BookForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addBook({ id: nanoid(), title, author }));
    setTitle('');
    setAuthor('');
  };

  return (
    
    <div className='container'>
      
        
    <form onSubmit={handleSubmit}>
      <img className='image' src="https://thumbs.dreamstime.com/b/old-book-flying-letters-magic-light-background-bookshelf-library-ancient-books-as-symbol-knowledge-history-218640948.jpg" alt="" />
      <input
      
       
        type="text"
        placeholder="Book Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Auther"
        value={author}
        onChange={e => setAuthor(e.target.value)}
        required
      />
      <button type="submit">Add Book</button>
      
    </form>
    </div>
  );
};

export default BookForm;
