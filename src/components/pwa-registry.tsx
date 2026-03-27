"use client";

import { useEffect } from "react";

export function PwaRegistry() {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      // Register service worker after the page fully loads to prioritize performance
      window.addEventListener("load", () => {
        navigator.serviceWorker.register("/sw.js").catch(error => {
          console.error("Service Worker Registration Failed:", error);
        });
      });
    }
  }, []);

  return null;
}
