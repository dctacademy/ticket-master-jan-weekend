export const addTicket = (ticket) => {
    return {
        type: 'ADD_TICKET', 
        payload: ticket 
    }
}

// removeTicket 
export const removeTicket = (id) => {
    return {
        type: 'REMOVE_TICKET',
        payload: id 
    }
}

// editTicket 