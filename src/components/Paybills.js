import React from "react";
import '../components/Paybills.css'
import { FaChevronRight } from 'react-icons/fa';


const content = {

    data: [

        {
            id: 1,
            url: "https://assetscdn1.paytm.com/images/catalog/view_item/733299/1626251017535.png",
            name1: "Recharge ",
            name2: "Prepaid",
            name3: " Mobile",
            icon: < FaChevronRight/>

        },
        {
            id: 2,
            url: "https://assetscdn1.paytm.com/images/catalog/view_item/733300/1626778824903.png",
            name1: "Pay  ",
            name2: "Rent",
            name3: " Payment",

            icon: < FaChevronRight/>
        },
        {
            id: 3,
            url: "https://assetscdn1.paytm.com/images/catalog/view_item/733308/1626251043534.png",
            name1: "Pay ",
            name2: " Electricity",
            name3: " Bill",
            icon: < FaChevronRight />
        },
        {
            id: 4,
            url: "https://assetscdn1.paytm.com/images/catalog/view_item/733311/1626251101045.png",
            name1: "Recharge ",
            name2: "DTH",
            name3: " Connection",
            icon: <FaChevronRight />
        },
        {
            id: 5,
            url: "https://assetscdn1.paytm.com/images/catalog/view_item/733307/1626251127863.png",
            name1: "Book  ",
            name2: "Gas",
            name3: " Cylinder",
            icon: < FaChevronRight />
        },
        {
            id: 6,
            url: "	https://assetscdn1.paytm.com/images/catalog/view_item/733304/1627454209116.png",
            name1: "Pay",
            name2:" Credit",
            name3: " Cardbill",
            icon: <FaChevronRight />
        },
        {
            id: 7,
            url: "https://assetscdn1.paytm.com/images/catalog/view_item/757701/1626268580682.png",
            name1: "All  ",
            name2: "Payment",
            name3: " Services",
            icon: < FaChevronRight />
        }

    ]
}
function Paybills() {
    return (
        <div className="paybills_background">


            <div className="paybills_heading">Recharge & Pay Bills on Paytm.</div>

            <div className="paybill_icons">
                {
                    content.data.map((item) =>
                        <div className="paybill_icons_content">
                            <img src={item.url}></img>
                            <div className="icon_text">
                                <p>{item.name1}{item.name2}<div className="name3_icon">{item.name3}{item.icon}</div></p>
                                <div className="icon_paybill"></div>
                            </div>
                        </div>
                    )}
            </div>

        </div>
    )
}
export default Paybills;