import { createSlice } from '@reduxjs/toolkit'

let nextTodoId = 0 // initialize id generator

const todosSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: { // can be an object of a function like toggleTodo
      reducer(state, action) {
        const { id, text } = action.payload
        state.push({ id, text, completed: false })
      },
      prepare(text) { // api function has to have <payload>
        return { payload: { text, id: nextTodoId++ } }
      }
    },
    toggleTodo(state, action) {
      const todo = state.find(todo => todo.id === action.payload)
      if (todo) todo.completed = !todo.completed
    }
  }
})

export const { addTodo, toggleTodo } = todosSlice.actions
export default todosSlice.reducer