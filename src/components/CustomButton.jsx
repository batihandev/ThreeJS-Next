import React from "react";
import state from "../store";
import { useSnapshot } from "valtio";

const CustomButton = ({ type, title, customStyles, handleClick }) => {
  const snap = useSnapshot(state);
  const generateStyle = (type) => {
    switch (type) {
      case "filled":
        return {
          backgroundColor: snap.color,
          color: "#fff",
        };
      case "secondary":
        return {
          backgroundColor: "#fff",
          color: "#00B87C",
        };
      case "tertiary":
        return {
          backgroundColor: "#fff",
          color: "#00B87C",
          border: "1px solid #00B87C",
        };
      default:
        return {
          backgroundColor: "#00B87C",
          color: "#fff",
        };
    }
  };

  return (
    <button
      className={`flex-1 rounded-md px-2 py-1.5 ${customStyles}`}
      style={generateStyle(type)}
      onClick={handleClick}
    >
      {title}
    </button>
  );
};

export default CustomButton;
