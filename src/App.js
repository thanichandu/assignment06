// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import React, { useState } from 'react';
import Header from "./components/Header"
import Body from './components/body';
import Home from './components/Home';
import Works from './components/Works';
import Service from './components/Service';
import Pricing from './components/pricing';
import { highlight1, highlight2, highlight3 } from './objects/highlight';
import Highlight from './components/highlight';
import Testinomials from './components/testinomials';
import Footer from './components/Footer';
import { themes } from './context/themeContext';
import ThemeContext from './context/themeContext';
import "./css/body.css";
import BasicSwitches from './components/switch';
// import { useEffect } from 'react';




function Website() {

  const [isWhite, setColor] = useState(true);
  const [slideValueRed, setSlideValueRed] = useState(255);
  const [slideValueGreen, setSlideValueGreen] = useState(255);
  const [slideValueBlue, setSlideValueBlue] = useState(255);
  // const [redTimer,setRedTimer] = useState(0)
  // const [greenTimer,setGreenTimer] = useState(0)
  // const [blueTimer,setBlueTimer] = useState(0)


  // useEffect(() => {
  //   const Redinterval = setInterval(() => {
  //     setRedTimer(redTimer => redTimer === 240 ? 0  : redTimer + 20)

  //   }, 1000);
  //   const Greeninterval = setInterval(() => {
  //     setGreenTimer(greenTimer => greenTimer === 240 ? 0  : greenTimer + 20)
  //   }, 3000);
  //   const Blueinterval = setInterval(() => {
  //     setBlueTimer(blueTimer => blueTimer === 240 ? 0  : blueTimer + 20)
  //   }, 5000);

  //   return () => {
  //     clearInterval(Redinterval);
  //     clearInterval(Greeninterval);
  //     clearInterval(Blueinterval);
  //   };

  // }, []);
  


   

  function provideTheme(valueRed, valueGreen, valueBlue) {
    // let fontValue
    // if(value<=200 && value >= 100) fontValue = 0
    // else fontValue = 255 - value
    // return {
    //   "backgroundColor" : `rgb(${valueRed},${valueGreen},${valueBlue})`,
    //   "color":`rgb(${255 - valueRed},${255 - valueGreen},${255 - valueBlue})`
    // }
    return {
      "backgroundColor": `rgb(${valueRed},${valueGreen},${valueBlue})`,
      "color": `rgb(${255 - valueRed},${255 - valueGreen},${255 - valueBlue})`
    }

  }

  return (
    <ThemeContext.Provider value={themes.light}>
      <div
        //style={(isWhite)?(themes.light):(themes.dark)}
        style={provideTheme(slideValueRed, slideValueGreen, slideValueBlue)
        }
      >
        {/* <BasicSwitches isWhite={isWhite} setColor={setColor}
     setSlideValueRed={setSlideValueRed} setSlideValueGreen={setSlideValueGreen}
     setSlideValueBlue={setSlideValueBlue} redTimer={redTimer}
      greenTimer={greenTimer} blueTimer={blueTimer}/> */}
        <BasicSwitches isWhite={isWhite} setColor={setColor}
          setSlideValueRed={setSlideValueRed} setSlideValueGreen={setSlideValueGreen}
          setSlideValueBlue={setSlideValueBlue} />
        <Header isWhite={isWhite} />
        <Home />
        <Works />
        <Service />
        <Body />
        <Highlight highlight={highlight1} isCheck={false} />
        <Pricing />
        <Highlight highlight={highlight2} isCheck={false} />
        <Testinomials />
        <Highlight highlight={highlight3} isCheck={true} />
        <Footer />
      </div>
    </ThemeContext.Provider>



  )

}


export default Website;
