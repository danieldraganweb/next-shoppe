"use client";

import { useState, useEffect } from "react";
import Navbar from "./components/navbar";
import styles from "./page.module.css";

const Homepage = () => {
  const [count, setCount] = useState(1);
  const [products, setProducts] = useState<any>([]);

  const getData = async () => {
    const data = await fetch("https://fakestoreapi.com/products?limit=5");
    const json = await data.json();
    setProducts(json);
  };

  useEffect(() => {
    getData();
  }, []);
  console.log(products);

  return (
    <div>
      <Navbar />
      {products.map((product: any) => (
        <div className={styles.productCard} key={product?.id}>
          <h3>{product?.title}</h3>
          <p>Price: {product?.price}</p>
          <img
            className={styles.productImage}
            src={product?.image}
            alt={product?.title}
          />
        </div>
      ))}
      <h1>Homepage - - {count}</h1>
      <button onClick={() => setCount(count + 1)}>Click me</button>

      <div>
        <a href="/about">About</a>
      </div>
    </div>
  );
};

export default Homepage;
