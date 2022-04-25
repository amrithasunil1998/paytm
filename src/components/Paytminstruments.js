import React from 'react';
import '../components/Paytminstruments.css'

import Appbutton from '../common/Appbutton';
import Learnmore from '../common/Learnmore';
const paytminstruments = {

    details: [


        {
            id: 1,
            url2: "https://assetscdn1.paytm.com/images/catalog/view/307185/1617861564011.png",
            name1: "Paytm Wallet",
            name2: "The Fastest Way to Pay In-store & Online.",
            name3: "Load up your Paytm Wallet for free and make payments in a jiffy at over 21 million stores, websites and apps.",
            button:<Appbutton />,
            url: "https://assetscdn1.paytm.com/images/catalog/view_item/728701/1618577020961.png",
        },
        {
            id: 2,
            url2: "https://assetscdn1.paytm.com/images/catalog/view/307186/1615957674521.png",
            name1: "UPI Money Transfer",
            name2: "Pay anyone directly from your bank account.",
            name3: "Pay anyone, everywhere. Make contactless & secure payments in-stores or online using Paytm Wallet or Directly from your Bank Account. Plus, send & receive money from anyone.",
            button:<Appbutton />,
            url: "https://assetscdn1.paytm.com/images/catalog/view_item/728702/1626342071104.png",
        },
        {
            id: 3,
            name2: "Want it ? No more waiting for it.",
            name3: "With Paytm Postpaid, your wishlist doesn't have to be on the waitlist. Shop for the things you want today and pay for them next month.",
            url2: "https://assetscdn1.paytm.com/images/catalog/view/307191/1613622537678.png",
            button2:<Learnmore />,
            url: "https://assetscdn1.paytm.com/images/catalog/view_item/850764/1626077030984.png",

        }
    ]



}
function Paytminstruments() {
    return (
        <div className='instruments_main'>
            <div className='instruments_heading'>Paytm Payment Instruments</div>

           
                {
                    paytminstruments.details.map((item) =>
                        <div className='instruments_card'>
                            <div className='instruments_card_innerportion'>
                                <div className='left_content'>
                                    <div className='image_left'>
                                        <img src={item.url2}></img><p>{item.name1}</p>
                                    </div>
                                    <div className='left_content_sub'>
                                        <div className='name2'>
                                            <p>{item.name2}</p>
                                        </div>
                                        <div className='name3'>
                                            {item.name3}
                                        </div>
                                        <div className='appbutton'>
                                            {item.button}</div>
                                            <div className='learnbutton'>
                                            {item.button2}</div>
                                       </div>
                                      
                                      
                                       
                                </div>
                                <div className='image_right'>
                                    <img src={item.url}></img>
                                </div>

                            </div>

                        </div>
                    )}
            
        </div>




    )
}
export default Paytminstruments;