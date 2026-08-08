"use client";

import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="flex text-4xl gap-4">
        <button className="cursor-pointer bg-red-400 p-2" onClick={() => setCount(count - 1)}>
          -
        </button>
        <span>{count}</span>
        <button className="cursor-pointer bg-green-400 p-2" onClick={() => setCount(count + 1)}>
          +
        </button>
      </div>
    </>
  );
};

export default Counter;