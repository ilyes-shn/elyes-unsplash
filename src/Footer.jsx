import React from "react";
import { useData } from "./context";

const Footer = () => {
  const [dark, dispatch] = useData();

  const style = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    width: "100%",
    height: "150px",
    backgroundColor: dark.dark ? "rgb(15, 15, 15)" : "white",
    marginTop: "30px",
    color: dark.dark ? "white" : "black",
    transition: "0.5s ease",
    opacity: "0.7",
    zIndex: "-10",
    textAlign: "center",
  };

  return (
    <div style={style}>
      <div>
        <h4 style={{ lineHeight: "1px" }}>Elyes 2021</h4>
        <h5 style={{ lineHeight: "1px" }}>
          Big thank to Unsplash team for offering the API
        </h5>
      </div>
    </div>
  );
};

export default Footer;
