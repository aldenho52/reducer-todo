import React, {useReducer} from 'react'
import {reducer, initialState} from '../reducers/index'

const TodoList = () => {
    const [state, dispatch] = useReducer(reducer, initialState)

   return (
    <div>
        <h1>Todo List</h1>
        {
            state.map(item => {
                return (<p key={item.id}>{item.item}</p>)
            })
        }
    </div>
    )
}


export default TodoList