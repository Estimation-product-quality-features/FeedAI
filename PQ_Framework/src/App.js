import './App.css';
import React from "react";

// #### PAGES ####
import Add from './pages/Add/add';
import AddEvaluation from './pages/AddEvaluation/addEvaluation';
import LiveProd from "./components/LiveProd";
import Menu from "./pages/Menu/Menu";
import Projekt from "./components/projekt";
import Contact from "./components/Contact";
import Wiki from "./components/Wiki";
// #### ROUTER #### 
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

var App = () => {
  var currentUserName = ""
  return (
   <Router>
   <Switch>
     <Route path ='/' exact component={Menu} />
     <Route path ='/menu' exact component={Menu} />
     <Route path ='/add' exact component={Add} />
     <Route path = '/add-Evaluation' component ={AddEvaluation}/>
     <Route path ="/live" exact component={LiveProd} />
     <Route path ="/projekt" exact component={Projekt} />
     <Route path ='/Wiki' exact component={Wiki} />
     <Route path ="/Contact" exact component={Contact} />
    
   </Switch>
   </Router>
  );
}


export default App;

  
