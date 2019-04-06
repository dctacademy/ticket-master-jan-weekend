import React from 'react' 

const TicketBtnGrp = (props) => {
    return(
        <div>
            <button onClick={() => {
                props.handleClick('all')
            }}> All </button>
            <button onClick={() => {
                props.handleClick('high')
            }}> High </button>
            <button onClick={() => {
                props.handleClick('medium')
            }}> Medium </button>
            <button onClick={() => {
                props.handleClick('low')
            }}> Low </button>
        </div> 
    )
}

export default TicketBtnGrp