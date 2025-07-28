import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
    const topRef = useRef<HTMLParagraphElement | null>(null);
    const navigate = useNavigate();
    
    const LearnMore = (e: React.MouseEvent) => {
      e.preventDefault();
      topRef.current?.scrollIntoView();
      setTimeout(() => {
        navigate('/about');
      }, 0);
    };
  
    const ContactMe = (e: React.MouseEvent) => {
      e.preventDefault();
      topRef.current?.scrollIntoView();
      setTimeout(() => {
        navigate('/contact');
      }, 0);
    };
      
  return (
    <>
      <p id="ToTop" ref={topRef} className="invisible text-white">ToTop</p>
      {/* Top Slogan Section */}
      <div className="flex items-center justify-center slogan">
        {/* Middle Section */}
        <div className="flex flex-col slogan text-center">
          {/* Wrapper that hides overflow for first two lines */}
          <div className="overflow-hidden min-h-[6rem] lg:min-h-[10rem]">
            <h2 className={`animate-fadeInLeft mt-3 mb-5 lg:mb-6 text-[1.5rem] lg:text-5xl`}>
              Driven by Innovation.
            </h2>
            <h2 className="animate-fadeInRightDelay lg:mt-6 text-[1.5rem] lg:text-5xl">
              Building for Security.
            </h2>
          </div>

          {/* The third heading is outside the overflow-hidden div */}
          <h2 className="animate-fadeInUpDelay2 text-[1.5rem] lg:text-5xl">
            Engineering to Scale.
          </h2>
        </div>
      </div>
      {/* Main Content Section */}
      <div className="animate-fadeInDelay main-content flex flex-col lg:flex-row items-center justify-center text-white mt-3 lg:mt-8 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-center container mx-auto px-4 lg:px-20 max-w-7xl">
          {/* Left Content */}
          <div className="text-center lg:text-left lg:w-1/2 flex flex-col items-center lg:items-start">
            <h1 className="text-5xl lg:text-8xl font-bold leading-tight mt-4 drop-shadow-[7px_7px_1.5px_rgba(30,30,160,1)] whitespace-nowrap text-center lg:text-left">
              Hi, I'm{' '}
              <span className="relative inline-block">
                <span className="relative bg-gradient-to-r from-[#3c86ff] to-[#69f1ff] bg-clip-text text-transparent">
                  Bryan
                </span>
              </span>.
            </h1>
            <br />
            <img 
              src="./assets/images/arrow.png" 
              className="custom-image w-full max-w-[300px] lg:max-w-[500px]"
              alt="Arrow decoration" 
            />
            <p className="mt-4 text-base lg:text-3xl">
              I am a <span className="font-semibold text-[#b8e4ff]">Junior Computer Science Major</span>
              <br />
              attending <span className="font-semibold text-[#b8e4ff]">The College of New Jersey</span>
              <br />
              as an aspiring <span className="font-semibold text-[#b8e4ff]">Software Engineer</span>.
            </p>
            {/* Original Buttons (visible on md+) */}
            <div className="mt-6 hidden lg:flex flex-row justify-start space-x-4">
              <a href="top" onClick={LearnMore} className="px-3 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 text-xl">Learn More</a>
              <a href="top" onClick={ContactMe} className="px-3 py-2 border border-blue-500 text-blue-500 rounded-lg shadow-md hover:bg-blue-600 hover:text-white text-xl">Contact Me</a>
            </div>
          </div>
          
          {/* Right Content with more spacing and centered photo */}
          <div className="flex items-center justify-center pt-5 lg:self-start lg:pt-12 lg:pl-16 lg:mt-0">
            <img
              src="./assets/images/photo.png"
              alt="Bryan"
              className="rounded-full border-4 border-blue-400 object-cover w-60 h-60 lg:w-80 lg:h-80"
            />
          </div>
        </div>
      </div>

      {/* Duplicate Buttons for Mobile (visible only on mobile) */}
      <div className="animate-fadeInDelay main-content block lg:hidden mt-6">
        <div className="flex flex-row justify-center space-x-4">
          <a href="top" onClick={LearnMore} className="px-3 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 text-sm">Learn More</a>
          <a href="top" onClick={ContactMe} className="px-3 py-2 border border-blue-500 text-blue-500 rounded-lg shadow-md hover:bg-blue-600 hover:text-white text-sm">Contact Me</a>
        </div>
      </div>
      <br/><br/>
    </>
  );
};

export default Home;
