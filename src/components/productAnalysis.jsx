import Typography from '@mui/material/Typography';
import React from 'react'
import "../css/body.css"
import DoneIcon from '@mui/icons-material/Done';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Box } from '@mui/system';
import "../css/service.css"



export default function Productanalysis({ ml, mt,listMaxWidth,clickMaxWidth, mr }) {
    return (
        <div className='analysis-desc' style={{ marginLeft: ml, marginTop: mt,marginRight:mr }} >
            <h1>Great Product Analytics</h1>

            <Typography variant="body2" gutterBottom className='myTypography myTypography-para'>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                sed diam nonumy eirmod tempor invidunt ut labore
                et dolore magna aliquyam erat, sed diam voluptua.
                At vero eos et accusam et justo duo dolores et ea rebum.

            </Typography>
            <ul className='myTypography'>

                <li>
                    <div>
                        <Typography variant="body2" gutterBottom sx={{maxWidth:listMaxWidth}} className='myTypography list-container'>
                            <DoneIcon className='done-icon' />
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                            sed
                        </Typography>
                    </div>
                </li>
                <li>
                    <div>
                        <Typography variant="body2" gutterBottom sx={{maxWidth:listMaxWidth}} className='myTypography  list-container'>
                            <DoneIcon className='done-icon' />
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                            sed
                        </Typography>
                    </div>
                </li>
                <li>
                    <div>
                        <Typography variant="body2" gutterBottom sx={{maxWidth:listMaxWidth}} className='myTypography list-container'>
                            <DoneIcon className='done-icon' />
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                            sed
                        </Typography>
                    </div>
                </li>

            </ul>
            <Box className="service-clickContainer">
                <Typography variant="subtitle2" sx={{maxWidth:clickMaxWidth}} gutterBottom  className='click-container myTypography' color={"#3f51b5"}>
                    CLICK TO VIEW MORE<ArrowForwardIosIcon />
                </Typography>

            </Box>


        </div>

    )
}
