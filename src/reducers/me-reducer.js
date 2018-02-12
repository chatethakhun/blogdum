const inittialState = {
    me: ''
}

export const me = (state = inittialState, action) => {
    switch (action.type) {
        case 'SET_ME':
            return {
                me: action.data
            }
        case 'GET_ME': 
            return state    
        default:
            return state
    }
}