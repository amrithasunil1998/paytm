import React from "react";
import '../common/Appbutton.css'
import {AiFillApple} from 'react-icons/ai'
import {FaGooglePlay} from 'react-icons/fa'

function Appbutton() {
    return (
        <div>
            <div className='download_app'>

                Download Paytm App <p><AiFillApple /> <p style={{ fontSize: "15px" }}><FaGooglePlay /></p></p>
            </div>
        </div>
    )
}
export default Appbutton;