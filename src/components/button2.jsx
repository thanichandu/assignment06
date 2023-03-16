import React from 'react'
import "../css/body.css"
import Button from '@mui/material/Button';
import "../css/body.css";
import AndroidIcon from '@mui/icons-material/Android';
import AppleIcon from '@mui/icons-material/Apple';



export default function Button2({justify,margintop,width}) {
    return (
        <div className='playstore-buttons' style={{justifyContent:justify,marginTop:margintop,width:width}}>
        <Button variant="contained" startIcon={<AndroidIcon />} >
            Play Store
        </Button>
        <Button variant="contained" startIcon={<AppleIcon />}>
            App Store
        </Button>

    </div>
    )
}
