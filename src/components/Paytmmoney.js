import React from "react";
import '../components/Paytmmoney.css'
import Learnmore from "../common/Learnmore";


const paytmmoneyarray={

    details:[
        {
            id:1,
            
            url:"https://assetscdn1.paytm.com/images/catalog/view_item/788781/1626077377376.png",
            url2:"https://assetscdn1.paytm.com/images/catalog/view/308774/1617696247991.png",
            name1:"Build Long-term Wealth & Achieve your Goals.",
            name2:"Investing on Paytm Money is transparent, low-cost and commission-free. Buy stocks & mutual funds that can help you create wealth & realise your dreams.",

        },
        {
            id:2,
            url:"https://assetscdn1.paytm.com/images/catalog/view_item/788790/1626076605479.png",
            url2:"https://assetscdn1.paytm.com/images/catalog/view/308775/1617870866597.png ",
            name1:"Insurance made easy.",
            name2:"Buying insurance does not have to be tedious, time-consuming & confusing. Paytm Insurance removes the worry of getting insured by making it simple, convenient & easy-to-understand.",
        },
        {
             id:3,
            url:"https://assetscdn1.paytm.com/images/catalog/view_item/850765/1626076435155.png",
            url2:"https://assetscdn1.paytm.com/images/catalog/view/308777/1617695287770.png",
            name1:"Get a Personal Loan in 2 Minutes.",
            name2:"Paytm offers India's quickest multi-purpose, hassle-free loan. It is 100% digital, transparent and paperless.",
        }
    ]
}

function Paytmmoney()
{
       
  
    return(
        <div className="paytmmoney_main">
            
            {
                paytmmoneyarray.details.map((item) =>
               
               
            <div className="paytmmoney_card">
            
                
                    
                <div className="paytmmoney_card_left">
                    <img src={item.url}></img>
                </div>
                <div className="paytmmoney_card_right">

                    <div className="paytmmoney_card_right_one">
                    <img src={item.url2}></img>
                    </div>
                    <div className="paytmmoney_card_right_two">
                        {item.name1}
                    </div>
                    <div className="paytmmoney_card_right_three">
                        {item.name2}
                    </div>
                    <div className="paytmmoney_card_right_four">
                        <Learnmore />
                    </div>
               
               
                </div>


            </div>
                )}
        </div>
    )

}
export default Paytmmoney;