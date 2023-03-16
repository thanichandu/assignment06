import React from 'react';
import { company, Useful } from '../objects/footer';
import "../css/footer.css"
import Box from '@mui/material/Box';
// import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import Footerlist from './footerlist';
import Subscribe from './subscribebutton';
import MailOutlineIcon from '@mui/icons-material/MailOutline';





export default function Footer() {
  return ( 
    <Box className='footer-container' id="FootersMain">
      <Box className="footer-inner-conatiner">

        <Box className="footer-container-subContainer1">
          <Typography variant="h6" gutterBottom color={"white"}>
            About Us
          </Typography>
          <Typography variant="body2" gutterBottom color={"white"}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Officiis perferendis rem, aut aliquam neque nam? dolor sit amet,
            consectetur adipisicing elit consectetur adipisicing.
          </Typography>
          <Box className="socialMedia-container">
            <FacebookIcon sx={{ color: "white" }} />
            <InstagramIcon sx={{ color: "white" }} />
            <LinkedInIcon sx={{ color: "white" }} />
            <TwitterIcon sx={{ color: "white" }} />

          </Box>



        </Box>
        <Footerlist arr={company} />
        <Footerlist arr={Useful} />
        <Box className="footer-container-subContainer1">
          <Typography variant="h6" gutterBottom color={"white"}>
            Newsletter
          </Typography>
          <Typography variant="body2" gutterBottom color={"white"}>
            Sign Up for the latest news
          </Typography>
          <Box className="input-container">

            <MailOutlineIcon sx={{color:"white"}} />
            <input placeholder='Your Email' />
          </Box>
          <Subscribe />


        </Box>
      </Box>


    </Box>


  )
}
