import React, { useRef, useEffect, useState } from 'react';

const Home: React.FC = () => {
  const ref = useRef<HTMLHeadingElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setTimeout(() => setVisible(true), 200); // Delay animation by 2 seconds
      }
    });

    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <>
      <div className="snap-container h-screen snap-y snap-mandatory overflow-y-auto">
        <div className={`mt-28`}></div>

        <div className={`flex items-center justify-center slogan`}>
          {/* Left Section */}
          <div className="flex-shrink-0 pl-80 flex items-center -mt-8">
            <img src="./assets/images/centerArrow.png" className="custom-image animate-fadeInLeftDelay2" style={{ width: '150px', height: '150px' }} />
          </div>

          {/* Middle Section */}
          <div className="flex flex-col slogan mx-4 text-center overflow-hidden">
            <h2 ref={ref} className={`slogan ${visible ? 'animate-fadeInLeft' : 'opacity-0'}`}>
              Innovative Software.
            </h2>
            <h2 ref={ref} className={`slogan ${visible ? 'animate-fadeInRightDelay' : 'opacity-0'}`}>
              Impactful Results
            </h2>
            <h2 ref={ref} className={`slogan ${visible ? 'animate-fadeInUpDelay2' : 'opacity-0'}`}>
              Limitless Success.
            </h2>
          </div>

          {/* Right Section */}
          <div className="flex-shrink-0 pr-80 flex items-center -mt-8">
            <img src="./assets/images/centerArrow.png" className="custom-image animate-fadeInRightDelay2 transform -scale-x-100" style={{ width: '150px', height: '150px' }} />
          </div>
        </div>

        <div className="flex items-center justify-center text-white">
          <div className="flex flex-col md:flex-row items-center container lg:px-20">
            {/* Left Section */}
            <div className="text-center md:text-left md:w-1/2">
              <h1 className="text-8xl md:text-8xl font-bold leading-tight mt-4 drop-shadow-[7px_7px_1.5px_rgba(30,30,160,1)]">
                Hi, I’m <span className="bg-gradient-to-r from-[#3c86ff] to-[#69f1ff] bg-clip-text text-transparent">Bryan</span>.
              </h1>
              <p className="mt-4 text-lg md:text-xl">
                I am a <span className="font-semibold">Junior Computer Science Major</span><br></br>
                attending <span className="font-semibold"> The College of New Jersey</span><br></br>
                as an aspiring <span className="font-semibold"> Software Engineer</span>.
              </p>
              <div className="mt-6 flex justify-center md:justify-start space-x-4">
                <a href="#about" className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600">
                  Learn More
                </a>
                <a href="#contact" className="px-6 py-3 border border-blue-500 text-blue-500 rounded-lg shadow-md hover:bg-blue-600 hover:text-white">
                  Contact Me
                </a>
              </div>
            </div>
            
            {/* Right Section */}
            <div className="mt-8 md:mt-0 flex items-center justify-center">
              <div className="relative w-48 h-48 md:w-64 md:h-64">
                <img
                  src="./assets/images/photo.png"
                  alt="Bryan"
                  className="rounded-full border-4 border-blue-400 object-cover shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
