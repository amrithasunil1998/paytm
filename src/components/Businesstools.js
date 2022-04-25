import React from 'react';
import '../components/Businesstools.css'

const businesstoolsarray={

    details:[
        {
            id:1,
            name1:"POS Billing Software",
            name2:"Say Hello to Smart Retail Business Management",
            name3:"Learn More",
            url:"https://assetscdn1.paytm.com/images/catalog/view_item/854033/1626081565192.png",
        },
        {
            id:2,
            name1:"Paytm for Business App",
            name2:"Everything you need to manage your business on your phone",
            name3:"Learn More",
            url:"https://assetscdn1.paytm.com/images/catalog/view_item/854035/1626081071077.png",
        },
        {
            id:3,
            name1:"Advertise on Paytm",
            name2:"Grow your business by advertising on India’s largest mobile business",
            name3:"Learn More",
            url:"https://assetscdn1.paytm.com/images/catalog/view_item/854036/1626342444992.png",
        },
        {
            id:4,
            name1:"Business Khata",
            name2:"Managing Khata made easy",
            name3:"Learn More",
            url:"https://assetscdn1.paytm.com/images/catalog/view_item/854038/1626081814411.png",
        },
    ]
}
function Businesstools()
{
    return(
            <div className='businesstools_main'>
                <div className='businesstools_heading'> Business Tools to help your business grow </div>
                
                <div className='businesstools_card_container'>
                {
                    businesstoolsarray.details.map((item) =>
                        <div className='businesstools_card'>
                              
                                <div className='businesstools_card_image'>
                                    <img src={item.url}></img>
                                </div>

                                <div className='businesstools_card_image_text'>

                                        <div className='businesstools_card_image_text_one' >
                                        {item.name1}
                                        </div>

                                        <div className='businesstools_card_image_text_two'>
                                         {item.name2}
                                        </div>

                                        <div className='businesstools_card_image_text_three'>
                                            {item.name3}
                                        </div>
                                </div>
                        </div>
                 )}
                </div>
                   
           </div>
    )
}
export default Businesstools;