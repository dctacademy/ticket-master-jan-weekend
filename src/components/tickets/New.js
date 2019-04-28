import React from 'react' 
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import _ from 'lodash'

import TicketForm from './Form'

import { addTicket } from '../../actions/tickets'

const TicketNew = (props) => {

    const handleSubmit = (formData) => {
        console.log('new', formData) 
        props.dispatch(addTicket(formData))
        props.history.push('/tickets')
    }

    return (
        <div className="row">
            <div className="col-md-8">
                <h2> Add Ticket </h2>
                <TicketForm handleSubmit={handleSubmit} />
            </div>

            <div className="col-md-4">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Last Ticket</h5>
                        {   props.previousTicket ? (
                                <React.Fragment> 
                                    <p className="card-text"> {props.previousTicket.name} </p>
                                    <Link to={`/tickets/${props.previousTicket.id}`}>Show</Link> 
                                </React.Fragment>) : ( 
                                    <p> This is the first ticket </p> 
                                ) 
                        }
                    </div>
                </div>
            </div>
            
        </div> 
    )
}

const mapStateToProps = (state) => {
    return {
        previousTicket: _.last(state.tickets)
    }
}   

export default connect(mapStateToProps)(TicketNew)