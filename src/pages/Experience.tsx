import React from 'react';

const Experience: React.FC = () => {
  return (
    <div>
      {/* Fixed Navbar */}
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-md p-4 z-50 flex justify-center space-x-6">
        <a href="#section1" className="text-blue-500 hover:underline">
          Go to Section 1
        </a>
        <a href="#section2" className="text-blue-500 hover:underline">
          Go to Section 2
        </a>
      </nav>

      {/* Add top padding to account for fixed navbar */}
      <div className="pt-20">
        {/* Section 1 */}
        <section id="section1" className="min-h-screen bg-gray-100 p-8">
          <h1 className="text-3xl font-bold mb-4">Section 1</h1>
          <p>
            This is Section 1. Click the link in the navbar to jump to Section 2.
          </p>
        </section>
        {/* Section 2 (Placeholder Experience Content) */}
        <section id="section2" className="min-h-screen bg-gray-200 p-8">
          <h1 className="text-3xl font-bold mb-4">Section 2 (Experience)</h1>
          <div className="p-4 bg-blue-200 rounded-lg">
            <h2 className="text-2xl font-bold">Experience Section</h2>
            <p>
              This is placeholder content for the Experience section. Scroll behavior on mobile can be tested here.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Experience;
