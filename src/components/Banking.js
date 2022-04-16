import React from 'react';
import '../components/Banking.css'
import imageone from '../images/bankingimages/imageone.png'


const banking = {
      
    cards:
    [
        {
            id:1,
            name:"Unlimited Cashback Every time",
            name2:"Paytm HDFC Bank Select Credit Card. A card with assured Cashback and incredible offers.",
            url:imageone,
            url2:"https://assetscdn1.paytm.com/images/catalog/view_item/853975/1640241561388.png"

        },
        {
            id:2,
            name:"India's Most Sincere Credit Card",
            name2:"Paytm SBI Card SELECT - With Intelligent Features & Great Rewards that Never Expire",
            url:"https://assetscdn1.paytm.com/images/catalog/view_item/853976/1640242163727.png",
            url2:"https://assetscdn1.paytm.com/images/catalog/view_item/853976/1626079147084.png"
        }


    ]
}

function Banking()
{
    return(

        <div className='banking_main'>
            {
                banking.cards.map((item) =>
                <div className='banking_content'>
                    
                <div className='banking_content_imageone'>
                   <img src={item.url}></img>
                </div>
               <div className='banking_content_heading'>
                            {item.name}

                </div>
                <div className='banking_content_heading_content'>
                            {item.name2}
                </div>
                <div className='banking_content_imagetwo'>

                  <img src ={item.url2}></img>
                </div>
                          
                </div>
                 )}
        </div>
    )
}
export default Banking;