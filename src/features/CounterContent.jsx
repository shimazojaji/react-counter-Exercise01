import React from "react";

function CounterContent({ count }) {
  return (
    <div className="flex items-center   justify-center text-lg gap-5 md:text-3xl text-textColor font-bold ">
      <span>Counter: </span>
      <span data-testid="counter" className={count < 0 ? "text-error" : ""}>
        {count}
      </span>
    </div>
  );
}

export default CounterContent;
