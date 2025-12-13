"use client";

import React from "react";
import styles from "./Navbar.module.css";

const LoginButton = () => {
  const handleLogin = () => {
    // Add login logic here
    console.log("Login clicked");
  };

  return (
    <button onClick={handleLogin} className={styles.navButton}>
      Login
    </button>
  );
};

export default LoginButton;
