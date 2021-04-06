import React, { Component } from 'react';

class Employeee extends Component {
    constructor(props) {
        super(props);
        this.state = {
          employees: [],
        };
        this.addemp = this.addemp.bind(this);
        this.updateemp=this.updateemp.bind(this);
        this.changeback=this.changeback.bind(this);
      }
      addemp() {
        this.props.history.push("/add-emp");
      }
      updateemp() {
        this.props.history.push(`/update-emp`);
      }
      viewemp() {
        this.props.history.push(`/viewem`);
      }
      changeback(){
        this.props.history.push(`/home`);
      }
    render() {
        return (
            <div>
                 <h2 className="text-center">Operation Team</h2>
                 <div className="row">
                 {/* <button class="button">Add</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
                 <button id="margin" onClick={() => this.addemp()} class="button">Add</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
               <button id="margin" onClick={() => this.changeback()} class="button">Back</button>
        </div>
        <br></br>
        <div className="row">
          <table className="table table-bordered">
            <thead>
              <tr class="table-primary">
                <th>SlNo</th>
                <th>Resources status</th>
                <th>Bilability</th>
                <th>Currency(SGD/INR)</th>
                <th>LWD-Account/CG</th>
                <th>LWD reason-Justification</th>
                <th>PES status</th>
                <th>Bill rate</th>
                <th>Sow strat</th>
                <th>Sow End</th>
                <th>PO Numbers</th>
                <th>Comments</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.state.employees.map((emp) => (
                <tr key={emp.sNo}>
                  <td>{emp.resourceStatus}</td>
                  <td>{emp.billability}</td>
                  <td>{emp.currency}</td>
                  <td>{emp.lwdAccount}</td>
                  <td>{emp.lwdReason}</td>
                  <td>{emp.pesStatus}</td>
                  <td>{emp.billRate}</td>
                  <td>{emp.sowStart}</td>
                  <td>{emp.sowEnd}</td>
                  <td>{emp.poNumbers}</td>
                  <td>{emp.comments}</td>
                  {/* <td>
                    <div className="actions">
                    <button id="margin" onClick={() => this.updateemployee()} class="button">Update</button>
                     <button id="margin" onClick={() => this.viewemployee()}class="button">View</button>
                    </div>
                  </td> */}
                </tr>
              ))}
            </tbody>
          </table>
          {/* <button class="button">Add</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
          <button id="margin" onClick={() => this.updateemp()} class="button">Update</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
          {/* <button class="button">Update</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
         < button id="margin" onClick={() => this.viewemp()}class="button">View</button> 
        </div>
                
            </div>
        );
    }
}

export default Employeee;