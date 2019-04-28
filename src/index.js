import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore'
// npm install --save bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import { Provider } from 'react-redux'

// import actions
import { addTicket } from './actions/tickets'

const store = configureStore()

store.subscribe(() => {
    console.log(store.getState())
})


const app = (
    <Provider store={store}>
        <App /> 
    </Provider>
)

store.dispatch(addTicket({ id: "1", name: 'ravi', message: 'net is down', department: 'technical', priority: 'high'}))

ReactDOM.render(app , document.getElementById('root'));
