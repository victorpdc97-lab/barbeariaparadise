import { createContext, useContext, useState, useCallback } from "react";
import DownloadAppModal from "@/components/DownloadAppModal";
import { detectOS, APP_STORE_URL, PLAY_STORE_URL } from "@/lib/detectOS";

interface DownloadAppContextType {
  openDownloadModal: () => void;
}

const DownloadAppContext = createContext<DownloadAppContextType | null>(null);

export const DownloadAppProvider = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);

  const openDownloadModal = useCallback(() => {
    const os = detectOS();
    if (os === "ios") window.open(APP_STORE_URL, "_blank");
    else if (os === "android") window.open(PLAY_STORE_URL, "_blank");
    else setOpen(true);
  }, []);

  return (
    <DownloadAppContext.Provider value={{ openDownloadModal }}>
      {children}
      <DownloadAppModal open={open} onOpenChange={setOpen} />
    </DownloadAppContext.Provider>
  );
};

export const useDownloadApp = () => {
  const context = useContext(DownloadAppContext);
  if (!context) throw new Error("useDownloadApp must be used within DownloadAppProvider");
  return context;
};
