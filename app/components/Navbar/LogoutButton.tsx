"use client";
import { signOut } from "next-auth/react";
import styles from "./navbar.module.css";

const LogoutButton = () => {
  return (
    <button onClick={() => signOut()} className={styles.navButton}>
      Log Out
    </button>
  );
};

export default LogoutButton;
