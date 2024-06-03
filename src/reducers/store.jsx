import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk'; // Import thunk as a named export
import taskReducer from './taskReducer'; // Adjust the path if necessary

const store = createStore(
  taskReducer,
  applyMiddleware(thunk)
);

export default store;
