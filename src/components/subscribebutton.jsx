import * as React from 'react';
  import Button from '@mui/material/Button';
  import Stack from '@mui/material/Stack';
  
  export default function Subscribe() {
    return (
      <Stack direction="row" spacing={2}>
        <Button variant="contained" sx={{backgroundColor:"#3f51b5",color:"white"}}>Subscribe</Button>
        
      </Stack>
    );
  }