import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0 });
    });
    }, [pathname]);

  return null;
};

export default ToTop;
