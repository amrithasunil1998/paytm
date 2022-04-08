import React from 'react';
import Home from './screens/Home'
import {BrowserRouter as Router,Route, Routes} from "react-router-dom";

function App() {
  return (
    <>
   <Home />
   <Router>
     <Routes>
     <Route path="/" screens={Home}></Route>
     </Routes>
   </Router>

   </>
  );
}

export default App;
