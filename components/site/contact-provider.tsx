"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { ContactDialog } from "@/components/site/contact-dialog";

type ContactContextValue = {
  openContact: () => void;
};

const ContactContext = createContext<ContactContextValue | null>(null);

export function ContactProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const openContact = useCallback(() => setOpen(true), []);

  const value = useMemo(
    () => ({
      openContact,
    }),
    [openContact],
  );

  return (
    <ContactContext.Provider value={value}>
      {children}
      <ContactDialog open={open} onOpenChange={setOpen} />
    </ContactContext.Provider>
  );
}

export function useContact() {
  const ctx = useContext(ContactContext);
  if (!ctx) {
    throw new Error("useContact must be used within ContactProvider");
  }
  return ctx;
}
