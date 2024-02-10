import React, { useEffect, useState } from "react";

const Hero = () => {
  const [color, setColor] = useState(localStorage.getItem("color"));

  const clickHandler = () => {
    if (color === "true") {
      localStorage.setItem("color", "false");
      setColor("false");
      console.log("abc");
    } else if (color === "false") {
      localStorage.setItem("color", "true");
      setColor("true");
    }
  };

  return (
    <div>
      <p
        className={`${color === "true" ? "text_red" : ""}`}
        style={{
          marginTop: "20px",
        }}
      >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit
        quibusdam error voluptatibus itaque aperiam eos aliquid quae, illum
        inventore quo nemo modi natus rem minus sit iusto id velit atque.
      </p>
      <button onClick={clickHandler} style={{ border: "1px solid black" }}>
        Hello
      </button>
    </div>
  );
};

export default Hero;
