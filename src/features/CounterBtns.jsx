import React from "react";
import useButtons from "../hooks/useButtons";
import Buttons from "../UI/Buttons";

function CounterBtns({ count, setCount }) {
  const options = useButtons();
  function handleClick(e) {
    switch (e.target.id) {
      case "increment":
        setCount(count + 1);
        break;

      case "decrement":
        setCount(count - 1);
        break;
      case "reset":
        setCount(0);
        break;
      default:
        console.log("nothing");
    }
  }
  return (
    <>
      <Buttons options={options} handleClick={handleClick} />
    </>
  );
}

export default CounterBtns;
