import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import mobile1 from "../Assets/mobile-1.svg"
import React from 'react'
import "../css/body.css"
import Button2 from './button2';
import "../css/Home.css";

export default function Home() {
    return (

        <div className='body-container' id='HomeMain'>

            {/* <Box sx={{ display: { xs: 'flex', md: 'flex', position: "relative" } }}
                display="flex" flexBasis={"90%"} > */}
            <img src={mobile1} alt="mobile2" />
            <div className="home-right-container">

                <div className='app-description'>

                    <Typography variant="h5" gutterBottom color={"#3f51b5"}>
                        Evalynn Music
                    </Typography>
                    <h1>Best Music App 2020</h1>

                    <Typography variant="body2" gutterBottom className='myTypography'>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et dolore magna

                    </Typography>
                    <Button variant="outlined" size="medium" className='app-desc-button'>
                        CLICK TO WATCH A VIDEO
                    </Button>
                    <Button2 justify={"flex-start"} margintop={"15%"} width={"70%"} />

                </div>
            </div>

        </div>

    )
}
