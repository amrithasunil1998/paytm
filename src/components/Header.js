import React from "react";
import '../components/Header.css'
import paytmlogo from '../images/headerimages/paytmlogo.svg'
import { IoIosMenu } from 'react-icons/io';


import sign from '../images/headerimages/sign.svg'
import signin from '../images/headerimages/signin.svg'


function Header()
{
    return(
    <div className="background">
        <div className ="main_container">
            
               <div className="header_imgone">
                   <img src={paytmlogo}></img>
               </div>
               <div className="head_text">
                 
                    <p>Paytm for Consumer
                    <div class="dropdown-content">
                                <div class='dropdown-content-main'>
                                    <a href="#">Payments</a>
                                    <div class="dropdown-content-three">
                                        <a  href="#" >Bill Payments and Recharges</a>
                                        <a href="#">Send money to anyone</a>
                                        <a href="#">online Payments</a>
                                        <a href="#">Instore Payments</a>
                                    </div> 
                                    </div>
                                            <div class='dropdown-content-main'>
                                            <a  href="#">Ticket Booking</a>
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
                                        <div  class="dropdown-content-three">
                                                            <div className="dropdown-content-main-sub">
                                                             <a href="#">Online Payments</a>
                                                                    <div  className="dropdown-content-three-sub-section">
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
                                            <div className="dropdown-content-three-sub">
                                            
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
                                         <div class="dropdown-content-three">
                                                 <a href="#">payouts</a>
                                                    <a href="#">Nodal Accounts</a>
                           
                                         </div> 

                                        </div>
                                     <div class="dropdown-content-main">   
                                     <a href="#">Business Software</a>
                                     <div class="dropdown-content-three">
                                            <a href="#">POS Billing Software</a>
                                            <a href="#">Paytm for business App</a>
                                            <a href="#">Advertising on Paytm</a>
                                            <a href="#">Business Khata</a>
                                    </div>
                           
                                    </div> 
                                    <div class="dropdown-content-main"> 
                                    <a href="#">Financial Service</a>
                                    <div class="dropdown-content-three">
                                                <div className="dropdown-content-main-sub">
                                                    <a href="#">Banking</a>
                                                    <div className="dropdown-content-three-sub">
                                                    <a href="#">Current Account</a>
                                                        <a href="#">Salary Account</a>
                                                        <a href="#">Employee Benefits</a>
                                                       
                                                    </div>
                                                </div>
                                                <div className="dropdown-content-main-sub">     
                                                        <a href="#">Wealth</a>
                                                        <div className="dropdown-content-three-sub">
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
                                     <div class="dropdown-content-three">
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

        <div className="drawer_content_main">
            <div className="drawer_container">
             <IoIosMenu />
             </div>
           <nav> 
             <ul>
             <li><a href ="#">Paytm for consumer</a></li>
                     <ul>
                         <li> <a href="#">Payments</a></li>
                         <li> <a href="#">Ticket Booking</a></li>
                         <li> <a href="#">Financial Services</a></li>
                     </ul>
             <li><a href ="#">Paytm for business</a></li>
                      <ul>
                          <li><a href="#">Consumer payments</a></li>
                          <li> <a href="#">Business Payments</a></li>
                          <li> <a href="#">Business Software</a></li>
                          <li> <a href="#">Financial Services</a></li>
                          <li> <a href="#">Developer</a></li>
                      </ul>
             <li><a href ="#">Company</a></li>

                         <ul>
                          <li><a href="#">About</a></li>
                          <li> <a href="#">Blog</a></li>
                          <li> <a href="#">Contact Us</a></li>
                         
                      </ul>
             <li><a href ="#">Investor Relations</a></li>
                         <ul>
                          <li><a href="#">Fact-sheet</a></li>
                          <li> <a href="#">Corporate Governance</a></li>
                          <li> <a href="#">Financials</a></li>
                          <li> <a href="#">policies</a></li>
                          <li> <a href="#">IPO</a></li>
                          <li> <a href="#">Notices</a></li>
                         
                        </ul>
             <li><a href ="#">Career</a></li>
             </ul>
             </nav> 
        </div>
 </div>
    )
}
export default Header;