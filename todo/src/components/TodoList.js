import React, {useReducer} from 'react'
import {reducer, initialState} from '../reducers/index'
import {addTodo, newTodoText, toggleComplete, clearCompleted} from '../actions'

const TodoList = () => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const onChange = (e) => {
        dispatch(newTodoText(e.target.value))
    }

    const onSubmit = (e) => {
        e.preventDefault()
        dispatch(addTodo(state.input))
        dispatch(newTodoText(''))
    }

    const clearTodos = (e) => {
        e.preventDefault()
        dispatch(clearCompleted())
    }

   return (
    <div>
        <h1>Todo List</h1>
        {
            state.list.map(item => {
                return (<p key={item.id}
                    onClick={() => dispatch(toggleComplete(item.id))}
                    className={`todo${item.completed ? ' completed' : ''}`}
                    >
                    {item.item}
                    </p>)
            })
        }
        <form onSubmit={onSubmit}>
            <input
            type='text'
            name='input'
            value={state.input}
            onChange={onChange}
            />
            <button>Add Todo</button>
            <div>
                <button onClick={clearTodos}>Clear Completed</button>
            </div>
        </form>
    </div>
    )
}


export default TodoList