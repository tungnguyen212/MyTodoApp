import {createSlice} from '@reduxjs/toolkit';
const initialState = {
  todos: [
    {
      id: 1,
      text: 'Take out the trash',
      isCompleted: true,
    },
    {
      id: 2,
      text: 'Buy Roll Royce',
      isCompleted: false,
    },
    {
      id: 3,
      text: 'By Iphone 14 Pro Max',
      isCompleted: true,
    },
    {
      id: 4,
      text: 'Buy Lambogini',
      isCompleted: false,
    },
  ],
};
export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    setTodosReducer: (state, action) => {
      state.todos = action.payload;
      console.log(state.todos);
    },
    addTodoReducer: (state, action) => {
      state.todos.push(action.payload);
    },
    updateTodoReducer: (state, action) => {
      state.todos = state.todos.map(todo => {
        if (todo.id === action.payload.id) {
          todo.isCompleted = !todo.isCompleted;
        }
        return todo;
      });
    },
    deleteTodoReducer: (state, action) => {
      const id = action.payload;
      state.todos = state.todos.filter(todo => todo.id !== id);
    },
  },
});
export const {
  setTodosReducer,
  addTodoReducer,
  updateTodoReducer,
  deleteTodoReducer,
} = todosSlice.actions;
export default todosSlice.reducer;
