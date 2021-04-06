import React, { Component } from 'react';

class ViewEmployee extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: this.props.match.params.username,
            emp: {}
        }
    }

    cancel()
    {
        this.props.history.push('/');
    }
    render() {
        return (
           
            <div>
            <br></br>
            <div className = "card col-md-6 offset-md-3">
                <h3 className = "text-center"> View Employee Details:</h3>
                <div className = "card-body">
                   
                    <div className = "row">
                    <label> Resources status-Onboraded/In progress: </label>
                        <div> { this.state.emp.resourceStatus}</div>
                    </div>
                    <div className = "row">
                    <label> Bilability(Billable/buffer): </label>
                        <div> { this.state.emp.bilability}</div>
                    </div>
                     
                    <div className = "row">
                    <label> Currency(SGD/INR): </label>
                        <div> { this.state.emp.currency}</div>
                    </div>

                    <div className = "row">
                    <label> LWD-Account/CG:</label>
                        <div> { this.state.emp.lwdAccount}</div>
                    </div>
                    <div className = "row">
                    <label>LWD reason-Justification :</label>
                        <div> { this.state.emp.lwdReason}</div>
                    </div>
                    
                    <div className = "row">
                    <label>PES Status:</label>
                        <div> { this.state.emp.pesStatus}</div>
                    </div>
                   
                    <div className = "row">
                    <label>Bill rate:</label>
                        <div> { this.state.emp.billRate}</div>
                    </div>
                    
                    <div className = "row">
                    <label>Sow strat:</label>
                        <div> { this.state.emp.sowStart}</div>
                    </div>
                    <div className = "row">
                    <label>Sow End:</label>
                        <div> { this.state.emp.sowEnd}</div>
                    </div>
                      
                    <div className = "row">
                    <label>PO Numbers:</label>
                        <div> { this.state.emp.poNumbers}</div>
                    </div>

                    <div className = "row">
                    <label>Comments:</label>
                        <div> { this.state.emp.comments}</div>
                    </div>

                    <div className = "row">
                    <label>Associate Personal:</label>
                        <div> { this.state.emp.associatePersonal}</div>
                    </div>



                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                </div>

            </div>
        </div>
    )
}
}


export default ViewEmployee;