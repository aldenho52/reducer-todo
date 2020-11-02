const initialState = {
    list: [{
        item: 'Learn about reducers',
        completed: false,
        id: 3892987589
      }, {
        item: 'Wash the dishes',
        completed: false,
        id: 34905734098578943
      }, {
        item: 'Go vote',
        completed: false,
        id: 4563454554
      }],
      input: ''
}

const reducer = (state, action) => {
    switch(action.type) {
        case('ADD_TODO'):
            return({...state, list: [...state.list, {
                item: action.payload,
                completed: false,
                id: new Date()
            }]})
        case('NEW_TODO_TEXT'):
            return ({...state, input: action.payload})
        case('TOGGLE_COMPLETE'):
            return ({
                ...state,
                list: state.list.map(todo => {
                    if (todo.id !== action.payload) {
                        return todo
                    }
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                })
                })
        case('CLEAR'):
            return({
                ...state,
                list: state.list.filter(todo => {
                    if (!todo.completed) {
                        return todo
                    }
                })
            })
        default:
            return state
    }
}

export {initialState, reducer}