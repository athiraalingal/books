

import { Provider } from 'react-redux'
import './App.css'
import BookForm from './Components/BookForm'
import BookList from './Components/BookList'
import { store } from './books/store'

function App() {
  

  return (
    <>
    <div className='photo'>
      <Provider store={store}>
        <h2 className='books'>Book-Management-System</h2>
        <BookForm />
        <BookList />
        </Provider>
        </div>
     
    </>
  )
}

export default App
