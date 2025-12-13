import { create } from "zustand";

interface QrState {
  qrCode: string;
  setQrCode: (qrCode: string) => void;
}

const useQRStore = create<QrState>((set) => ({
  qrCode: "",
  setQrCode: (qrCode) => {
    set({ qrCode });
  },
}));

export default useQRStore;
