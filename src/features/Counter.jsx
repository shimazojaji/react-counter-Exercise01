import React, { useState } from "react";
import CounterBtns from "./CounterBtns";
import CounterContent from "./CounterContent";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <main className="flex items-center  justify-center text-lg gap-5 md:text-3xl text-textColor font-bold ">
      <section className="flex flex-col items-center gap-10 w-full p-4">
        <CounterBtns count={count} setCount={setCount} />
        <CounterContent count={count} />
      </section>
    </main>
  );
}

export default Counter;
