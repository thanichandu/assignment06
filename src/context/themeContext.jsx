import React from "react";

export const themes = {
  dark:{
    backgroundColor:"black",
    color:"white"
  },
  light:{
    
    backgroundColor:"white",
    color:"black"
  },
  headerLight:{
    backgroundColor:"#011c3A",
    color:"white"

  }
}
const ThemeContext = React.createContext(themes.light);

export default ThemeContext;