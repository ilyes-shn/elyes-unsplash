import { Switch } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { useData } from "./context";
import "./Nav.css";
import WbSunnyOutlinedIcon from "@material-ui/icons/WbSunnyOutlined";
import NightsStayOutlinedIcon from "@material-ui/icons/NightsStayOutlined";


const Nav = () => {
  const [checked, setChecked] = useState(false);
  const [dark, dispatch] = useData();
 

  useEffect(() => {
    if (checked) {
      localStorage.setItem('mode', 'dark')
    } else {
      localStorage.setItem('mode', 'light')
    }
  }, [checked]);
  return (
    <div
      className="nav"
      style={{
        backgroundColor: dark.dark ? "rgb(15, 15, 15)" : "white",
        color: dark.dark ? "white" : "black",
      }}
    >
      <div className="text">
        <h2><a href='/' style={{textDecoration: 'none', color: dark.dark ? 'white' : 'black'}}>Elyes</a></h2>
        <code>based on Unsplash</code>
      </div>
      <div className="switch">
        <WbSunnyOutlinedIcon
          style={{
            fontSize: "20px",
            opacity: "0.8",
            color: dark.dark ? "white" : "black",
          }}
        />
        <Switch onChange={(e) => setChecked(e.target.checked)} checked={dark.dark}/>
        <NightsStayOutlinedIcon
          style={{
            fontSize: "20px",
            opacity: "0.8",
            color: dark.dark ? "white" : "black",
          }}
        />
      </div>
    </div>
  );
};

export default Nav;
