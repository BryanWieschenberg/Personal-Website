import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Function to animate the About page heading
export const animateHeader = (element: HTMLElement | null) => {
  gsap.fromTo(element,
        { opacity: 0, y: -115 },
        { opacity: 1, y: 0, duration: 1, ease: "power4.out" }
    );
};

// New animation functions for Home component
export const animateHome = () => {
  // First slogan - from left
  gsap.fromTo(".slogan-first",
    { opacity: 0, x: -150 },
    { opacity: 1, x: 0, duration: 2, ease: "power4.out" }
  );
  
  // Second slogan - from right (with delay)
  gsap.fromTo(".slogan-second",
    { opacity: 0, x: 150 },
    { opacity: 1, x: 0, duration: 2, ease: "power4.out", delay: 1 }
  );
  
  // Third slogan - from bottom (with delay)
  gsap.fromTo(".slogan-third",
    { opacity: 0, y: 100 },
    { opacity: 1, y: 0, duration: 2, ease: "power4.out", delay: 2 }
  );
  
  // Main content - from bottom (with delay)
  gsap.fromTo(".main-content",
    { opacity: 0, y: 100 },
    { opacity: 1, y: 0, duration: 2, ease: "power2.out", delay: 3 }
  );
};

export const animateAbout = () => {
  gsap.fromTo(".intro-text",
    { opacity: 0, x: -150 },
    { opacity: 1, x: 0, duration: 1, ease: "power4.out" }
  );
  gsap.fromTo(".intro-img",
    { opacity: 0, x: 150 },
    { opacity: 1, x: 0, duration: 1, ease: "power4.out" }
  );
  gsap.fromTo(".roles-text",
    { opacity: 0, x: -150 },
    { opacity: 1, x: 0, duration: 1, ease: "power4.out" }
  );
  gsap.fromTo(".big-arrow",
    { opacity: 0, y: 60 },
    { opacity: 1, y: 0, duration: 1, ease: "power4.out" }
  );
}
