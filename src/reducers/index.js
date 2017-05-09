import { combineReducers } from 'redux';
import  BooksReducer  from './reducer_books'
import  ActiveBook from './reducer_active_book'
const rootReducer = combineReducers({
	//name of state and reducer
  books:BooksReducer,
  activeBook: ActiveBook
});

export default rootReducer;
