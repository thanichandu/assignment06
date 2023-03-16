import * as React from 'react';
import Switch from '@mui/material/Switch';
// import ColorSlider from './slider';
import "../css/body.css";


const label = { inputProps: { 'aria-label': 'Switch demo' } };

export default function BasicSwitches({ isWhite, setColor, setSlideValueRed,
   setSlideValueGreen, setSlideValueBlue }) {


  const handleClick = (event) => {

    (isWhite) ? (setColor(false)) : (setColor(true))
    console.log("handleClick function ", isWhite);

  }
  const handleSlideRed = (event) => {

    const val = event.target.value;
    setSlideValueRed(val);

  }
  const handleSlideGreen = (event) => {

    const val = event.target.value;
    setSlideValueGreen(val);
  }
  const handleSlideBlue = (event) => {

    const val = event.target.value;
    setSlideValueBlue(val);
  }
  return (
    <div className='slider-switch' >
      <Switch {...label} onChange={handleClick} />
      


      {/* <input type="range" value={redTimer} max={255} onChange={handleSlideRed} />
      <input type="range" value={greenTimer} max={255} onChange={handleSlideGreen} />
      <input type="range" value={blueTimer} max={255} onChange={handleSlideBlue} /> */}
      <input type="range"  max={255} onChange={handleSlideRed} />
      <input type="range"  max={255} onChange={handleSlideGreen} />
      <input type="range" max={255} onChange={handleSlideBlue} />
    </div>
  );
}
