import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // The main issue is on mobile - let's use a more reliable approach
    const scrollToTop = () => {
      // Try multiple methods to ensure cross-browser and cross-device compatibility
      
      // Method 1: Standard scrollTo with behavior
      window.scrollTo({
        top: 0,
        behavior: 'auto' // Changed from 'smooth' for more reliable behavior
      });
      
      // Method 2: Fallback for older browsers and some mobile devices
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0; // For Safari
      
      // Method 3: Additional fallback using setTimeout
      setTimeout(() => {
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
      }, 10);
    };
    
    // Execute scroll immediately on route change
    scrollToTop();
    
  }, [pathname]);

  return null;
};

export default ToTop;
