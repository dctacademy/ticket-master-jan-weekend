import React from 'react' 
import uuid from 'uuid'

class TicketForm extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            name: '',
            department: '',
            priority: '', 
            message: ''
        }
    }

    handleChange = (e) => {
        e.persist()
        this.setState(() => ({
            [e.target.name]: e.target.value
        }))
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            id: uuid(), 
            name: this.state.name,
            department: this.state.department,
            priority: this.state.priority,
            message: this.state.message
        }
        this.props.handleSubmit(formData)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>
                            Name <br />
                            <input type="text" value={this.state.name} name="name" onChange={this.handleChange} className="form-control" />
                        </label>
                    </div>

                    <div className="form-group">
                        <label>
                            Department<br />
                            <select value={this.state.department} onChange={this.handleChange} name="department" className="form-control">
                                <option value=""> Select </option>
                                <option value="technical"> Technical </option>
                                <option value="sales"> Sales </option>
                                <option value="hr"> Human Resource </option>
                            </select>
                        </label>
                    </div>


                    <label>
                        Priority<br />
                        <select value={this.state.priority} onChange={this.handleChange} name="priority" className="form-control">
                            <option value=""> Select </option>
                            <option value="high"> High </option>
                            <option value="medium"> Medium </option>
                            <option value="low"> Low </option>
                        </select>
                    </label> <br />

                    <div>
                        <label>
                            Message<br />
                            <textarea value={this.state.message} onChange={this.handleChange} name="message" className="form-control">

                            </textarea>
                        </label>
                    </div>

                    <input type="submit" value="Add Ticket" className="btn btn-primary" />

                </form>
            </div>
        )
    }
}

export default TicketForm