"use client";

import styles from "./register.module.css";
import { useState } from "react";

const RegisterBox = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (
    email: string,
    password: string,
    confirmPassword: string
  ) => {};

  return (
    <form className={styles.container}>
      <div>
        <label htmlFor="email">Email</label>
        <div className={styles.inputField}>
          <input
            id="email"
            placeholder="Enter your email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <div className={styles.inputField}>
          <input
            id="password"
            placeholder="Enter your password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
      </div>

      <div>
        <label htmlFor="confirm password">Confirm Password</label>
        <div className={styles.inputField}>
          <input
            id="confirm password"
            placeholder="Confirm your password"
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
          />
        </div>
      </div>

      <div className={styles.submitButton}>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default RegisterBox;
