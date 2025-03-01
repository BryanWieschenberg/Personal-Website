import React, { useRef, useEffect } from 'react'; 
import { animateHeader, animateAbout } from "../animations"; // Import animation function 
import AvailabilityTimeline from "./AvailabilityTimeline"; // Import our new component
import OpenTo from "./OpenTo";

const About: React.FC = () => { 
  const headingRef = useRef<HTMLHeadingElement | null>(null); 
   
  useEffect(() => { 
    animateHeader(headingRef.current); 
    animateAbout(); 
  }, []); 
 
  return ( 
    <> 
      <h1 ref={headingRef} className="text-6xl lg:text-8xl font-bold mt-4 pb-4 drop-shadow-[7px_7px_1.5px_rgba(30,30,160,1)] text-center relative bg-gradient-to-r from-[#0030ff] to-[#c4f9ff] bg-clip-text text-transparent"> 
        About Me 
      </h1> 
       
      <div className="flex flex-col lg:flex-row items-center justify-center mt-4 lg:mt-8 container mx-auto px-4 lg:px-40"> 
        {/* Left Section: Text */} 
        <div className="intro-text lg:w-1/2 mb-8 lg:mb-0"> 
          <p className="text-xs lg:text-lg text-[#d7e0e0]"> 
            Hi, I'm Bryan Wieschenberg, a passionate Computer Science student at The College of New Jersey, currently in my 6th semester as a Junior! I'm an aspiring Software Engineer driven by a lifelong love for technology, problem-solving, and innovation. 
            <br/><br/> 
            I am highly proficient in many different technical fields, such as software engineering, full-stack development, information technology, and more! My passion is leveraging technology to create solutions to problems that truly make the world a better place. I have a unique blend of technical expertise and leadership experience that has prepared me to develop remarkable software, resolve complex challenges, collaborate cross-functionally, and drive positive change in the world. 
            <br/><br/> 
            I'm eager to apply my skills, learn from industry professionals, take on new challenges, and contribute to shaping the future of technology. Whether through developing innovative software or fostering a collaborative environment, I strive to leaving a positive impact anywhere I go! 
          </p> 
        </div> 
 
        {/* Right Section: Image */} 
        <div className="intro-img lg:w-1/2 flex justify-center"> 
          <img 
            src="./assets/images/tcnj.png" 
            alt="About" 
            className="rounded-lg shadow-lg w-[160px] h-[160px] lg:w-[320px] lg:h-[320px]" 
          /> 
        </div> 
      </div> 
 
      <h1 className="roles-text pt-4 lg:pt-20 text-2xl lg:text-6xl font-bold mt-4 pb-4 drop-shadow-[7px_7px_1.5px_rgba(30,30,160,1)] text-center relative text-[#25b0e7] bg-clip-text"> 
        What Roles Am I Looking For? 
      </h1> 
      <p className="lg:pt-8 text-xs text-center lg:text-xl text-white"> 
        I'm based in New Jersey, but am open to relocating nationwide without financial assistance for the right opportunity. 
        <br/> 
        I am authorized to work in the U.S. without sponsorship. 
      </p>

      <OpenTo />
      <AvailabilityTimeline />
      
      <br/><br/><br/><br/><br/><br/> 
    </> 
  ); 
}; 
 
export default About;
