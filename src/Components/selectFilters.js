import React, { useRef, useState } from "react";

const SelectFilters = ({ handleSearch }) => {
  console.log("SelectFilters");
  const [orient, setorient] = useState("");
  const [color, setColor] = useState("");
  const buttonRefs = {
    red: useRef(null),
    yellow: useRef(null),
    green: useRef(null),
    orange: useRef(null),
    blue: useRef(null),
    purple: useRef(null),
    black: useRef(null),
    white: useRef(null),
  };

  const handleColor = (c) => {
    Object.keys(buttonRefs).forEach((key) => {
      if (buttonRefs[key].current) {
        buttonRefs[key].current.style.opacity = "1";
      }
    });
    if (buttonRefs[c].current) {
      buttonRefs[c].current.style.opacity = "0.2";
    }

    setColor(c);
  };

  const applyFilters = (e) => {
    e.preventDefault();
    if (orient == "" && color == "") {
      alert("Apply atleast one filter");
    } else {
      console.log(color + " " + orient);
      handleSearch(
        color ? `&color=${color}` : "",
        orient ? `&orientation=${orient}` : ""
      );
    }
  };

  return (
    <form onSubmit={applyFilters} className="filters">
      <h2>Filter by color</h2>
      <ul>
        <li>
          <button
            ref={buttonRefs.red}
            type="button"
            onClick={() => {
              handleColor("red");
            }}
          ></button>
        </li>
        <li>
          <button
            ref={buttonRefs.yellow}
            type="button"
            onClick={() => {
              handleColor("yellow");
            }}
          ></button>
        </li>
        <li>
          <button
            ref={buttonRefs.green}
            type="button"
            onClick={() => {
              handleColor("green");
            }}
          ></button>
        </li>
        <li>
          <button
            ref={buttonRefs.orange}
            type="button"
            onClick={() => {
              handleColor("orange");
            }}
          ></button>
        </li>
        <li>
          <button
            ref={buttonRefs.blue}
            type="button"
            onClick={() => {
              handleColor("blue");
            }}
          ></button>
        </li>
        <li>
          <button
            ref={buttonRefs.purple}
            type="button"
            onClick={() => {
              handleColor("purple");
            }}
          ></button>
        </li>
        <li>
          <button
            ref={buttonRefs.black}
            type="button"
            onClick={() => {
              handleColor("black");
            }}
          ></button>
        </li>
        <li>
          <button
            ref={buttonRefs.white}
            type="button"
            onClick={() => {
              handleColor("white");
            }}
          ></button>
        </li>
      </ul>
      <h2>Filter by orientation</h2>
      <div className="orientation">
        <select
          name="select"
          id=""
          placeholder="Orientation"
          value={orient}
          onChange={(e) => {
            setorient(e.target.value);
          }}
        >
          <option value="portrait">Portrait</option>
          <option value="landscape">Landscape</option>
          <option value="squarish">Squarish</option>
        </select>
      </div>
      <div className="apply">
        <button type="submit">Apply Filters</button>
      </div>
    </form>
  );
};

export default SelectFilters;
