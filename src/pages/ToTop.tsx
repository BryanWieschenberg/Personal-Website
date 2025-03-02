import React, { forwardRef } from 'react';
import { useNavigate } from 'react-router-dom';

interface ScrollLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
}

const ScrollLink = forwardRef<HTMLAnchorElement, ScrollLinkProps>(
  ({ to, children, className }, ref) => {
    const navigate = useNavigate();

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      // Scroll to top smoothly
      window.scrollTo({ top: 0 });
      // After a short delay, navigate to the new route
      setTimeout(() => {
        navigate(to);
      }, 300); // Adjust delay as needed
    };

    return (
      <a
        href={to}
        onClick={handleClick}
        className={className}
        ref={ref}
      >
        {children}
      </a>
    );
  }
);

ScrollLink.displayName = 'ScrollLink';

export default ScrollLink;
