"use client";

import { useState } from "react";
import Navbar from "../components/navbar";

const About = () => {
  const [count, setCount] = useState(1);

  return (
    <div>
      <Navbar />
      <h1>About - About - {count}</h1>
      <button onClick={() => setCount(count + 1)}>Click me</button>

      <div>
        <a href="/about">About</a>
      </div>
    </div>
  );
};

export default About;
