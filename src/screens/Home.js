import React from "react";
import Header from '../components/Header'
import Banner from '../components/Banner'
import Paybills from "../components/Paybills";
import Bookandbuy from "../components/Bookandbuy";
import Paytminstruments from "../components/Paytminstruments";
import Banking from "../components/Banking";
import Paymentbank from "../components/Paymentbank";
import Paytmmoney from "../components/Paytmmoney";
import Businessservices from "../components/Businessservices";
import Businesstools from "../components/Businesstools";
import Paytmcard from "../components/Paytmcard";
import Appstore from "../components/Appstore";
// import {BrowserRouter as Router,Switch,Route, Routes,Link} from "react-router-dom";



function Home()
{
    return(
        <>
      <Header />
      <Banner />
      <Paybills />
       <Bookandbuy />
      <Paytminstruments />
      <Banking />
      <Paymentbank /> 
      <Paytmmoney />
      <Businessservices />   
      <Businesstools />
      <Paytmcard />
      <Appstore />
        

    
        </>
    )
}
export default Home;