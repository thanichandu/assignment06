import mobile3 from "../Assets/mobile-3.svg"
import React from 'react'
import "../css/body.css"
import "../css/service.css"
import Productanalysis from './productAnalysis';


export default function Service() {
    return (
        <div className='analysis-container' id="ServiceMain">
            <div className='analysis-image'>
                <img src={mobile3} alt="" />

            </div>
            <div className="product-analysis-container">
                <Productanalysis mr={"14%"} ml={"10%"} mt={"0%"} listMaxWidth={"70%"} clickMaxWidth={"30%"} />

            </div>

        </div>
    )
}
