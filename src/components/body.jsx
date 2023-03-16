import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import mobile4 from "../Assets/mobile-4.svg"
import React from 'react'
import "../css/body.css"
import Productanalysis from './productAnalysis';


export default function Body() {

    return (
        <>

            <div className='container-4'>
                <div className='container-leftside'>
                    <div className='app-features-heading'>
                        <h1>App Features</h1>
                        <Typography variant="body2" gutterBottom className='myTypography'>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                            nonumy eirmod tempor invidunt ut labore et
                            dolore magna aliquyam erat, sed diam voluptua.

                        </Typography>
                    </div>
                    <div className='container-subpart-2'>
                        <Button variant="contained" sx={{ color: "black", backgroundColor: 'white' }}>community</Button>
                        <Button variant="contained" sx={{ color: "black", backgroundColor: 'white' }}>Self Service</Button>
                        <Button variant="contained" sx={{ color: "black", backgroundColor: 'white' }}>Team Work</Button>
                    </div>
                    <Productanalysis className="demo" mr={"9%"} ml={"0%"} mt={"10%"} listMaxWidth={"63%"} clickMaxWidth={"27%"} />


                    
                </div>
                <div className='container-rightside'>
                    <img src={mobile4} alt="" />

                </div>

            </div>
            <div>

            </div>

        </>
    )







}
