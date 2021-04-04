import { createContext, useContext, useReducer } from "react";

const Context = createContext();

const mode = localStorage.getItem("mode");

let dark;

if (mode === "dark") {
  dark = true;
} else {
  dark = false;
}

const init = {
  open: false,
  image: {
    url: null,
    alt: null,
  },
  blur: "none",
  dark: dark,
};

const Reducer = (state, action) => {
  switch (action.type) {
    case "OPEN":
      return {
        ...state,
        open: action.data,
      };
    case "SET_DATA":
      return {
        ...state,
        image: action.payload,
      };
    case "SET_BLUR":
      return {
        ...state,
        blur: action.blur,
      };
    case "SET_DARK":
      return {
        ...state,
        dark: action.data,
      };
    default:
      return state;
  }
};

export const Provider = ({ children }) => {
  return (
    <Context.Provider value={useReducer(Reducer, init)}>
      {children}
    </Context.Provider>
  );
};

export const useData = () => useContext(Context);
