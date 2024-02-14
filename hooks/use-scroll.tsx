"use client";

import { useEffect, useState } from "react";

export const useScroll = (threshold: number = 10) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > threshold) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    document.addEventListener("scroll", handleScroll);
  }, [threshold]);

  return scrolled;
};
