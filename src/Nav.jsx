import { Switch } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { useData } from "./context";
import "./Nav.css";
import WbSunnyOutlinedIcon from "@material-ui/icons/WbSunnyOutlined";
import NightsStayOutlinedIcon from "@material-ui/icons/NightsStayOutlined";


const Nav = () => {
  let mode = localStorage.getItem('mode') === 'dark' ? true : false

  const [checked, setChecked] = useState(mode);
  const [dark, dispatch] = useData();
 

  useEffect(() => {
    if (checked) {
      localStorage.setItem('mode', 'dark')
      dispatch({
        type: "SET_DARK",
        data: checked,
      });
    } else {
      localStorage.setItem('mode', 'light')
      dispatch({
        type: "SET_DARK",
        data: checked,
      });
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
        <Switch onChange={(e) => setChecked(e.target.checked)} defaultChecked={checked}/>
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
