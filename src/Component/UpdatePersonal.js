import React, { Component } from 'react';

class UpdatePersonal extends Component {
    constructor(props) {
        super(props)

        this.state = {
            cgGroupId :this.props.match.params.cgGroupId,
            associateFullName : '',
            gender:'',
            cgUserName:'',
            cgMailId:'',
            region:'',
            practice:'',
            designation:'',
            cgSupervisor:'',
            cgDBSAccountSupervisor:'',
            dbsClientLead:'',
            tower:'',
            shortTower:'',
            reasonResignation:'',
            associateLocation:'',
            dateOfJoiningDBSAccount:'',
            dbsBillableStartDate:'',
            bankId:'',
            dbsMailId:'',
            primarySkill:'',
            overallExperienceBeforeJoiningCg:'',
            sowNumber:'',
            mandatoryTraining:'',
            onboardingDocs:'',
            pancard:'',
            passport:'',
            passportexpirydate:'',
            dateOfBirth:'',
            foreignEmploymentExperience:'',
            contact:'',
            emergencyContact:'',
            temporaryAddress:'',
            permanentAddress:'',
            csbForm:'',
            cgLaptopSlno:'',
            dbsLaptopSlno:'',
            dateOfLaptopTaken:'',
            dateOfLaptopReturn:'',
            spoc:''
        }
        this.changeCGgroupidHandler=this.changeCGgroupidHandler.bind(this);
        this.changeNameHandler=this.changeNameHandler.bind(this);
        this.changeGenderHandler = this.changeGenderHandler.bind(this);
        this.changeCgUserNameHandler = this.changeCgUserNameHandler.bind(this);
        this.changeEmailIdHandler=this.changeEmailIdHandler.bind(this);
        this.changeRegionHandler=this.changeRegionHandler.bind(this);
        this.changePracticeHandler=this.changePracticeHandler.bind(this);
        this.changeDesignationHandler=this.changeDesignationHandler.bind(this);
        this.changeCgSupervisorHandler=this.changeCgSupervisorHandler.bind(this);
        this.changeCgDbsAccountSupervisorHandler=this.changeCgDbsAccountSupervisorHandler.bind(this);
        this.changeClientLeadHandler=this.changeClientLeadHandler.bind(this);
        this.changeTowerHandler=this.changeTowerHandler.bind(this);
        this.changeShortTowerHandler=this.changeShortTowerHandler.bind(this);
        this.changeReasonResignationHandler=this.changeReasonResignationHandler.bind(this);
        this.changeAssociateLocationHandler=this.changeAssociateLocationHandler.bind(this);
        this.changeDojDbsAccountHandler=this.changeDojDbsAccountHandler.bind(this);
        this.changeDbsBillableStartDateHandler=this.changeDbsBillableStartDateHandler.bind(this);
        this.changeBankIdHandler=this.changeBankIdHandler.bind(this);
        this.changeDbsEmailIdHandler=this.changeDbsEmailIdHandler.bind(this);
        this.changePrimarySkillHandler=this.changePrimarySkillHandler.bind(this);
        this.changeOveralllExperienceHandler=this.changeOveralllExperienceHandler.bind(this);
        this.changeSowNumberHandler=this.changeSowNumberHandler.bind(this);
        this.changeMandatoryTrainingHandler=this.changeMandatoryTrainingHandler.bind(this);
        this.changeOnboardingDocsHandler=this.changeOnboardingDocsHandler.bind(this);
        this.changePancardHandler=this.changePancardHandler.bind(this);
        this.changePassportHandler=this.changePassportHandler.bind(this);
        this.changePassportExpiryDateHandler=this.changePassportExpiryDateHandler.bind(this);
        this.changeDateOfBirthHandler=this.changeDateOfBirthHandler.bind(this);
        this.changeForiegnHandler=this.changeForiegnHandler.bind(this);
        this.changePhoneNoHandler = this.changePhoneNoHandler.bind(this);
        this.changeEmergencyContactHandler = this.changeEmergencyContactHandler.bind(this);
        this.changeTemporaryAddressHandler = this.changeTemporaryAddressHandler.bind(this);
        this.changePermanantAddressHandler=this.changePermanantAddressHandler.bind(this);
        this.changeCsbFormHandler=this.changeCsbFormHandler.bind(this);
        this.changeCgLaptopslnoHandler=this.changeCgLaptopslnoHandler.bind(this);
        this.changeDbsLaptopSlnoHandler=this.changeDbsLaptopSlnoHandler.bind(this);
        this.changeDateOfLaptopTakenHandler=this.changeDateOfLaptopTakenHandler.bind(this);
        this.changeDateOfLaptopReturnHandler=this.changeDateOfLaptopReturnHandler.bind(this);
        this.changeSpocHandler=this.changeSpocHandler.bind(this);
        this.update = this.update.bind(this);
    }

