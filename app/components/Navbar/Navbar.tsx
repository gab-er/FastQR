"use client";

import React from "react";
import styles from "./navbar.module.css";
import AppName from "./AppName";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import { useSession } from "next-auth/react";

const Navbar = () => {
  const { data: session } = useSession();

  return (
    <div className={styles.navContainer}>
      <AppName />
      <div className={styles.buttonWrapper}>
        <LoginButton />
        {session && <LogoutButton />}
      </div>
    </div>
  );
};

export default Navbar;
