const ticketsInitialState = [] 
const ticketsReducer = (state = ticketsInitialState, action) => {
    switch(action.type) {
        case 'ADD_TICKET' : 
            return [...state, action.payload]
        default: 
            return [...state]
    }
}

export default ticketsReducer