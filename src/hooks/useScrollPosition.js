import { useState, useEffect } from "react";

export default function useScrollPosition() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.pageYOffset);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initialize

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return scrollY;
}
