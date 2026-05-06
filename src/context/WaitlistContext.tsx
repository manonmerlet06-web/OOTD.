import { createContext, useContext, useState, ReactNode } from "react";
import WaitlistModal from "../components/WaitingList";

interface WaitlistContextType {
  isOpen: boolean;
  open: (url?: string, title?: string, subtitle?: string) => void;
  close: () => void;
}

const WaitlistContext = createContext<WaitlistContextType | undefined>(undefined);

export function WaitlistProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeUrl, setActiveUrl] = useState<string | undefined>(undefined);
  const [activeTitle, setActiveTitle] = useState<string | undefined>(undefined);
  const [activeSubtitle, setActiveSubtitle] = useState<string | undefined>(undefined);

  const open = (url?: string, title?: string, subtitle?: string) => {
    setActiveUrl(url);
    setActiveTitle(title);
    setActiveSubtitle(subtitle);
    setIsOpen(true);
  };
  const close = () => {
    setIsOpen(false);
    setActiveUrl(undefined);
    setActiveTitle(undefined);
    setActiveSubtitle(undefined);
  };

  return (
    <WaitlistContext.Provider value={{ isOpen, open, close }}>
      {children}
      <WaitlistModal 
        isOpen={isOpen} 
        onClose={close} 
        url={activeUrl} 
        title={activeTitle}
        subtitle={activeSubtitle}
      />
    </WaitlistContext.Provider>
  );
}

export function useWaitlist() {
  const context = useContext(WaitlistContext);
  if (context === undefined) {
    throw new Error("useWaitlist must be used within a WaitlistProvider");
  }
  return context;
}
