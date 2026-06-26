"use client";

import { useEffect } from "react";

export default function CaptureProtection() {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "PrintScreen" || e.keyCode === 44) {
        document.body.classList.add("obscured-blur");
        if (navigator.clipboard) {
          navigator.clipboard.writeText("");
        }
        e.preventDefault();
        
        setTimeout(() => {
          document.body.classList.remove("obscured-blur");
        }, 1000);
      }

      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "p") {
        e.preventDefault();
      }

      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "s") {
        e.preventDefault();
      }
    };

    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    const handleCopy = (e: ClipboardEvent) => {
      e.preventDefault();
    };

    const handleBlur = () => {
      document.body.classList.add("obscured-blur");
    };

    const handleFocus = () => {
      document.body.classList.remove("obscured-blur");
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("contextmenu", handleContextMenu);
    window.addEventListener("copy", handleCopy);
    window.addEventListener("blur", handleBlur);
    window.addEventListener("focus", handleFocus);

    if (!document.hasFocus()) {
      document.body.classList.add("obscured-blur");
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("contextmenu", handleContextMenu);
      window.removeEventListener("copy", handleCopy);
      window.removeEventListener("blur", handleBlur);
      window.removeEventListener("focus", handleFocus);
      document.body.classList.remove("obscured-blur");
    };
  }, []);

  return null;
}
