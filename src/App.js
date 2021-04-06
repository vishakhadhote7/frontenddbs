import logo from "./logo.svg";
import "./App.css";
import Personalinfo from "./Component/Personalinfo";
import Employeee from "./Component/Employeee";
import Home from "./Component/Home";
import UpdatePersonal from "./Component/UpdatePersonal";
import AddPersonal from "./Component/AddPersonal";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
} from "react-router-dom";
import ViewPersonal from "./Component/ViewPersonal";
import ViewEmployee from "./Component/ViewEmployee";
import AddEmploee from "./Component/AddEmploee";
import UpdateEmployee from "./Component/UpdateEmployee";
function App() {
  return (
    <div className="container">
      <Router>
          <Switch>
            <Route path="/home" component={Home}/>
            <Route path="/personalinfo" component={Personalinfo} />
            <Route exact path="/" component={Employeee} />
            <Route path="/add-employee" component={AddPersonal} />
            <Route path="/update" component={UpdatePersonal} />
            <Route path="/view" component={ViewPersonal}/>
            <Route path="/viewem" component={ViewEmployee}/>
            <Route path="/add-emp" component={AddEmploee}/>
            <Route path="/update-emp" component={UpdateEmployee}/>
            </Switch>
            </Router>
    
    </div>
  );
}


export default App;
