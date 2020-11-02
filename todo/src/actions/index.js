export const ADD_TODO = 'ADD_TODO'
export const NEW_TODO_TEXT = 'NEW_TODO_TEXT'
export const TOGGLE_COMPLETE = 'TOGGLE_COMPLETE'
export const CLEAR = 'CLEAR'

export const addTodo = (todo) => {
    return({type: ADD_TODO, payload: todo })
}

export const newTodoText = (text) => {
    return ({type: NEW_TODO_TEXT, payload: text})
}

export const toggleComplete = (todoID) => {
    return ({type: TOGGLE_COMPLETE, payload: todoID})
}

export const clearCompleted = () => {
    return ({type: CLEAR})
}