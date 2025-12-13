"use client";
import React from "react";
import { useState } from "react";
import styles from "./form.module.css";
import useQRStore from "../stores/useQRStore";

const QRForm = () => {
  const [inputValue, setInputValue] = useState("");
  const setQrCode = useQRStore((state) => state.setQrCode);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Error validation can be added here

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
    const qrCode = data.qrCode;

    // Update QR Code in the store 
    setQrCode(qrCode);
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
