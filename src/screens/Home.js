import React from "react";
import Header from '../components/Header'
import Banner from '../components/Banner'
import Paybills from "../components/Paybills";
import Bookandbuy from "../components/Bookandbuy";
import Paytminstruments from "../components/Paytminstruments";
import Banking from "../components/Banking";
import Paymentbank from "../components/Paymentbank";


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
        </>
    )
}
export default Home;