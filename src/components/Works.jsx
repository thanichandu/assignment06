import React from 'react'
import Typography from '@mui/material/Typography';
import mobile2 from "../Assets/mobile-2.svg"
import "../css/body.css"
import featureCard from '../objects/featurecards';




export default function Works() {
    return (
        <div className='app-features-container' id='WorkMain'>

            <div className='app-features'>

                <div className='app-features-heading'>
                    <h1>App Features</h1>
                    <Typography variant="body2" gutterBottom className='myTypography'>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor

                    </Typography>
                </div>
                <div className='feature-cards'>
                    {
                        featureCard.map((eachObj,index) => (
                            <div key={index} className='feature-cards-eachbox'>
                                <img alt="desc" src={eachObj.img} />
                                <Typography variant="subtitle1" gutterBottom>
                                    {eachObj.heading}
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    {eachObj.para}
                                </Typography>

                            </div>
                        ))
                    }

                </div>
            </div>
            <div className='app-feature-image'>
                <img src={mobile2} alt="" />
            </div>
        </div>

    )
}
