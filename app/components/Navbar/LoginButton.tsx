"use client";

import { useRouter } from "next/navigation";
import styles from "./navbar.module.css";

const LoginButton = () => {
  const router = useRouter();
  const handleLogin = () => {
    router.push("/login");
  };

  return (
    <button onClick={handleLogin} className={styles.navButton}>
      Login
    </button>
  );
};

export default LoginButton;
