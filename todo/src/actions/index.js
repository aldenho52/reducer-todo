export const ADD_TODO = 'ADD_TODO'
export const NEW_TODO_TEXT = 'NEW_TODO_TEXT'

export const addTodo = (todo) => {
    return({type: ADD_TODO, payload: todo })
}

export const newTodoText = (text) => {
    return ({type: NEW_TODO_TEXT, payload: text})
}