import React from "react";
import '../components/Bookandbuy.css'
import {FaChevronRight} from 'react-icons/fa'

const content = {

    data: [

        {
            id: 1,
            url: "https://assetscdn1.paytm.com/images/catalog/view_item/733295/1626259710574.png",
            name1: "Movie",
            name2: "Ticket",
            icon: < FaChevronRight/>

        },
        {
            id: 2,
            url: "https://assetscdn1.paytm.com/images/catalog/view_item/733296/1626259884425.png",
            name1: "Flight",
            name2: "Ticket",
           icon: < FaChevronRight/>
        },
        {
            id: 3,
            url: "https://assetscdn1.paytm.com/images/catalog/view_item/729996/1626260477699.png",
            name1: "Bus",
            name2: "Ticket",
            icon: < FaChevronRight />
        },
        {
            id: 4,
            url: "https://assetscdn1.paytm.com/images/catalog/view_item/729997/1626260495975.png",
            name1: "Train",
            name2: "Ticket",
            icon: <FaChevronRight />
        },
        {
            id: 5,
            url: "https://assetscdn1.paytm.com/images/catalog/view_item/729998/1626259953707.png",
            name1: "Car&",
            name2: "Bikes",
            icon: < FaChevronRight />
        },
        {
            id: 6,
            url: "	https://assetscdn1.paytm.com/images/catalog/view_item/729999/1626259968563.png",
            name1: "International",
            name2:"Flights",
            icon: <FaChevronRight />
        },
        {
            id: 7,
            url: "https://assetscdn1.paytm.com/images/catalog/view_item/730001/1626450848003.png",
            name1: " Invest",
            name2: "inStocks",
            icon: < FaChevronRight />
        }

    ]
}
function Bookandbuy() {
    return (
        <div className="book_background">


            <div className="book_heading">Book & Buy on Paytm.</div>

            <div className="book_icons">
                {
                    content.data.map((item) =>
                        <div className="book_icons_content">
                            <img src={item.url}></img>
                            <div className="book_text">
                                <p>{item.name1}<div className="book_name3_icon">{item.name2}{item.icon}</div></p>
                                <div className="book_paybill"></div>
                            </div>
                        </div>
                    )}
            </div>

        </div>
    )
}
export default Bookandbuy;












































// const bookandbuy = {

//     details: [

//         {
//             id: 1,
//             url: "https://assetscdn1.paytm.com/images/catalog/view_item/733295/1626259710574.png",
//             name1: "Movie",
//             name2: "Tickets",
//             icon: < FiChevronRight/>

//         },
//         {
//             id: 2,
//             url: "https://assetscdn1.paytm.com/images/catalog/view_item/733296/1626259884425.png",
//             name1: "Flight",
//             name2: "Tickets",
//             icon: < FiChevronRight/>
//         },
//         {
//             id: 3,
//             url: "https://assetscdn1.paytm.com/images/catalog/view_item/729996/1626260477699.png",
//             name1: "Bus",
//             name2: "Tickets",
//             icon: < FiChevronRight />
//         },
//         {
//             id: 4,
//             url: "https://assetscdn1.paytm.com/images/catalog/view_item/729997/1626260495975.png",
//             name1: "Train",
//             name2: "Tickets",
//             icon: <FiChevronRight/>
//         },
//         {
//             id: 5,
//             url: "https://assetscdn1.paytm.com/images/catalog/view_item/729998/1626259953707.png",
//             name1: "Car &",
//             name2: "Bikes",
//             icon: <FiChevronRight/>
//         },
//         {
//             id: 6,
//             url: "https://assetscdn1.paytm.com/images/catalog/view_item/729999/1626259968563.png",
//             name1: "International",
//             name2:"Flights",
//             icon: < FiChevronRight/>
//         },
//         {
//             id: 7,
//             url: "https://assetscdn1.paytm.com/images/catalog/view_item/730001/1626450848003.png",
//             name1: "Invest",
//             name2: "in Stocks",
//             icon: < FiChevronRight/>
//         }

//     ]
// }





// function Bookandbuy()
// {
//     return(

//         <div className="bookandbuy_main">

//             <div className="bookandbuy_heading">Book & Buy on Paytm.</div>          
            
//             <div className="bookandbuy_icon_container">
//                 {
//                     bookandbuy.details.map((info) =>
//                          <div className="bookandbuy_icons">
//                           <img src={info.url}></img>
                         
//                        <div className="bookandbuy_icon_text"> 
//                        <p>{info.name1}</p> 
//                        <p className="info_name2_icon">{info.name2}
//                        {info.icon}</p>
                       
//                        </div>
                           
//                 </div>


//                     )}   
//             </div>

//         </div>
//     )
// }

