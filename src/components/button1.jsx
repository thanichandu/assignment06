import React from 'react'
import "../css/body.css"
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import "../css/button1.css"


export default function Button1() {
    return (
        <Box sx={{ '& button': { m: 1 }, display: { xs: 'none', md: 'flex' } }} >

            <Button variant="outlined" size="medium" className='button-container1'>
                login
            </Button>

            <Button variant="outlined" size="medium" className='button-container2'>
                signup
            </Button>


        </Box>
    )
}
