"use client";
import { useEffect } from "react";
import Button from "../button/button";

export const Modal = ({
  isOpen,
  onClose,
  children,
}: {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleEscape);
  }, [onClose]);

  if (!isOpen) return null;
  return (
    <>
      <section className="flex flex-col sm:flex-col md:flex-col lg:flex-col xl:flex-col gap-1">
        <div className="modal-content flex flex-col">
          <div className="self-end mr-2">
            <Button type="button" text="X" onClick={onClose} />
          </div>
          {children}
        </div>
        <span className="flex justify-center mb-4 mt-2">
          <Button type="button" onClick={onClose} text="Fermer">
            Fermer
          </Button>
        </span>
      </section>
    </>
  );
};
