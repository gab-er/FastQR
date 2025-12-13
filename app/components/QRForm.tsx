"use client";
import React from "react";
import { useState } from "react";
import styles from "./form.module.css";

const QRForm = () => {
  const [inputValue, setInputValue] = useState("");
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // API call to backend
    const res = await fetch(`/api/qr`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(inputValue),
    });

    const data = await res.json();
    console.log(data);

    // Error validation can be added here
    console.log("Form submitted with value:", inputValue);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className={styles.formInput}
        type="url"
        placeholder="Insert URL here"
        onChange={(e) => setInputValue(e.target.value)}
      ></input>
    </form>
  );
};

export default QRForm;
