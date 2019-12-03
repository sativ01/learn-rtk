import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addTodo } from 'features/todos/todosSlice'

const mapDispatch = { addTodo }

const AddTodo = ({ addTodo }) => {

  const [todoText, setTodoText] = useState('')

  const handleChange = e => {
    setTodoText(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (!todoText.trim()) return
    addTodo(todoText)
    setTodoText('')
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={todoText} onChange={handleChange} />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}

export default connect(null, mapDispatch)(AddTodo)
