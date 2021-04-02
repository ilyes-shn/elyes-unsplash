import React from "react";
import "./App.css";
import Feed from "./Feed";
import Nav from "./Nav";
import Footer from "./Footer";
import { useData } from "./context";

function App() {
  const [dark, dispatch] = useData();

  return (
    <div
      style={{
        backgroundColor: dark.dark ? "rgb(25,25,25)" : "rgb(230, 230, 230)",
        transition: '0.5s ease'
      }}
    >
      <Nav />
      <Feed />
      <Footer />
    </div>
  );
}

export default App;
