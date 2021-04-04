import React from "react";
import "./Modal.css";
import HighlightOffOutlinedIcon from "@material-ui/icons/HighlightOffOutlined";
import { useData } from "./context";
import { motion } from "framer-motion";

const Modal = () => {
  const [data, dispatch] = useData();
  function close() {
    dispatch({
      type: "OPEN",
      data: false,
    });
    dispatch({
      type: "SET_BLUR",
      blur: "none",
    });
  }

  console.log(data.image)
  return (
    <div
      className="modal"
      style={{
        backgroundColor: data.dark
          ? "rgba(0, 0, 0, 0.8)"
          : "rgba(255,255,255,0.6)",
      }}
    >
      <motion.img
        drag
        src={data.image.url}
        alt={data.image.alt}
        initial={{ y: 100 }}
        animate={{ y: 0 }}
      />
      <div className='user'>
      <motion.h2
        style={{ color: data.dark ? "white" : "black" }}
        initial={{ x: 100 }}
        animate={{ x: 0 }}
        transition={{ease: 'easeOut'}}
      >
        {data.image.alt}
      </motion.h2>
      <h5>Photo by <a style={{ color: data.dark ? "white" : "black" }} href={data.image.userURL + '?utm_source=elyes-photos&utm_medium=referral'}>{data.image.userName}</a> on <a style={{ color: data.dark ? "white" : "black" }} href="https://www.unsplash.com/">Unsplash</a></h5>
      </div>
      <div>
        <HighlightOffOutlinedIcon
          onClick={close}
          style={{
            color: data.dark ? "white" : "black",
            position: "fixed",
            fontSize: "40px",
            top: "100px",
            right: "80px",
            opacity: "0.7",
            cursor: "pointer",
          }}
          className='closeBtn'
        />
      </div>
    </div>
  );
};

export default Modal;
