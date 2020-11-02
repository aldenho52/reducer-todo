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
                ...state, list: {
                    ...state.list,
                    completed: !state.list.completed
                }
            })
        default:
            return state
    }
}

export {initialState, reducer}