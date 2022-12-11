"use client";

import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <a href="/">Home</a>
      <a href="/about">About</a>
      <a href="/shop">Shop</a>
    </div>
  );
};

export default Navbar;
