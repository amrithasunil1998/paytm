import React from 'react';
import '../components/Appstore.css'
import appstore from'../images/appstoreimages/appstore.svg'
import googleplay from'../images/appstoreimages/googleplay.svg'
import twitter from '../images/appstoreimages/twitter.svg'
import instagram from '../images/appstoreimages/instagram.svg'
import facebook from '../images/appstoreimages/facebook.svg'
function Appstore()
{
    return(

        <div className='appstore_main'>
            
            <div className='appstore_content_container'>
                <div className='appstore_content_leftside'>
                    <div className='appstore_content_leftside_one'>
                        Download Paytm App to Pay from anywhere
                    </div>
                    <div className='appstore_content_leftside_two'>
                        <img src={appstore}></img>
                    </div>
                    <div className='appstore_content_leftside_three'>
                        <img src={googleplay}></img>
                    </div>

                </div>
                <div className='appstore_content_rightside'>
                        <div className='appstore_content_rightside_one'>
                            <img src={twitter}></img>
                        </div>
                        <div className='appstore_content_rightside_two'>
                            <img src={instagram}></img>
                        </div>
                        <div className='appstore_content_rightside_three'>
                            <img src={facebook}></img>
                        </div>
                </div>
            </div>
          
        </div>
    )
}
export default Appstore;