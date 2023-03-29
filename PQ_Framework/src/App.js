import './App.css';
import React from "react";

// #### PAGES ####
import LiveProd from "./components/LiveProd";
import Startpage from "./pages/Startpage/Startpage";
import Contact from "./components/Contact";
import Wiki from "./components/Wiki";
// #### ROUTER #### 
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import DataAnalyis from './pages/DataAnalysis/dataAnalysis';

var App = () => {
  var currentUserName = ""
  return (
   <Router>
   <Switch>
     <Route path ='/' exact component={Startpage} />
     <Route path ='/startpage' exact component={Startpage} />
     <Route path = '/data-analyis' component ={DataAnalyis}/>
     <Route path ="/live" exact component={LiveProd} />
     <Route path ='/wiki' exact component={Wiki} />
     <Route path ="/contact" exact component={Contact} />
    
   </Switch>
   </Router>
  );
}


export default App;

  