    update = (e) => {
        e.preventDefault();
        let employe={cgGroupId:this.state.cgGroupId,associateFullName:this.state.associateFullName, gender: this.state.gender,cgUserName: this.state.cgUserName,cgMailId: this.state.cgMailId, region: this.state.region,practice: this.state.practice,designation: this.state.designation,cgSupervisor: this.state.cgSupervisor,cgDBSAccountSupervisor: this.state.cgDBSAccountSupervisor, dbsClientLead: this.state.dbsClientLead,tower: this.state.tower,
            shortTower:this.state.shortTower, reasonResignation: this.state.reasonResignation,associateLocation: this.state.associateLocation,dateOfJoiningDBSAccount: this.state.dateOfJoiningDBSAccount, dbsBillableStartDate: this.state.dbsBillableStartDate,bankId: this.state.bankId,dbsMailId: this.state.dedbsMailId,primarySkill: this.state.primarySkill,overallExperienceBeforeJoiningCg: this.state.overallExperienceBeforeJoiningCg, sowNumber: this.state.sowNumber,mandatoryTraining: this.state.mandatoryTraining,onboardingDocs:this.state.onboardingDocs,
            pancard:this.state.pancard,passport:this.state.passport,passportExpiryDate:this.state.passportExpiryDate,dateOfBirth:this.state.dateOfBirth,foreignEmploymentExperience:this.state.foreignEmploymentExperience,contact:this.state.contact,emergencyContact:this.state.emergencyContact,temporaryAddress:this.state.temporaryAddress, permanentAddress:this.state.permanentAddress,csbForm:this.state.csbForm,cgLaptopSlno:this.state.cgLaptopSlno,dbsLaptopSlno:this.state.dbsLaptopSlno,dateOfLaptopTaken:this.state.dateOfLaptopTaken,dateOfLaptopReturn:this.state.dateOfLaptopReturn,spoc:this.state.spoc};
            console.log('employe => ' + JSON.stringify(employe));
            console.log('cgGroupId => ' + JSON.stringify(this.state.cgGroupId));
        
  
    }
    changeCGgroupidHandler= (event) =>{
        this.setState({cgGroupId: event.target.value});
    }
  
    changeNameHandler= (event) =>{
        this.setState({associateFullName: event.target.value});
    }

    changeGenderHandler= (event) =>{
        this.setState({gender: event.target.value});
    }
    changeCgUserNameHandler= (event) =>{
        this.setState({cgUserName: event.target.value});
    }
    changeEmailIdHandler= (event) =>{
        this.setState({cgMailId: event.target.value});
    }
  
    changeRegionHandler= (event) =>{
        this.setState({region: event.target.value});
    }

    changePracticeHandler= (event) =>{
        this.setState({practice: event.target.value});
    }
    changeDesignationHandler= (event) =>{
        this.setState({designation: event.target.value});
    }

    changeCgSupervisorHandler= (event) =>{
        this.setState({cgSupervisor: event.target.value});
    }
    changeCgDbsAccountSupervisorHandler= (event) =>{
        this.setState({cgDBSAccountSupervisor: event.target.value});
    }
    changeClientLeadHandler= (event) =>{
        this.setState({dbsClientLead: event.target.value});
    }
    changeTowerHandler= (event) =>{
        this.setState({tower: event.target.value});
    }
    changeShortTowerHandler= (event) =>{
        this.setState({shortTower: event.target.value});
    }
    changeReasonResignationHandler= (event) =>{
        this.setState({reasonResignation: event.target.value});
    }
    changeAssociateLocationHandler= (event) =>{
        this.setState({associateLocation: event.target.value});
    }
    changeDojDbsAccountHandler= (event) =>{
        this.setState({dateOfJoiningDBSAccount: event.target.value});
    }

