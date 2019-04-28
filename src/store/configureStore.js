import { createStore, combineReducers } from 'redux'
import ticketsReducer from '../reducers/tickets'

const configureStore = () => {
    const store = createStore(combineReducers({
        tickets: ticketsReducer
    }))
    return store  
}

export default configureStore
