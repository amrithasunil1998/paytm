import React from "react";
import '../components/Header.css'
import logo from '../images/headerimages/logo.svg'

import { Link} from "react-router-dom";



import Billpayment from "../screens/Billpayment";

function Header() {
    return (

       
        <div className="background">
            <div className="main_container">
 
                <div className="header_imgone">
                    <img src={logo}></img>
                  
                </div>
                <div className="head_text">

                    <p>Paytm for Consumer
                        <div class="dropdown-content">
                            <div class='dropdown-content-main'>
                                <a href="#">Payments</a>
                                <div class="dropdown-content-three">
                              
                                    <a href="Billpayment" >Bill Payments and Recharges 
                                    <Link to='/Billpayment'></Link>
                                  
                                    </a>
                                   <a href="#">Send money to anyone
                                   
                                   </a>
                                    <a href="#">Instore Payments</a>
                                </div>
                            </div>
                            <div class='dropdown-content-main'>
                                <a href="#">Ticket Booking</a>
                                <div class="dropdown-content-three" >
                                    <a href="#">Movie Ticket</a>
                                    <a href="#">Flight Ticket</a>
                                    <a href="#">Train Ticket</a>

                                </div>
                            </div>
                            <div class='dropdown-content-main'>
                                <a href="#">Financial Services</a>
                                <div class="dropdown-content-three" >
                                    <div className="dropdown-content-main-sub">
                                        <a href="#">Banking</a>
                                        <div class='dropdown-content-three-sub'>
                                            <a href="#">Paytm Credit Card</a>
                                            <a href="#">Savings account</a>
                                        </div>
                                    </div>

                                    <a href="#">Money</a>
                                    <a href="#">Insurance</a>
                                    <a href="#">Postpaid</a>
                                </div>

                            </div>
                        </div>

                    </p>

                    <p >Paytm for Business
                        <div class="dropdown-content">
                            <div class='dropdown-content-main'>
                                <a href="#">Consumer Payments</a>
                                <div class="dropdown-content-three-second">
                                    <div className="dropdown-content-main-sub">
                                        <a href="#">Online Payments</a>
                                        <div className="dropdown-content-three-sub-section">
                                            <a href="#">Payement Gateway</a>
                                            <a href="#">Payment Links</a>
                                            <a href="#">UPI Payments</a>
                                            <a href="#">Subscriptions</a>
                                            <a href="#">Settlement</a>
                                            <a href="#">Saved Instruments</a>
                                        </div>
                                    </div>
                                    <div className="dropdown-content-main-sub">
                                        <a href="#">Offline Payments</a>
                                        <div className="dropdown-content-three-sub-section">

                                            <a href="#">paytm QR</a>
                                            <a href="#">Sound Box</a>
                                            <a href="#">Smart POS</a>
                                            <a href="#">All-in-one POS</a>

                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div class="dropdown-content-main">
                                <a href="#">Business Payments</a>
                                <div class="dropdown-content-three-second">
                                    <a href="#">payouts</a>
                                    <a href="#">Nodal Accounts</a>

                                </div>

                            </div>
                            <div class="dropdown-content-main">
                                <a href="#">Business Software</a>
                                <div class="dropdown-content-three-second">
                                    <a href="#">POS Billing Software</a>
                                    <a href="#">Paytm for business App</a>
                                    <a href="#">Advertising on Paytm</a>
                                    <a href="#">Business Khata</a>
                                </div>

                            </div>
                            <div class="dropdown-content-main">
                                <a href="#">Financial Service</a>
                                <div class="dropdown-content-three-second">
                                    <div className="dropdown-content-main-sub">
                                        <a href="#">Banking</a>
                                        <div className="dropdown-content-three-sub-section">
                                            <a href="#">Current Account</a>
                                            <a href="#">Salary Account</a>
                                            <a href="#">Employee Benefits</a>

                                        </div>
                                    </div>
                                    <div className="dropdown-content-main-sub">
                                        <a href="#">Wealth</a>
                                        <div className="dropdown-content-three-sub-section">
                                            <a href="#">Pension</a>
                                            <a href="#">Mutual Fund</a>
                                            <a href="#">Paytm Gold</a>
                                        </div>
                                    </div>
                                    <a href="#">Loans</a>
                                    <a href="#">Insurance</a>
                                </div>
                            </div>
                            <div class="dropdown-content-main">
                                <a href="#">Developer</a>
                                <div class="dropdown-content-three-second">
                                    <a href="#">Payments API</a>
                                    <a href="#">PAI</a>

                                </div>
                            </div>

                        </div>
                    </p>
                    <p>Company
                        <div class="dropdown-content">
                            <a href="#">About</a>
                            <a href="#">Blog</a>
                            <a href="#">Contact Us</a>
                        </div>
                    </p>
                    <p>Investor Relations
                        <div class="dropdown-content">
                            <a href="#">Fact-sheet</a>
                            <a href="#">Coporate Governance</a>
                            <a href="#">Financials</a>
                            <a href="#">policies</a>
                            <a href="#">Ipo</a>
                            <a href="#">Notices</a>
                        </div>
                    </p>
                    <p>Career</p>
                </div>
                <div className="head_button">
                    Sign In

                    {/* <div className="image_two">
                
                </div> */}

                </div>
            </div>

          <div className="drawer">
                <div class='nav'>
                    <input type="checkbox" id="menu"></input>
                    <label for="menu">&#9776;</label>

                    <div class="multi_level">
                        <div class="item">
                            <input type="checkbox" id="A" />
                            <label for="A">paytm for consumer</label>
                            <ul>
                                <li><a href="#">Payments</a></li>
                                <li><a href="#">Ticket Booking</a></li>
                                <li><a href="#">Financial Services</a></li>
                            </ul>
                        </div>

                        <div class="item">
                            <input type="checkbox" id="B" />
                            <label for="B">paytm for Business</label>

                            <ul>
                                <li><a href="#">Consumer Payments</a></li>
                                <li><a href="#">Business Payments</a></li>
                                <li><a href="#">Business Software</a></li>
                                <li><a href="#">Financial Services</a></li>
                                <li><a href="#">Developer</a></li>

                            </ul>
                        </div>

                        <div class="item">
                            <input type="checkbox" id="C" />
                            <label for="C">Company</label>

                            <ul>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Blog</a></li>
                                <li><a href="#">Contact Us</a></li>

                            </ul>
                        </div>

                        <div class="item">
                            <input type="checkbox" id="D" />
                            <label for="D">Investor Relations</label>

                            <ul>
                                <li><a href="#">Fact-sheet</a></li>
                                <li><a href="#">Coporate Governance</a></li>
                                <li><a href="#">Stock exchange Filings</a></li>
                                <li><a href="#">Financials</a></li>
                                <li><a href="#">policies</a></li>
                                <li><a href="#">IPO</a></li>
                                <li><a href="#">Notices</a></li>

                            </ul>
                        </div> 






                    </div>
                </div>
            </div> 

            

        </div>
    )
}
export default Header;