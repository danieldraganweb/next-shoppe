"use client";
import { useState } from "react";
import styles from "./page.module.css";

export default function Counter() {
  const [counter, setCounter] = useState(0);

  console.log("hey", counter);

  return (
    <div className={styles.container}>
      <h1>count {counter}</h1>
      <button
        onClick={() => {
          console.log("hey");
          // alert("hello");
          setCounter(counter + 1);
        }}
      >
        click me
      </button>
    </div>
  );
}
