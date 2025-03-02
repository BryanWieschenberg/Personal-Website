import React from 'react';
import { useNavigate } from 'react-router-dom';

const Experience: React.FC = () => {
  const navigate = useNavigate();

  // Handler that scrolls to a section and then navigates to /About after a delay
  const handleClick = (target: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById(target);
    if (element) {
      element.scrollIntoView();
    }
    setTimeout(() => {
      navigate('/About');
    }, 0); // Adjust delay as needed
  };

  return (
    <div>
      {/* Fixed Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-md p-4 z-50 flex justify-center space-x-6">
        <a 
          href="#section1" 
          onClick={handleClick("section1")} 
          className="text-blue-500 hover:underline"
        >
          Go to Section 1
        </a>
        <a 
          href="#section2" 
          onClick={handleClick("section2")} 
          className="text-blue-500 hover:underline"
        >
          Go to Section 2
        </a>
      </nav>

      {/* Content Sections */}
      {/* Section 1 is at the VERY top of the page */}
      <section id="section1" className="min-h-screen bg-gray-100 p-4">
        <h1 className="text-3xl font-bold mb-4">Section 1 - Top of Page</h1>
        <p>
          This is Section 1. It is positioned at the very top of the page. After you jump here, you'll be navigated to the /About page.
        </p>
      </section>
      <section id="section2" className="min-h-screen bg-gray-200 p-8">
        <h1 className="text-3xl font-bold mb-4">Section 2</h1>
        <p>
          This is Section 2. It contains some placeholder content. After you jump here, you'll be taken to the /About page.
        </p>
      </section>
    </div>
  );
};

export default Experience;
