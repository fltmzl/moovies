"use client";

import { useEffect, useState } from "react";

const useScroll = () => {
  const [scrollY, setScrollY] = useState(0);
  const [scrollX, setScrollX] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollX(window.scrollX);
      setScrollY(window.scrollY);
    });
  }, []);

  return { scrollX, scrollY };
};

export default useScroll;
