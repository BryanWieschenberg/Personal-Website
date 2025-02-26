import React, { useRef, useEffect, useState } from 'react';

const Home: React.FC = () => (
  <>
    <div className={`flex items-center justify-center slogan`}>
      {/* Left Section */}
      <div className="flex-shrink-0 pl-[224px] flex items-center mt-12">
        <img src="./assets/images/centerArrow.png" className={`custom-image animate-fadeInLeftDelay2`} style={{ width: '150px', height: '150px' }} />
      </div>

      {/* Middle Section */}
      <div className="flex flex-col slogan mx-4 text-center overflow-hidden">
        <h2 className={`slogan animate-fadeInLeft`}>
          Innovative Software.
        </h2>
        <h2 className={`slogan animate-fadeInRightDelay`}>
          Impactful Results.
        </h2>
        <h2 className={`slogan animate-fadeInUpDelay2`}>
          Limitless Success.
        </h2>
      </div>

      {/* Right Section */}
      <div className="flex-shrink-0 pr-[224px] flex items-center mt-12">
        <img src="./assets/images/centerArrow.png" className={`custom-image transform -scale-x-100 animate-fadeInRightDelay2`} style={{ width: '150px', height: '150px' }} />
      </div>
    </div>

    <div className={`flex items-center justify-center text-white mt-12 w-full animate-fadeInDelay`}>
      <div className="flex flex-col md:flex-row items-center justify-center container mx-auto px-4 lg:px-20 max-w-7xl md:pr-32">
        {/* Left Section */}
        <div className="text-center md:text-left md:w-1/2 flex flex-col items-center md:items-start">
          <h1 className="text-8xl md:text-8xl font-bold leading-tight mt-4 drop-shadow-[7px_7px_1.5px_rgba(30,30,160,1)] whitespace-nowrap text-center md:text-left">
            Hi, I'm <span className="relative inline-block">
              <span className="relative bg-gradient-to-r from-[#3c86ff] to-[#69f1ff] bg-clip-text text-transparent">
                Bryan
              </span>
            </span>.
          </h1>
          <br />
          <img 
            src="./assets/images/arrow.png" 
            className="custom-image" 
            style={{ width: '500px', height: '20px' }} 
          />
          <p className="mt-4 text-lg md:text-3xl">
            I am a <span className="font-semibold text-[#b8e4ff]">Junior Computer Science Major</span><br />
            attending <span className="font-semibold text-[#b8e4ff]"> The College of New Jersey</span><br />
            as an aspiring <span className="font-semibold text-[#b8e4ff]"> Software Engineer</span>.
          </p>
          <div className="mt-6 flex justify-center md:justify-start space-x-4">
            <a href="#about" className="px-5 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 md:text-xl">
              Learn More
            </a>
            <a href="#contact" className="px-5 py-3 border border-blue-500 text-blue-500 rounded-lg shadow-md hover:bg-blue-600 hover:text-white md:text-xl">
              Contact Me
            </a>
          </div>
        </div>
        
        {/* Right Section */}
        <div className="flex items-center justify-center md:pl-32">
            <img
              src="./assets/images/photo.png"
              alt="Bryan"
              className="rounded-full border-4 border-blue-400 w-full h-full object-cover"
              style={{ width: '320px', height: '320px', objectFit: 'cover' }}  
            />
          </div>
      </div>
    </div>
  </>
);

export default Home;
