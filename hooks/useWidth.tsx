import { useState, useEffect } from "react";

export const useWidth = () => {
  const [width, setWidth] = useState(0); // default width, detect on server.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleResize = () => setWidth(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);
  return width;
};
