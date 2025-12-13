"use client";

import useQRStore from "../stores/useQRStore";

const QRDisplay = () => {
  const qrCode = useQRStore((state) => state.qrCode);

  // Default QR Code
  if (qrCode == "") {
    return <p>QR Code</p>; 
  }
  return <img src={qrCode} alt="QR Code"></img>;
};

export default QRDisplay;
