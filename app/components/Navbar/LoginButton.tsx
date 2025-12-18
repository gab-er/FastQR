"use client";

import { useRouter } from "next/navigation";
import styles from "./navbar.module.css";
import { useSession } from "next-auth/react";

const LoginButton = () => {
  const { data: session } = useSession();

  const router = useRouter();
  const handleLogin = () => {
    router.push("/login");
  };

  return (
    <div>
      {session ? (
        <p> Welcome back, {session?.user?.email} </p>
      ) : (
        <button onClick={handleLogin} className={styles.navButton}>
          Login
        </button>
      )}
    </div>
  );
};

export default LoginButton;
