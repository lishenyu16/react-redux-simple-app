import { configureStore } from '@reduxjs/toolkit';

import postsReducer from './reducers/postsReducer';
import counterSlice from './reducers/counterSlice';

// Automatically adds the thunk middleware and the Redux DevTools extension
const store = configureStore({
  // Automatically calls `combineReducers`
  reducer: {
    posts: postsReducer,
    counter: counterSlice.reducer
  }
});

// // Can still subscribe to the store
store.subscribe(() => console.log(store.getState()))


export default store;