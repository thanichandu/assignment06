import React, { useState } from 'react';
import testi from '../objects/Testinomials';
import Typography from '@mui/material/Typography';
import "../css/testinomials.css";
import Box from '@mui/material/Box';
import StartIcon from '@mui/icons-material/Start';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';




export default function Testinomials() {

    const [testList, setTestList] = useState(testi);

    const handleColorMouseOver = (idValue) => {

        let NewArr = [...testi]
        NewArr.forEach((val) => {
            if (val.id === idValue) {

                val.isColorBlue = true
            }
            else {
                val.isColorBlue = false;
            }
        })
        setTestList(NewArr);
    }
    const handleColorMouseOut = (idValue) => {

        let NewArr1 = [...testi]
        NewArr1.forEach((val) => {

            val.isColorBlue = false

        })
        setTestList(NewArr1);


    }






    return (<div className='testi-container'>
        {
            testList.map((eachObj,index) => (
                <fieldset key={index} onMouseOver={() => { handleColorMouseOver(eachObj.id) }}
                    onMouseOut={() => { handleColorMouseOut(eachObj.id) }}>
                    <legend><img src={eachObj.img} alt={"ok"} /></legend>
                    <div className='margin-setter'>

                        <Typography variant="body2" gutterBottom>
                            {eachObj.desc}
                        </Typography>
                        <Box className="border-bottom-line"></Box>
                        <Box className="arrow-container" color={"blue"}>
                            <StartIcon />
                            <StartIcon />
                            <StartIcon />
                            <StartIcon />
                        </Box>
                        <Box className="username-container">
                            <div className='username-profile'>
                                <Typography variant="h6" gutterBottom>
                                    {eachObj.name}
                                </Typography>
                                <Typography variant="caption" display="block" gutterBottom>
                                    {eachObj.role}
                                </Typography>

                            </div>
                            {
                                (eachObj.icon === "TwitterIcon") ? <TwitterIcon sx={{ color: (eachObj.isColorBlue === true) ? "blue" : "black" }} /> :
                                    <FacebookIcon sx={{ color: (eachObj.isColorBlue === true) ? "blue" : "black" }} />
                            }


                        </Box>



                    </div>
                </fieldset>


            ))
        }

    </div>)
}

