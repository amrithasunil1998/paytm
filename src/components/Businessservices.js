import React from "react";
import '../components/Businessservices.css'
import Learnmore from '../common/Learnmore'


const businessarray={

    details:[
        {
            id:1,
            name1:"Accept payments online with ease",
            name2:"Grow your business with the payment gateway that powers India’s largest brands and even the Paytm App",
            url:"https://assetscdn1.paytm.com/images/catalog/view_item/853877/1626077000254.png ",
            
           
        },
        {
            id:1,
            name1:"In-shop payments powered by Paytm.",
            name2:"Millions of small & big businesses use Paytm to accept payments anywhere any time with a wide range of solutions for all kind of merchants",
            url:"https://assetscdn1.paytm.com/images/catalog/view_item/853880/1626077064940.png",
           
        }

    ]

}



function Businessservices()
{

    return(
        <div className="businessservices_main">
            <div className="businessservices_heading">Business Services by Paytm</div>
            {
                businessarray.details.map((item) =>
                <div className="businessservices_card">
                        <div className="businessservices_card_content">

                            <div className="businessservices_card_left">
                                    <div className="businessservices_card_left_one">
                                      
                                        {item.name1}
                                    </div>
                                    <div className="businessservices_card_left_two">
                                        {item.name2}
                                    </div>
                                    <div className="businessservices_card_left_three">
                                        <Learnmore />
                                    </div>
                            </div>
                            <div className="businessservices_card_right">
                            <div className="businessservices_card_right_one">
                                        <img src={item.url}></img>
                                        
                                    </div>
                              

                            </div>
                        </div>
                </div>
           )}       
        </div>
    )
}

export default Businessservices;