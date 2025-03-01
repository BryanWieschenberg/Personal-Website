import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const scrollToTop = () => {
      const tryScroll = () => {
        if (typeof window.scrollTo === 'function') {
          window.scrollTo({
            top: 0,
            behavior: 'auto'
          });
        }

        const html = document.documentElement;
        const body = document.body;
        // Use type assertion for MSStream check
        const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && 
                    !(window as typeof window & { MSStream?: unknown }).MSStream;

        if (iOS) {
          if (html.scrollTop > 0) html.scrollTop = 0;
          if (body.scrollTop > 0) body.scrollTop = 0;
          
          body.style.overflow = 'hidden';
          setTimeout(() => body.style.overflow = 'auto', 100);
        } else {
          if (html.scrollTop > 0) html.scrollTop = 0;
          if (body.scrollTop > 0) body.scrollTop = 0;
        }

        setTimeout(() => {
          if (html.scrollTop > 0 || body.scrollTop > 0) {
            window.scrollTo(0, 0);
          }
        }, 150);
      };

      tryScroll();
      setTimeout(tryScroll, 100);
    };

    scrollToTop();

    const handleOrientationChange = () => setTimeout(scrollToTop, 300);
    window.addEventListener('orientationchange', handleOrientationChange);

    return () => {
      window.removeEventListener('orientationchange', handleOrientationChange);
    };
  }, [pathname]);

  return null;
};

export default ToTop;
