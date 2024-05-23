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
      <div className="flex flex-col gap-1">
        <div className="modal-content">
          <Button type="button" text="X" onClick={onClose} />
          {children}
        </div>
      </div>
    </>
  );
};
