import React from "react";
import Appbutton from "../../common/Appbutton";
import '../../components/Billpayment/Bannertwo.css'
import bannertwoimageone from '../../images/secondpage/bannertwoimages/bannertwoimageone.png'
import bannertwoimagetwo from '../../images/secondpage/bannertwoimages/bannertwoimagetwo.png'

function Bannertwo()
{
    return(
      <div className='banner_main'>
            <div className='message'>
                <p className='nowallet'> No Wallet KYC Required</p>
                <p style={{ fontSize: "25px", marginBlock: "4px", marginInline: "4px" }} >  😊</p>
                <p className='upi'>to pay using UPI on Paytm.</p>
                <p className='learnmore'> Learn more.</p>
            </div>
            <div className='banner2_background'>
               <div className='banner2_left'>
                    <div className='banner2_image_two'>
                        <img src={bannertwoimagetwo}></img><p>Recharges & Bill Payments</p>
                    </div>

                    <div className='banner2_content_heading'>
                        <div style={{color:"#00baf2"}}>Payments made</div>
                        <div style={{color:"#002970"}}>Rewarding on Paytm.</div>
                    </div>
                    <div className='banner2_content_heading_content'>
                     Pay for services like Fastag, Subscription, Metro Cards, besides the regulars like Mobile, Electricity & Water with the Paytm App & get rewarded with hottest deals, cashbacks & offers
                    </div>

                    <div >

                       <Appbutton />
                    </div>
                <div className='banner2_image_one'>
                    <img src={bannertwoimageone}></img>
                </div>
               
            </div>
        </div>
        </div>
    )
}
export default Bannertwo;