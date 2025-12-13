import React from "react";
import styles from "./Navbar.module.css";
import AppName from "./AppName";
import LoginButton from "./LoginButton";

const Navbar = () => {
  return (
    <div className={styles.navContainer}>
      <AppName />
      <LoginButton />
    </div>
  );
};

export default Navbar;
