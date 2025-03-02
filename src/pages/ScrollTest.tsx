import React from 'react';
import { useNavigate } from 'react-router-dom';

const ScrollTest: React.FC = () => {
  const navigate = useNavigate();

  // Adjust this value to match your navbar's height (in pixels)
  const handleClick = (target: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById(target);
    if (element) {
      // Compute the scroll position with an offset so the target is just below the navbar.
      const targetPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: targetPosition, behavior: 'smooth' });
    }
    // Delay navigation so the user sees the scroll.
    setTimeout(() => {
      navigate('/about');
    }, 0);
  };

  return (
    <div>
      {/* Fixed Navbar - Always stays at the top */}
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

      {/* Page Content with extra top padding so content isn't hidden behind the navbar */}
      <div className="">
        {/* Section 1 - positioned at the very top of the page */}
        <section id="section1" className="min-h-screen bg-gray-100 p-8 scroll-mt-16">
          <h1 className="text-3xl font-bold mb-4">Section 1 - Top of Page</h1>
          <p>
            This is Section 1, positioned at the very top of the page. The scroll offset ensures it is fully visible below the fixed navbar. After scrolling here, you will be navigated to the /About page.
          </p>
        </section>
        {/* Section 2 - placeholder Experience content */}
        <section id="section2" className="min-h-screen bg-gray-200 p-8 scroll-mt-16">
          <h1 className="text-3xl font-bold mb-4">Section 2 (Experience)</h1>
          <div className="p-4 bg-blue-200 rounded-lg">
            <h2 className="text-2xl font-bold">Experience Section</h2>
            <p>
              This is placeholder content for the Experience section. Use this section to test scrolling behavior on your iPhone.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ScrollTest;
