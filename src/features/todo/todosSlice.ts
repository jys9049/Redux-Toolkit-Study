import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface todoState {
  value: todo[];
}

export interface todo {
  id: number;
  title: string;
  checked: boolean;
}

export const initialState: todoState = {
  value: [],
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      const todo = {
        id: state.value.length,
        title: action.payload,
        checked: false,
      };
      state.value.push(todo);
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      state.value.splice(action.payload, 1);
    },
    checkTodo: (state, action: PayloadAction<number>) => {
      state.value = state.value.map((item) => {
        if (item.id === action.payload) {
          console.info(item.id, action.payload);
          return {
            ...item,
            checked: true,
          };
        }
        return item;
      });
    },
  },
});

export const { addTodo, deleteTodo, checkTodo } = todoSlice.actions;

export default todoSlice.reducer;
