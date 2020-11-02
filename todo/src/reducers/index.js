const initialState = [{
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
    id: 3892987589
  }]

const reducer = (state, action) => {
    switch(action.type) {
        default:
            return state
    }
}

export {initialState, reducer}