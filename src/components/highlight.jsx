import React from 'react'
import "../css/body.css"
import "../css/highlight.css"
import Button2 from "./button2";
import { Box } from '@mui/system';

export default function Highlight({ highlight, isCheck }) {
    return (
        <div className='service-container myTypography'>
            {

                (isCheck === true) && <Box className="sideCircles"></Box>

            }
                {
                   highlight.map((eachObj, index) => (
                    <div key={index} className='service-container-centerPart'>
                      <div className='h1-div'>
                        <h1>{eachObj.head}</h1>
                      </div>
                      <p className='service-container-para'>{eachObj.para}</p>
                    </div>
                  ))
                }
                    {

                        (isCheck === true) && <Button2 justify={"center"} margintop={"4%"} width={"50%"} />
                    }

            {

                (isCheck === true) && <Box className="sideCircles"></Box>

            }
        </div>
    )
}
