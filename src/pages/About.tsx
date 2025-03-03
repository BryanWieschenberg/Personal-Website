import React, { useRef, useEffect } from 'react'; 
import { animateHeader, animateAbout } from "../animations"; 
import AvailabilityTimeline from "./subpages/Availability";
import Orgs from "./subpages/Orgs";
import Classes from "./subpages/Classes";
import Skills from "./subpages/Skills";

const About: React.FC = () => { 
  const headingRef = useRef<HTMLHeadingElement | null>(null); 
  const topRef = useRef<HTMLParagraphElement | null>(null);
  // This ref acts as a flag to ensure animations only play once per mount.
  const hasAnimated = useRef(false);

  useEffect(() => { 
    console.log("About useEffect triggered");
    console.log("Heading element:", headingRef.current);
    console.log("hasAnimated flag:", hasAnimated.current);

    if (!hasAnimated.current) {
      console.log("Animations haven't run yet. Running animateHeader and animateAbout.");
      animateHeader(headingRef.current);
      animateAbout();
      hasAnimated.current = true;
      console.log("Animation flag set to true.");
    } else {
      console.log("Animations already run. Skipping animations.");
    }
  }, []); 
 
  return ( 
    <> 
      <p id="ToTop" ref={topRef} className="invisible text-white">ToTop</p>
      <h1 
        ref={headingRef} 
        className="opacity-0 text-6xl lg:text-8xl font-bold lg:mt-2 pb-4 drop-shadow-[7px_7px_1.5px_rgba(30,30,160,1)] text-center relative bg-gradient-to-r from-[#0030ff] to-[#c4f9ff] bg-clip-text text-transparent"
      > 
        About Me 
      </h1>
       
      <div className="flex flex-col lg:flex-row items-center justify-center mt-4 lg:mt-8 container mx-auto px-4 lg:px-40"> 
        {/* Left Section: Text */} 
        <div className="opacity-0 intro-text lg:w-1/2 mb-8 lg:mb-0"> 
          <p className="text-xs lg:text-lg text-[#d7e0e0]"> 
            Hi, I'm Bryan Wieschenberg, a passionate Computer Science student at The College of New Jersey, currently in my 6th semester as a Junior! I'm an aspiring Software Engineer driven by a lifelong love for technology, problem-solving, and innovation. 
            <br/><br/> 
            I am highly proficient in many different technical fields, such as software engineering, full-stack development, information technology, and more! My passion is leveraging technology to create solutions to problems that truly make the world a better place. I have a unique blend of technical expertise and leadership experience that has prepared me to develop remarkable software, resolve complex challenges, collaborate cross-functionally, and drive positive change in the world. 
            <br/><br/> 
            I'm eager to apply my skills, learn from industry professionals, take on new challenges, and contribute to shaping the future of technology. Whether through developing innovative software or fostering a collaborative environment, I strive to leaving a positive impact anywhere I go! 
          </p> 
        </div> 
     
        {/* Right Section: Image */} 
        <div className="opacity-0 intro-img lg:w-1/2 flex justify-center"> 
          <img 
            src="./assets/images/tcnj.png" 
            alt="About" 
            className="rounded-lg shadow-lg w-[160px] h-[160px] lg:w-[320px] lg:h-[320px]" 
          /> 
        </div> 
      </div> 
     
      <Orgs />
      <Classes />
      <Skills />
      <AvailabilityTimeline />

      <br/><br/><br/><br/><br/><br/> 
    </> 
  ); 
}; 
 
export default About;
