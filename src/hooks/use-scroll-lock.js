import { useEffect } from "react";

export const useScrollLock = (locked) => {
  useEffect(() => {
    if (!locked) return;

    const scrollY = window.scrollY;
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = "100%";

    return () => {
      const top = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      if (top) {
        window.scrollTo(0, parseInt(top || "0", 10) * -1);
      }
    };
  }, [locked]);
};
