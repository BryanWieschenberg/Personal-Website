import { gsap } from "gsap";

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
  gsap.fromTo(
    ".intro-text",
    { opacity: 0, x: -150 },
    { 
      opacity: 1, 
      x: 0, 
      duration: 1, 
      ease: "power4.out",
      onComplete: () => {
        // Remove the opacity-0 class once animation finishes
        document.querySelectorAll(".intro-text").forEach(el => {
          el.classList.remove("opacity-0");
        });
      }
    }
  );
  gsap.fromTo(
    ".intro-img",
    { opacity: 0, x: 150 },
    { 
      opacity: 1, 
      x: 0, 
      duration: 1, 
      ease: "power4.out",
      onComplete: () => {
        document.querySelectorAll(".intro-img").forEach(el => {
          el.classList.remove("opacity-0");
        });
      }
    }
  );
  // If you have other elements like ".roles-text" or ".big-arrow", you can do similar:
  gsap.fromTo(
    ".roles-text",
    { opacity: 0, x: -150 },
    { 
      opacity: 1, 
      x: 0, 
      duration: 1, 
      ease: "power4.out",
      onComplete: () => {
        document.querySelectorAll(".roles-text").forEach(el => {
          el.classList.remove("opacity-0");
        });
      }
    }
  );
  gsap.fromTo(
    ".big-arrow",
    { opacity: 0, y: 60 },
    { 
      opacity: 1, 
      y: 0, 
      duration: 1, 
      ease: "power4.out",
      onComplete: () => {
        document.querySelectorAll(".big-arrow").forEach(el => {
          el.classList.remove("opacity-0");
        });
      }
    }
  );
};
