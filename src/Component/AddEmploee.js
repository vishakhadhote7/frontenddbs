import React, { Component } from 'react';

class AddEmploee extends Component {
    constructor(props){
        super(props)
        this.state ={
            sNo :this.props.match.params.sNo,
            resourceStatus: '',
            billability:'',
            lwdAccount:'',
            lwdReason:'',
            pesState:'',
            billRate:'',
            sowStrart:'',
            sowEnd:'',
            poNumbers:'',
            comments:'',
            
        }
        this.changeslNoHandler=this.changeslNoHandler.bind(this);
        this.changeResourceStatusHandler=this.changeResourceStatusHandler.bind(this);
        this.changeBillabilityHandler = this.changeBillabilityHandler.bind(this);
        this.changeCurrencyHandler=this.changeCurrencyHandler.bind(this);
        this.changeLwdAccountHandler = this.changeLwdAccountHandler.bind(this);
        this.changeLwdReasonHandler=this.changeLwdReasonHandler.bind(this);
        this.changePesStateHandler=this.changePesStateHandler.bind(this);
        this.changeBillRateHandler=this.changeBillRateHandler.bind(this);
        this.changeSowStartHandler=this.changeSowStartHandler.bind(this);
        this.changeSowEndHandler=this.changeSowEndHandler.bind(this);
        this.changepoNumbersHandler=this.changepoNumbersHandler.bind(this);
        this.changeCommentsHandler=this.changeCommentsHandler.bind(this);
    }
    saveEmpl = (p) => {
        p.preventDefault();
        
        let emp={sNo:this.state.sNo,resourceStatus:this.state.resourceStatus,billability:this.state.billability,currency:this.state.currency,lwdAccount:this.state.lwdAccount,lwdReason:this.state.lwdReason,
        pesState:this.state.pesState,billRate:this.state.billRate,sowStrat:this.state.sowStrart,sowEnd:this.state.sowStrart,poNumbers:this.state.poNumbers,comments:this.state.comments}; 
        console.log('emp => ' + JSON.stringify(emp));
    }
    changeslNoHandler= (event) =>{
        this.setState({sNo: event.target.value});
    }
  
    changeResourceStatusHandler= (event) =>{
        this.setState({resourceStatus: event.target.value});
    }

    changeBillabilityHandler= (event) =>{
        this.setState({billability: event.target.value});
    }
    changeCurrencyHandler= (event) =>{
        this.setState({currency: event.target.value});
    }
    changeLwdAccountHandler= (event) =>{
        this.setState({lwdAccount: event.target.value});
    }
    changeLwdReasonHandler= (event) =>{
        this.setState({lwdReason: event.target.value});
    }
  
    changePesStateHandler= (event) =>{
        this.setState({pesState: event.target.value});
    }

    changeBillRateHandler= (event) =>{
        this.setState({billRate: event.target.value});
    }
    changeSowStartHandler= (event) =>{
        this.setState({sowStrart: event.target.value});
    }

    changeSowEndHandler= (event) =>{
        this.setState({sowEnd: event.target.value});
    }
    changepoNumbersHandler= (event) =>{
        this.setState({poNumbers: event.target.value});
    }
    changeCommentsHandler= (event) =>{
        this.setState({comments: event.target.value});
    }
    cancel(){
        this.props.history.push('/');
    }
    render() {
        return (
            <div>
            <br></br>
          <div className="container">
                <div className="row">
                    <div className="card col-md-10 offset-md-2 offset-md-2">
                            <h2 className="text-center">Associate Proffesional</h2>
                        <div className="card-body">
                            <form>
                            <div className="form-group">
                                    <label>Sno: </label>
                                    <input type="number" name="sNo" className="form-control"
                                    value={this.state.sNo}></input>
                        </div>
                            <div className="form-group">
                                    <label for="resourceStatus">Resource State: </label>
                                    <select id="resourceStatus" name="resourceStatus">
                                        <option value="">-Select option-</option>
                                        <option value="Onboarded">Onboarded</option>
                                        <option value="In-Progress">In-Progress</option>
                                        <option value="Yet to join">Yet to join</option>
                                    </select>
                                   
                                </div>
                                <div className="form-group">
                                    <label for="billability">Billability(Billable/Buffer): </label>
                                    <select id="billability" name="billability">
                                        <option value="">-Select option-</option>
                                        <option value="Billable">Billable</option>
                                        <option value="Non-Billable">Non-Billable</option>
                                        <option value="Buffer">Buffer</option>
                                    </select>
                                    
                                </div>
                                <div className="form-group">
                                    <label>Curreny(SGD/INR): </label>
                                    <input type="number" name="currency" className="form-control"
                                    value={this.state.currency} onChange={this.changeCurrencyHandler} />
                                   
                                </div>
                                <div className="form-group">
                                    <label>Lwd Account/CG: </label>
                                    <input type="date"  name="lwdAccount" className="form-control"
                                    value={this.state.lwdAccount} onChange={this.changeLwdAccountHandler} />
                                </div>
                                <div className="form-group">
                                    <label for="lwdReason">Reason Roll-Off/Resignation: </label>
                                    <select id="lwdReason" name="lwdReason">
                                        <option value="">-Select option-</option>
                                        <option value="Roll-Off">Roll-Off</option>
                                        <option value="Resignation">Resignation</option>
                                        <option value="Abscond">Abscond</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>PES status: </label>
                                    <input type="text" name="pesState" className="form-control"
                                    value={this.state.pesState} onChange={this.changePesStateHandler} />
                                   
                                </div>
                                <div className="form-group">
                                    <label>Bill Rate: </label>
                                    <input type="number" name="billRate" className="form-control"
                                    value={this.state.billRate} onChange={this.changeBillRateHandler} />
                                  
                                </div>
                                <div className="form-group">
                                    <label>SOW Start: </label>
                                    <input type="date" name="sowStart" className="form-control"
                                    value={this.state.sowStart} onChange={this.changeSowStartHandler} />
                                   
                                </div>
                                <div className="form-group">
                                    <label>SOW End: </label>
                                    <input type="date" name="sowEnd" className="form-control"
                                    value={this.state.sowEnd} onChange={this.changeSowEndHandler} />
                                    
                                </div>
                                <div className="form-group">
                                    <label>PO Numbers: </label>
                                    <input type="text" name="poNumbers" className="form-control"
                                    value={this.state.poNumbers} onChange={this.changepoNumbersHandler} />
                                  
                                </div>
                                <div className="form-group">
                                    <label>Comments- For PMO team: </label>
                                    <input type="text" name="comments" className="form-control"
                                    value={this.state.comments} onChange={this.changeCommentsHandler} />
                                   
                                </div>

                                <button className="btn btn-success" onClick={this.saveEmpl}>Save</button>
                                <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
}

export default AddEmploee;