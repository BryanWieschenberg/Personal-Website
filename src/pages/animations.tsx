import { gsap } from "gsap";

// Function to animate the About page heading
export const animateHeader = (element: HTMLElement | null) => {
  gsap.fromTo(element,
        { opacity: 0, y: -50 },
        { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }
    );
};
