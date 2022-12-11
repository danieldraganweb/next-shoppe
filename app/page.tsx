"use client";

import { useState } from "react";
import Navbar from "./components/navbar";

const Homepage = () => {
  const [count, setCount] = useState(1);

  return (
    <div>
      <Navbar />
      <h1>Homepage - - {count}</h1>
      <button onClick={() => setCount(count + 1)}>Click me</button>

      <div>
        <a href="/about">About</a>
      </div>
    </div>
  );
};

export default Homepage;
