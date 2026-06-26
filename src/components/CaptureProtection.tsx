"use client";

import { useEffect } from "react";

export default function CaptureProtection() {
  useEffect(() => {
    // 1. Intercept print and save shortcuts
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "PrintScreen" || e.keyCode === 44) {
        document.body.classList.add("obscured-blur");
        if (navigator.clipboard) {
          navigator.clipboard.writeText(""); // Clear clipboard
        }
        e.preventDefault();
        
        // Remove the blur after a delay once the screenshot action is completed
        setTimeout(() => {
          document.body.classList.remove("obscured-blur");
        }, 1000);
      }

      // Block Ctrl+P / Cmd+P (Print Page)
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "p") {
        e.preventDefault();
      }

      // Block Ctrl+S / Cmd+S (Save Page)
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "s") {
        e.preventDefault();
      }
    };

    // 2. Prevent right-click context menu (blocks 'Save Image As', 'Inspect Element')
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    // 3. Block text/element copying
    const handleCopy = (e: ClipboardEvent) => {
      e.preventDefault();
    };

    // 4. Obscure screen when window loses focus (active screenshot/recording tool switch)
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

    // Initial check in case window starts out of focus
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
