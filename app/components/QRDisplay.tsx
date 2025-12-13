"use client";

import useQRStore from "../stores/useQRStore";

const QRDisplay = () => {
  const qrCode = useQRStore((state) => state.qrCode);

  return <img src={qrCode} alt="QR Code"></img>;
};

export default QRDisplay;
