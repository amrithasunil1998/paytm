import React from 'react';
import '../components/Paymentbank.css'
import {FiChevronRight} from 'react-icons/fi'

const paymentbankarray={


           info:[
               {
                   id:1,
                   heading:"Financial Services by Paytm",
                   url2:"https://assetscdn1.paytm.com/images/catalog/view/307193/1617696576778.png",
                   name1:"India's most sincere bank.",
                   name2:"Paytm Payments Bank offers secure, transparent and risk-free banking at your fingertips. With instant account opening, virtual debit card and zero balance requirements, experience the future of banking today.",
                   url:"https://assetscdn1.paytm.com/images/catalog/view_item/728826/1626076427497.png",
                   
               }
           ]

}

function Paymentbank()
{
    return(
        <div className='paymentbank_main'>
              {
                  paymentbankarray.info.map((contents) =>
            <div className='paymentbank_card'>

                <div className='paymentbank_heading'>
                    {contents.heading}
                </div>
                <div className='paymentbank_content_container'>
    
                            <div className='paymentbank_leftside_content'>

                                    <div className='leftside_content_one'>
                                      <img src={contents.url2}></img>
                                    </div>
                                    <div className='leftside_content_two'>
                                        {contents.name1}
                                    </div>
                                    <div className='leftside_content_three'>
                                        {contents.name2}
                                    </div>
                                    <div className='paymentbank_button'>
                                       <p className='paymentbank_button_one'> Learn More </p>
                                       <p className='payment_bank_button_two'></p>
                                    </div>
                            </div>
                            <div className='paymentbank_rightside_content'>
                                <img src={contents.url}></img>
                            </div>
                </div>

            </div>
                  )}
        </div>
    )
}
export default Paymentbank;