import { combineReducers } from 'redux'
import todosReducer from 'features/todos/todosSlice'
import visibilityFilterReducer from 'features/filters/visibilitySlice'

export default combineReducers({
  todos: todosReducer,
  visibilityFilter: visibilityFilterReducer
})
