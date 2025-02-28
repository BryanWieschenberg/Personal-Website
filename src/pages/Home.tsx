import React from 'react';

const Home: React.FC = () => (
  <>
    {/* Top Slogan Section */}
    <div className="flex items-center justify-center slogan space-x-2 md:space-x-4">
      {/* Left Section */}
      <div className="flex-shrink-0 pl-4 md:pl-[224px] pt-10 flex items-center">
        <img
          src="./assets/images/centerArrow.png"
          className="custom-image animate-fadeInLeftDelay2 w-[40px] h-[40px] md:w-[130px] md:h-[130px]"
          alt="Left arrow"
        />
      </div>

      {/* Middle Section */}
      <div className="flex flex-col slogan text-center overflow-hidden">
        <h2 className="slogan animate-fadeInLeft text-[1.5rem] md:text-6xl">
          Innovative Software.
        </h2>
        <h2 className="slogan animate-fadeInRightDelay text-[1.5rem] md:text-6xl">
          Impactful Results.
        </h2>
        <h2 className="slogan animate-fadeInUpDelay2 text-[1.5rem] md:text-6xl">
          Limitless Success.
        </h2>
      </div>

      {/* Right Section */}
      <div className="flex-shrink-0 pr-4 md:pr-[224px] pt-10 flex items-center">
        <img
          src="./assets/images/centerArrow.png"
          className="custom-image transform -scale-x-100 animate-fadeInRightDelay2 w-[40px] h-[40px] md:w-[130px] md:h-[130px]"
          alt="Right arrow"
        />
      </div>
    </div>

    {/* Main Content Section */}
    <div className="flex flex-col md:flex-row items-center justify-center text-white mt-6 w-full animate-fadeInDelay">
      <div className="flex flex-col md:flex-row items-center justify-center container mx-auto px-4 lg:px-20 max-w-7xl md:pr-32">
        {/* Left Content */}
        <div className="text-center md:text-left md:w-1/2 flex flex-col items-center md:items-start">
          <h1 className="text-5xl md:text-8xl font-bold leading-tight mt-4 drop-shadow-[7px_7px_1.5px_rgba(30,30,160,1)] whitespace-nowrap text-center md:text-left">
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
            className="custom-image w-full max-w-[300px] md:max-w-[500px]"
            alt="Arrow decoration" 
          />
          <p className="mt-4 text-base md:text-3xl">
            I am a <span className="font-semibold text-[#b8e4ff]">Junior Computer Science Major</span>
            <br />
            attending <span className="font-semibold text-[#b8e4ff]">The College of New Jersey</span>
            <br />
            as an aspiring <span className="font-semibold text-[#b8e4ff]">Software Engineer</span>.
          </p>
          {/* Original Buttons (visible on md+) */}
          <div className="mt-6 hidden md:flex flex-row justify-start space-x-4">
            <a href="#about" className="px-3 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 text-xl">
              Learn More
            </a>
            <a href="#contact" className="px-3 py-2 border border-blue-500 text-blue-500 rounded-lg shadow-md hover:bg-blue-600 hover:text-white text-xl">
              Contact Me
            </a>
          </div>
        </div>
        
        {/* Right Content */}
        <div className="flex items-center justify-center md:pl-8 mt-6 md:mt-0">
          <img
            src="./assets/images/photo.png"
            alt="Bryan"
            className="rounded-full border-4 border-blue-400 object-cover"
            style={{ width: '240px', height: '240px' }}
          />
        </div>
      </div>
    </div>

    {/* Duplicate Buttons for Mobile (visible only on mobile) */}
    <div className="block md:hidden mt-6">
  <div className="flex flex-row justify-center space-x-4">
    <a
      href="#about"
      className="px-3 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 text-sm"
    >
      Learn More
    </a>
    <a
      href="#contact"
      className="px-3 py-2 border border-blue-500 text-blue-500 rounded-lg shadow-md hover:bg-blue-600 hover:text-white text-sm"
    >
      Contact Me
    </a>
  </div>
</div>
  </>
);

export default Home;
