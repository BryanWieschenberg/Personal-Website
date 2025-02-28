import { gsap } from "gsap";

// Function to animate the About page heading
export const animateHeader = (element: HTMLElement | null) => {
  gsap.fromTo(element,
        { opacity: 0, y: -50 },
        { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }
    );
};

// New animation functions for Home component
export const animateSlogan = () => {
  // First slogan - from left
  gsap.fromTo(".slogan-first",
    { opacity: 0, x: -150 },
    { opacity: 1, x: 0, duration: 2, ease: "power4.out" }
  );
  
  // Second slogan - from right (with delay)
  gsap.fromTo(".slogan-second",
    { opacity: 0, x: 150 },
    { opacity: 1, x: 0, duration: 2, ease: "power4.out", delay: 1.25 }
  );
  
  // Third slogan - from bottom (with delay)
  gsap.fromTo(".slogan-third",
    { opacity: 0, y: 100 },
    { opacity: 1, y: 0, duration: 2, ease: "power4.out", delay: 2.5 }
  );
  
  // Main content - from bottom (with delay)
  gsap.fromTo(".main-content",
    { opacity: 0, y: 100 },
    { opacity: 1, y: 0, duration: 2, ease: "power2.out", delay: 3.75 }
  );
};