    changeDbsBillableStartDateHandler= (event) =>{
        this.setState({dbsBillableStartDate: event.target.value});
    }
    changeBankIdHandler= (event) =>{
        this.setState({bankId: event.target.value});
    }
    changeDbsEmailIdHandler= (event) =>{
        this.setState({dbsMailId: event.target.value});
    }
    changePrimarySkillHandler= (event) =>{
        this.setState({primarySkill: event.target.value});
    }
    changeOveralllExperienceHandler= (event) =>{
        this.setState({overallExperienceBeforeJoiningCg: event.target.value});
    }
    changeSowNumberHandler= (event) =>{
        this.setState({sowNumber: event.target.value});
    }
    changeMandatoryTrainingHandler= (event) =>{
        this.setState({mandatoryTraining: event.target.value});
    }
    changeOnboardingDocsHandler= (event) =>{
        this.setState({onboardingDocs: event.target.value});
    }
    
    changePancardHandler= (event) =>{
        this.setState({pancard: event.target.value});
    }
    changePassportHandler= (event) =>{
        this.setState({passport: event.target.value});
    }
    changePassportExpiryDateHandler= (event) =>{
        this.setState({passportExpiryDate: event.target.value});
    }
    changeDateOfBirthHandler= (event) =>{
        this.setState({dateOfBirth: event.target.value});
    }
    changeForiegnHandler= (event) =>{
        this.setState({foreignEmploymentExperience: event.target.value});
    }
    changePhoneNoHandler= (event) =>{
        this.setState({contact: event.target.value});
    }
    changeEmergencyContactHandler= (event) =>{
        this.setState({emergencyContact: event.target.value});
    }

    changeTemporaryAddressHandler= (event) =>{
        this.setState({temporaryAddress: event.target.value});
    }
    changePermanantAddressHandler= (event) =>{
        this.setState({permanentAddress: event.target.value});
    }
    changeCsbFormHandler= (event) =>{
        this.setState({csbForm: event.target.value});
    }
    changeCgLaptopslnoHandler= (event) =>{
        this.setState({cgLaptopSlno: event.target.value});
    }
    changeDbsLaptopSlnoHandler= (event) =>{
        this.setState({dbsLaptopSlno: event.target.value});
    }

    changeDateOfLaptopTakenHandler= (event) =>{
        this.setState({dateOfLaptopTaken: event.target.value});
    }
    changeDateOfLaptopReturnHandler= (event) =>{
        this.setState({dateOfLaptopReturn: event.target.value});
    }
    changeSpocHandler= (event) =>{
        this.setState({spoc: event.target.value});
    }
    
    
    cancel(){
        this.props.history.push('/personalinfo');
    }

