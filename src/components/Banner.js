import React from 'react';
import '../components/Banner.css'
import bannerimagetwo from '../images/bannerimages/bannerimagetwo.png'
import bannerimageone from '../images/bannerimages/bannerimageone.webp'
import { FaGooglePlay } from 'react-icons/fa'
import { AiFillApple } from 'react-icons/ai'
function Banner() {
    return (
        <div className='banner_main'>
            <div className='message'>
                <p className='nowallet'> No Wallet KYC Required</p>
                <p style={{ fontSize: "25px", marginBlock: "4px", marginInline: "4px" }} >  😊</p>
                <p className='upi'>to pay using UPI on Paytm.</p>
                <p className='learnmore'> Learn more.</p>
            </div>


            <div className='banner_background'>
                <div className='divider'>
                    <div className='banner_image_two'>
                        <img src={bannerimagetwo}></img>
                    </div>

                    <div className='banner_content_heading'>
                        India's Most-loved Payments App
                    </div>
                    <div className='banner_content_heading_content'>
                        Recharge & pay bills, book flights & movie tickets, open a savings account, invest in stocks & mutual funds, and do a lot more.
                    </div>

                    <div className='download_app'>

                        Download Paytm App <p><AiFillApple /> <p style={{ fontSize: "15px" }}><FaGooglePlay /></p></p>
                    </div>
                </div>
                <div className='banner_image_one'>
                    <img src={bannerimageone}></img>
                </div>
            </div>

        </div>
    )
}
export default Banner;