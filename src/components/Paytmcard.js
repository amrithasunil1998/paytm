import React from'react';
import '../components/Paytmcard.css'
import three from '../images/paytmcardimages/three.webp'
import paytmcard from '../images/paytmcardimages/paytmcard.webp'
import Learnmore from '../common/Learnmore'

function Paytmcard()
{
    return(
        <div className='paytmcard_main'>
            <div className='paytmcard_card'>
             <div className='paytmcard_content_container'>
                <div className='paytmcard_text'>
                   <div className='paytmcard_text_image'>
                    <img src={paytmcard}></img>
                    </div> 
                    <div className='paytmcard_text_content'>
                    Get up to 3x Reward Points with Paytm SBI 
                    <span style={{color:"#85eefc"}}> Select</span> Card. Get to enjoy our Accelerated Points System. This means up to 3X of points earned with every spend.
                    </div>
                    <div className='paytmcard_button'>
                        <Learnmore />
                    </div>

                </div>
                <div className='paytmcard_image'>
                    <img src={three}></img>
                </div>
            </div>
            </div>
        </div>
    )
}
export default Paytmcard;