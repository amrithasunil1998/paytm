import React from 'react';
import './App.css';
import Home from './screens/Home'
import { BrowserRouter as Router ,  Route } from 'react-router-dom';
import Billpayment from './screens/Billpayment';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';


function App()
 {
  return (
    <>
 
  <Router>
    <Switch>
    <Route exact path ='/'> <Home /></Route>
    <Route path ='/Billpayment'> <Billpayment /></Route>
    </Switch>
  </Router>
   </>
  )
}

export default App;
