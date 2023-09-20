import { configureStore } from '@reduxjs/toolkit';
import countReducer from './features/counter';
import todoReducer from './features/todo';

export const store = configureStore({
  reducer: {
    counter: countReducer,
    todo: todoReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