    render(){
        return(
            <div>
                <br></br>
              <div className="container">
                    <div className="row">
                        <div className="card col-md-10 offset-md-2 offset-md-2">
                                <h2 className="text-center">Personal Details</h2>
                            <div className="card-body">
                                <form>
                                <div className="form-group">
                                        <label>Cg group id:</label>
                                        <input type="number" name="cgGroupId" placeholder="Enter cgid" required className="form-control" 
                                        value={this.state.cgGroupId} onChange={this.changeCGgroupidHandler}  />
                                    </div>
                                   <div className="form-group">
                                        <label>Name: </label>
                                        <input type="text" placeholder="enter your name" name="associateFullName" required className="form-control"
                                        value={this.state.associateFullName} onChange={this.changeNameHandler} />
                                        {/* <div className="errorMsg">{this.state.errors.userId}</div> */}
                                    </div>
                                    <div className="form-group">
                                        <label for="gender">Gender(M/F):  </label>
                                        <select id="gender" name="gender">
                                        <option value="">-Select Gender-</option>
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                        </select>
                                    
                                        {/* <div className="errorMsg">{this.state.errors.password}</div> */}
                                    </div>
                                    <div className="form-group">
                                        <label>CG User Name: </label>
                                        <input type="text" placeholder="enter username" name="cgUserName" required className="form-control"
                                        value={this.state.cgUserName} onChange={this.changeCgUserNameHandler} />
                                        {/* <div className="errorMsg">{this.state.errors.userId}</div> */}
                                    </div>
                                    <div className="form-group">
                                        <label>Cg EmailId: </label>
                                        <input type="text"  placeholder="enter cg email id" name="cgMailId" required className="form-control"
                                            value={this.state.cgMailId} onChange={this.changeEmailIdHandler}
                                        />
                                        {/* <div className="errorMsg">{this.state.errors.password}</div> */}
                                    </div>
                                    <div className="form-group">
                                        <label>Region: </label>
                                        <input type="text"  placeholder="enter region" name="region" required className="form-control"
                                            value={this.state.region} onChange={this.changeRegionHandler}
                                        />
                                        {/* <div className="errorMsg">{this.state.errors.password}</div> */}
                                    </div>
                                    <div className="form-group">
                                        <label>Practice: </label>
                                        <input type="text"  placeholder="practice" name="practice" required className="form-control"
                                            value={this.state.practice} onChange={this.changePracticeHandler}
                                        />
                                        {/* <div className="errorMsg">{this.state.errors.password}</div> */}
                                    </div>
                                    <div className="form-group">
                                        <label>Designation: </label>
                                        <input type="text"  placeholder="enter designation" name="designation" required className="form-control"
                                            value={this.state.designation} onChange={this.changeDesignationHandler}
                                        />
                                        {/* <div className="errorMsg">{this.state.errors.password}</div> */}
                                    </div>
                                    <div className="form-group">
                                        <label>Cg Supervisor: </label>
                                        <input type="text"  placeholder="enter cgsupervisor name" name="cgSupervisor" required className="form-control"
                                            value={this.state.cgSupervisor} onChange={this.changeCgSupervisoHandler}
                                        />
                                        {/* <div className="errorMsg">{this.state.errors.password}</div> */}
                                    </div>
                                    <div className="form-group">
                                        <label>Cg DBS Supervisor: </label>
                                        <input type="text"  placeholder="enter DBs supervisor" name="cgDBSAccountSupervisor" required className="form-control"
                                            value={this.state.cgDBSAccountSupervisor} onChange={this.changeCgDbsAccountSupervisorHandler}
                                        />
                                        {/* <div className="errorMsg">{this.state.errors.password}</div> */}
                                    </div>
                                    <div className="form-group">
                                        <label>DBs ClientLead: </label>
                                        <input type="text"  placeholder="enter clientlead" name="dbsClientLead" required className="form-control"
                                            value={this.state.dbsClientLead} onChange={this.changeClientLeadHandler}
                                        />
                                        {/* <div className="errorMsg">{this.state.errors.password}</div> */}
                                    </div>
                                    <div className="form-group">
                                        <label>Tower: </label>
                                        <input type="text"  placeholder="enter Tower" name="tower" required className="form-control"
                                            value={this.state.tower} onChange={this.changeTowerHandler}
                                        />
                                        {/* <div className="errorMsg">{this.state.errors.password}</div> */}
                                    </div>
                                    <div className="form-group">
                                        <label>Short Tower: </label>
                                        <input type="text"  placeholder="enter short Tower" name="shortTower" required className="form-control"
                                            value={this.state.shortTower} onChange={this.changeShortTowerHandler}
                                        />
                                        {/* <div className="errorMsg">{this.state.errors.password}</div> */}
                                    </div>
                                    <div className="form-group">
                                        <label>Reason for Resignation: </label>
                                        <input type="text"  placeholder="enter reason" name="reasonResignation" required className="form-control"
                                            value={this.state.reasonResignation} onChange={this.changeReasonResignationHandler}
                                        />
                                        {/* <div className="errorMsg">{this.state.errors.password}</div> */}
                                    </div>
                                    <div className="form-group">
                                        <label>Location: </label>
                                        <input type="text"  placeholder="enter location" name="associateLocation" required className="form-control"
                                            value={this.state.associateLocation} onChange={this.changeAssociateLocationHandler}
                                        />
                                        {/* <div className="errorMsg">{this.state.errors.password}</div> */}
                                    </div>
                                    <div className="form-group">
                                        <label>Date of Joining: </label>
                                        <input type="date"  placeholder="enter date of joining" name="dateOfJoiningDBSAccount" required className="form-control"
                                            value={this.state.dateOfJoiningDBSAccount} onChange={this.changeDojDbsAccountHandler}
                                        />
                                        {/* <div className="errorMsg">{this.state.errors.password}</div> */}
                                    </div>
                                    <div className="form-group">
                                        <label>Date of billable start: </label>
                                        <input type="date"  placeholder="enter date of start" name="dbsBillableStartDate" required className="form-control"
                                            value={this.state.dbsBillableStartDate} onChange={this.changeDbsBillableStartDateHandler}
                                        />
                                        {/* <div className="errorMsg">{this.state.errors.password}</div> */}
                                    </div>
                                    <div className="form-group">
                                        <label>BankId: </label>
                                        <input type="number"  placeholder="enter id" name="bankId" required className="form-control"
                                            value={this.state.bankId} onChange={this.changeBankIdHandler}
                                        />
                                        {/* <div className="errorMsg">{this.state.errors.password}</div> */}
                                    </div>
                                    <div className="form-group">
                                        <label>DBS EmailId: </label>
                                        <input type="text"  placeholder="enter dbs email id" name="dbsMailId" required className="form-control"
                                            value={this.state.dbsMailId} onChange={this.changeDbsEmailIdHandler}
                                        />
                                        {/* <div className="errorMsg">{this.state.errors.password}</div> */}
                                    </div>
                                    <div className="form-group">
                                        <label>PrimarySkill: </label>
                                        <input type="text"  placeholder="enter skill" name="primarySkill" required className="form-control"
                                            value={this.state.primarySkill} onChange={this.changePrimarySkillHandler}
                                        />
                                        {/* <div className="errorMsg">{this.state.errors.password}</div> */}
                                    </div>
                                    <div className="form-group">
                                        <label>Experience: </label>
                                        <input type="text"  placeholder="enter experience" name="overallExperienceBeforeJoiningCg" required className="form-control"
                                            value={this.state.overallExperienceBeforeJoiningCg} onChange={this.changeOveralllExperienceHandler}
                                        />
                                        {/* <div className="errorMsg">{this.state.errors.password}</div> */}
                                    </div>
                                    <div className="form-group">
                                        <label>sowNumber: </label>
                                        <input type="number"  placeholder="enter experience" name="sowNumber" required className="form-control"
                                            value={this.state.sowNumber} onChange={this.changeSowNumberHandler}
                                        />
                                        {/* <div className="errorMsg">{this.state.errors.password}</div> */}
                                    </div>
                                    <div className="form-group">
                                        <label>Mandatory Training: </label>
                                        <input type="text"  placeholder="enter training" name="mandatoryTraining" required className="form-control"
                                            value={this.state.mandatoryTraining} onChange={this.changeMandatoryTrainingHandler}
                                        />
                                        {/* <div className="errorMsg">{this.state.errors.password}</div> */}
                                    </div>
                                    <div className="form-group">
                                        <label>Onboarding Docs: </label>
                                        <input type="text"  placeholder="Documents" name="onboardingDocs" required className="form-control"
                                            value={this.state.onboardingDocs} onChange={this.changeOnboardingDocsHandler}
                                        />
                                        {/* <div className="errorMsg">{this.state.errors.password}</div> */}
                                    </div>
                                
                                    <div className="form-group">
                                        <label>pancard: </label>
                                        <input type="number"  placeholder="enter 10 digits pancard" name="panCard" required className="form-control"
                                            value={this.state.panCard} onChange={this.changePancardHandler}
                                        />
                                        {/* <div className="errorMsg">{this.state.errors.password}</div> */}
                                    </div>
                                    <div className="form-group">
                                        <label>passport: </label>
                                        <input type="number"  placeholder="enter passport number" name="passport" required className="form-control"
                                            value={this.state.passport} onChange={this.changePassportHandler}
                                        />
                                        {/* <div className="errorMsg">{this.state.errors.password}</div> */}
                                    </div>
                                    <div className="form-group">
                                        <label>passportexpirydate: </label>
                                        <input type="date"  placeholder="YYYY-MM-DD" name="passportexpirydate" required className="form-control"
                                            value={this.state.passportexpirydate} onChange={this.changePassportExpiryDateHandler}
                                        />
                                        {/* <div className="errorMsg">{this.state.errors.password}</div> */}
                                    </div>
                                    <div className="form-group">
                                        <label>Date of Birth: </label>
                                        <input type="date"  placeholder="enter date of birth" name="dateOfBirth" required className="form-control"
                                            value={this.state.dateOfBirth} onChange={this.changeDateOfBirthHandler}
                                        />
                                        {/* <div className="errorMsg">{this.state.errors.password}</div> */}
                                    </div>
                                    <div className="form-group">
                                        <label>Foriegn: </label>
                                        <input type="text"  placeholder="enter experience" name="foreignEmploymentExperience" required className="form-control"
                                            value={this.state.foreignEmploymentExperience} onChange={this.changeForiegnHandler}
                                        />
                                        {/* <div className="errorMsg">{this.state.errors.password}</div> */}
                                    </div>
                                    <div className="form-group">
                                        <label>Contact No: </label>
                                        <input type="number"  placeholder="enter 10 digits mobile number" name="contact" required className="form-control"
                                            value={this.state.contact} onChange={this.changePhoneNoHandler}
                                        />
                                        {/* <div className="errorMsg">{this.state.errors.password}</div> */}
                                    </div>
                                    <div className="form-group">
                                        <label>Emergency Contact No: </label>
                                        <input type="number"  placeholder="enter 10 digits mobile number" name="emergencyContact" required className="form-control"
                                            value={this.state.emergencyContact} onChange={this.changeEmergencyContactHandler}
                                        />
                                        {/* <div className="errorMsg">{this.state.errors.password}</div> */}
                                    </div>
                                
                                    <div className="form-group">
                                        <label>Temporary Address: </label>
                                        <input type="text"  placeholder="enter present address" name="temporaryAddress" required className="form-control"
                                            value={this.state.temporaryAddress} onChange={this.changeTemporaryAddressHandler}
                                        />
                                        {/* <div className="errorMsg">{this.state.errors.password}</div> */}
                                    </div>
                                    <div className="form-group">
                                        <label>Permanant Address: </label>
                                        <input type="text"  placeholder="enter present address" name="permanentAddress" required className="form-control"
                                            value={this.state.permanentAddress} onChange={this.changePermanantAddressHandler}
                                        />
                                        {/* <div className="errorMsg">{this.state.errors.password}</div> */}
                                    </div>
                                    <div className="form-group">
                                        <label>CSB form: </label>
                                        <input type="text"  placeholder="enter form" name="csbForm" required className="form-control"
                                            value={this.state.csbForm} onChange={this.changeCsbFormHandler}
                                        />
                                        {/* <div className="errorMsg">{this.state.errors.password}</div> */}
                                    </div>
                                    <div className="form-group">
                                        <label>Cg Laptop Slno: </label>
                                        <input type="number"  placeholder="enter slno" name="cgLaptopSlno" required className="form-control"
                                            value={this.state.cgLaptopSlno} onChange={this.changeCgLaptopslnoHandler}
                                        />
                                        {/* <div className="errorMsg">{this.state.errors.password}</div> */}
                                    </div>
                                    <div className="form-group">
                                        <label>DBs Laptop Slno: </label>
                                        <input type="number"  placeholder="enter slno" name="dbsLaptopSlno" required className="form-control"
                                            value={this.state.dbsLaptopSlno} onChange={this.changeDbsLaptopSlnoHandler}
                                        />
                                        {/* <div className="errorMsg">{this.state.errors.password}</div> */}
                                    </div>
                                    <div className="form-group">
                                        <label>Laptop Takeen: </label>
                                        <input type="date"  placeholder="YYYY-MM-DD" name="dateOfLaptopTaken" required className="form-control"
                                            value={this.state.dateOfLaptopTaken} onChange={this.changeDateOfLaptopTakenHandler}
                                        />
                                        {/* <div className="errorMsg">{this.state.errors.password}</div> */}
                                    </div>
                                    <div className="form-group">
                                        <label>Laptop Return: </label>
                                        <input type="date"  placeholder="YYYY-MM-DD" name="dateOfLaptopReturn" required className="form-control"
                                            value={this.state.dateOfLaptopReturn} onChange={this.changeDateOfLaptopReturnHandler}
                                        />
                                        {/* <div className="errorMsg">{this.state.errors.password}</div> */}
                                    </div>
                                    <div className="form-group">
                                        <label>Spoc: </label>
                                        <input type="text"  placeholder="enter spoc" name="spoc" required className="form-control"
                                            value={this.state.spoc} onChange={this.changeSpocHandler}
                                        />
                                        {/* <div className="errorMsg">{this.state.errors.password}</div> */}
                                    </div>

                                    <button className="btn btn-success" onClick={this.update}>Save</button>
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

export default UpdatePersonal;