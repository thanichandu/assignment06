import React from 'react'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import "../css/footer.css"


export default function Footerlist({arr}) {
  return (
    <>
    {
        arr.map((eachObj,index) => (
          <Box key={index} className="footer-container-subContainer1">
            <Typography variant="h6" gutterBottom color={"white"}>
              {eachObj.heading}
            </Typography>
            <ul>
              
              <li><Typography variant="body2" gutterBottom color={"white"}>
                {eachObj.list1}
              </Typography></li>
              <li><Typography variant="body2" gutterBottom color={"white"}>
                {eachObj.list2}
              </Typography></li>
              <li><Typography variant="body2" gutterBottom color={"white"}>
                {eachObj.list3}
              </Typography></li>
              <li><Typography variant="body2" gutterBottom color={"white"}>
                {eachObj.list4}
              </Typography></li>
              <li><Typography variant="body2" gutterBottom color={"white"}>
                {eachObj.list5}
              </Typography></li>
            </ul>


          </Box>

        ))
      }
    </>
  )
}
