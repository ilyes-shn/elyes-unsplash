import React, { useState, useEffect } from "react";
import { Container, GridList, GridListTile } from "@material-ui/core";
import { global, search } from "./API";
import ArrowBackIosOutlinedIcon from "@material-ui/icons/ArrowBackIosOutlined";
import ArrowForwardIosOutlinedIcon from "@material-ui/icons/ArrowForwardIosOutlined";
import "./Feed.css";
import Modal from "./Modal";
import { useData } from "./context";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";

const Feed = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [open, dispatch] = useData();
  const [value, setValue] = useState("");
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    if (keyword !== "") {
      async function dataSearch() {
        const data = await search(page, keyword);
        setData(data.results);
      }
      dataSearch();
    } else {
      async function data() {
        const data = await global(page);
        setData(data);
      }
      data();
    }
  }, [page, keyword]);

  function minus() {
    let num = page;
    if (num > 1) {
      num -= 1;
      setPage(num);
    } else {
      num = 1;
      setPage(1);
    }
  }

  function plus() {
    let num = page;
    num += 1;
    setPage(num);
  }

  function openModal(image) {
    dispatch({
      type: "SET_DATA",
      payload: {
        url: image.urls.regular,
        alt: image.alt_description,
      },
    });

    dispatch({
      type: "SET_BLUR",
      blur: "blur(5px)",
    });

    dispatch({
      type: "OPEN",
      data: true,
    });
  }

  
  return (
    <div style={{ minHeight: "60vh", scrollBehavior: "smooth" }}>
      <div
        className="search"
        style={{
          backgroundColor: open.dark ? "rgb(15, 15, 15)" : "white",
          color: open.dark ? "white" : "black",
          transition: "0.5s ease",
        }}
      >
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="What are you thinking about !!"
          style={{ color: open.dark ? "white" : "black" }}
        />
        <SearchOutlinedIcon
          onClick={() => setKeyword(value)}
          style={{ cursor: "pointer" }}
        />
      </div>
      <Container maxWidth="lg" style={{ filter: open.blur }}>
        <GridList cellHeight={260} cols={4}>
          {data.map((image) => {
            return (
              <GridListTile
                key={Math.random()}
                onClick={() => openModal(image)}
              >
                <img src={image.urls.regular} alt={image.alt_description} />
              </GridListTile>
            );
          })}
          {data.length == 0 && (
            <h3
              style={{
                opacity: "0.8",
                width: "100%",
                textAlign: "center",
                color: open.dark ? "white" : "dark",
              }}
            >
              We found nothing &#128553; !!
            </h3>
          )}
        </GridList>
        <div className="buttons">
          <h2
            onClick={minus}
            style={{
              backgroundColor: open.dark ? "rgb(15,15,15)" : "white",
              color: open.dark ? "white" : "black",
              transition: "0.5s ease",
            }}
          >
            <ArrowBackIosOutlinedIcon style={{ opacity: 0.8 }} />
          </h2>
          <h2
            onClick={plus}
            style={{
              backgroundColor: open.dark ? "rgb(15,15,15)" : "white",
              color: open.dark ? "white" : "black",
              transition: "0.5s ease",
            }}
          >
            <ArrowForwardIosOutlinedIcon style={{ opacity: 0.8 }} />
          </h2>
        </div>
      </Container>
      {open.open && <Modal />}
    </div>
  );
};

export default Feed;
