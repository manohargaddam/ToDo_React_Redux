import { createStore, combineReducers } from 'redux';
import todos from './todoReducer';
import filter from './filterReducer';

var appReducer = combineReducers({
  todos,
  filter
});


export default createStore(appReducer, {}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
