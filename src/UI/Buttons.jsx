import React from "react";

function Buttons({ options, handleClick = { handleClick } }) {
  return (
    <div className="flex items-center justify-center gap-6 mt-40">
      {options.map((item) => (
        <button
          className="btn btn--primary"
          key={item.id}
          id={item.id}
          onClick={handleClick}
        >
          {item.caption}
        </button>
      ))}
    </div>
  );
}

export default Buttons;
