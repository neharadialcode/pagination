import React, { useEffect, useState } from "react";

const Header = () => {
  const [localValue, setLocalValue] = useState(
    localStorage.getItem("color") || "false"
  );

  useEffect(() => {
    setLocalValue(localStorage.getItem("color") || "false");
  }, []); // Remove localValue from the dependency array

  return (
    <div>
      <div className="d-flex">
        <div>logo</div>
        <button onClick={() => setLocalValue("false")}>
          {localValue === "true" ? "logout" : "login"}
        </button>
      </div>
    </div>
  );
};

export default Header;
