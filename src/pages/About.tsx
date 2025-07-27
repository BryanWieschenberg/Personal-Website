import React, { useRef, useEffect, useState } from 'react'; 
import Orgs from "./subpages/Orgs";
import Classes from "./subpages/Classes";
import Skills from "./subpages/Skills";

const About: React.FC = () => { 
  const topRef = useRef<HTMLParagraphElement | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
       const observer = new IntersectionObserver(([entry]) => {
         if (entry.isIntersecting) {
           setTimeout(() => setVisible(true), 0);
         }
       });
   
       if (ref.current) observer.observe(ref.current);
       return () => observer.disconnect();
     }, []);
    
  return ( 
    <> 
      <p id="ToTop" ref={topRef} className="invisible text-white">ToTop</p>
      <h1 
        ref={ref} className={`text-6xl lg:text-8xl font-bold lg:mt-2 pb-4 drop-shadow-[7px_7px_1.5px_rgba(30,30,160,1)] text-center relative bg-gradient-to-r from-[#0030ff] to-[#c4f9ff] bg-clip-text text-transparent ${visible ? 'opacity-100 translate-y-0 transition-all duration-300 ease-out' : 'opacity-0 -translate-y-20'}`}>
        About Me
      </h1>
       
      <div className="flex flex-col lg:flex-row items-center justify-center mt-4 lg:mt-8 container mx-auto px-4 lg:px-40"> 
        {/* Left Section: Text */} 
        <div ref={ref} className={`lg:w-1/2 mb-8 lg:mb-0 ${visible ? 'opacity-100 translate-x-0 transition-all duration-300 ease-out' : 'opacity-0 -translate-x-20'}`}>
          <p className="text-xs lg:text-lg text-[#d7e0e0]"> 
            Hi, I'm Bryan Wieschenberg, a passionate Computer Science student at The College of New Jersey, currently in my 6th semester as a Junior! I'm an aspiring Software Engineer driven by a lifelong love for technology, problem-solving, and innovation. 
            <br/><br/> 
            I am highly proficient in many different technical fields, such as software engineering, full-stack development, information technology, and more! My passion is leveraging technology to create solutions to problems that truly make the world a better place. I have a unique blend of technical expertise and leadership experience that has prepared me to develop remarkable software, resolve complex challenges, collaborate cross-functionally, and drive positive change in the world. 
            <br/><br/> 
            I'm eager to apply my skills, learn from industry professionals, take on new challenges, and contribute to shaping the future of technology. Whether through developing innovative software or fostering a collaborative environment, I strive to leaving a positive impact anywhere I go! 
          </p> 
        </div> 
     
        {/* Right Section: Image */} 
        <div ref={ref} className={`opacity-0 lg:w-1/2 flex justify-center ${visible ? 'opacity-100 translate-x-0 transition-all duration-300 ease-out' : 'opacity-0 translate-x-20'}`}> 
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
      <div className="mb-80"></div>
    </> 
  ); 
}; 
 
export default About;
