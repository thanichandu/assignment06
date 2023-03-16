import React from 'react'
import "../css/pricing.css"
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import pricing from '../objects/pricing';
import DoneIcon from '@mui/icons-material/Done';
import Button from '@mui/material/Button';




export default function Pricing() {
    return (
        <>
            <CssBaseline />
            <Container maxWidth="sm" className='price-container'  id="PriceMain">
                <Container className="price-container-box">
                    {
                        pricing.map((eachObj,index) => (
                            <Box className="pricing" key={index}>
                                <Box className="pricing-upBox">
                                    <Box>   
                                        <img src={eachObj.img} alt="" />
                                    </Box>
                                    <Box className="pricing-upBox-rightpart">
                                        <Typography variant="body1" gutterBottom className='myTypography-heading'>
                                            {eachObj.heading}

                                        </Typography>
                                        <Box className="pricing-upBox-rightpart-downpart">

                                            <Typography variant="body1" gutterBottom className='pricing-upBox-rightpart-downpart'>
                                                $
                                            </Typography>
                                                {<Typography className='myTypography-heading' variant="h4" gutterBottom>
                                                    {eachObj.price}

                                                </Typography>}
                                                <Typography>
                                                /mo
                                                </Typography>

                                        </Box>
                                    </Box>


                                </Box>
                                <Box className="pricing-middleBox">

                                </Box>
                                <Box className="pricing-downBox">
                                    <ul>
                                        <li><div className='list-containerPricing' >
                                            <DoneIcon className='done-icon' />
                                            <Typography variant="body1" gutterBottom className='margin-list'>

                                                {eachObj.list1}
                                            </Typography>
                                        </div></li>
                                        <li><div className='list-containerPricing' >
                                            <DoneIcon className='done-icon' />
                                            <Typography variant="body1" gutterBottom className='margin-list'>

                                                {eachObj.list2}
                                            </Typography>
                                        </div></li>
                                        <li><div className='list-containerPricing' >
                                            <DoneIcon className='done-icon' />
                                            <Typography variant="body1" gutterBottom className='margin-list'>

                                                {eachObj.list3}
                                            </Typography>
                                        </div></li>
                                        <li><div className='list-containerPricing' >
                                            <DoneIcon className='done-icon' />
                                            <Typography variant="body1" gutterBottom className='margin-list'>

                                                {eachObj.list4}
                                            </Typography>
                                        </div></li>
                                        <li><div className='list-containerPricing' >
                                            <DoneIcon className='done-icon' />
                                            <Typography variant="body1" gutterBottom className='margin-list'>

                                                {eachObj.list5}
                                            </Typography>
                                        </div></li>

                                    </ul>


                                </Box>
                                <Box className="margin-button">
                                    <Button size='medium' variant="contained" className='pricing-button'>Buy Now</Button>
                                </Box>
                            </Box>
                        ))
                    }



                </Container>
            </Container>
        </>
    )
}

                                       