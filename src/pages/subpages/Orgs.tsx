import React, { useEffect, useState, useRef } from "react";
import { animateAbout } from "../../DELanimations";

// Data for each organization, now including an image path
const orgsData = [
  {
    shortName: "KΘΠ",
    name: "Kappa Theta Pi",
    subtitle: "Professional Technology Fraternity",
    role: "Vice President of Technical Development",
    img: "../assets/images/ktp.png",
    points: [
      "Designing and maintaining the fraternity website, ensuring professionality and accessibility to showcase members and events",
      "Leading initiatives to integrate new digital tools, improving communication and collaboration",
      "Hosting tech-learning workshops in nearby educational institutions, fostering discussions on emerging innovations and trends",
    ],
  },
  {
    shortName: "LDP",
    name: "LDP",
    subtitle: "Leadership Development Program",
    role: "Program Facilitator",
    img: "../assets/images/ldp.png",
    points: [
      "Facilitated workshops on leadership skills, helping participants develop effective communication and teamwork",
      "Mentored participants, providing guidance and feedback to support their personal and professional growth",
    ],
  },
  {
    shortName: "ACM",
    name: "ACM",
    subtitle: "Association for Computing Machinery",
    role: "Member",
    img: "../assets/images/acm.png",
    points: [
      "Engaged in a collaborative space for tech enthusiasts to share ideas & learn together",
      "Participated in workshops, coding challenges, and hands-on activities to expand technical knowledge",
      "Contributed to discussions and projects to foster innovation, critical thinking, and teamwork",
    ],
  },
  {
    shortName: "Digit.all",
    name: "Digit.all",
    subtitle: "Diversity & Inclusion Group in Tech for All",
    role: "Member",
    img: "../assets/images/dll.png",
    points: [
      "Broadened my perspective of diversity and inclusion in tech by fostering discussions on experiences, challenges, and advancements in the field",
      "Explored challenges and opportunities for equitable representation in technology",
    ],
  },
];

const Orgs: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Animate the heading or the section when in view
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setTimeout(() => setVisible(true), 200);
        animateAbout();
      }
    });

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Toggle expanded state
  const handleClick = (index: number) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <>
      {/* Large Arrow at the top */}
      <div className="flex flex-col items-center text-center pt-6 lg:pt-12">
        <img
          src="./assets/images/arrowBig.png"
          alt="Arrow"
          className="opacity-0 big-arrow w-[400px] h-[4px] lg:w-[1500px] lg:h-[15px] mb-4 animate-pulsate"
        />
      </div>

      {/* Intro text */}
      <div ref={sectionRef} className={`lg:pt-8 text-center transition-opacity duration-300 ${visible ? 'opacity-100' : 'opacity-0'}`}>
        <p className="text-sm lg:text-2xl text-white max-w-2xl lg:max-w-6xl mx-auto">
          I'm actively involved in many clubs and organizations!
        </p>
      </div>

      {/* Cards Section */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6 lg:px-12">
        {orgsData.map((org, index) => (
          <div key={index} className="flex flex-col">
            {/* Card */}
            <div
              className={`group relative p-[3px] rounded-xl bg-gradient-to-b from-[#7064ff] to-[#c4f9ff]
                shadow-lg transition-all duration-300 hover:scale-[103%] cursor-pointer
                ${visible ? 'opacity-100 translate-y-0 transition-all duration-300 ease-out' : 'opacity-0 translate-y-5'}
                ${expandedIndex === index ? 'bg-[#294b95]' : ''}`}
              onClick={() => handleClick(index)}>
              {/* Inner card */}
              <div className="rounded-[inherit] bg-[#273772] p-4 flex flex-col items-center text-center">
                {/* Circle image */}
                <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full mb-2 overflow-hidden">
                  <img src={org.img} alt={org.name} className="w-full h-full object-cover" />
                </div>

                {/* Org name & subtitle */}
                <h3 className="text-white text-sm lg:text-lg font-semibold">
                  {org.name}
                </h3>
                <p className="text-gray-300 text-xs lg:text-sm">
                  {org.subtitle}
                </p>

                {/* Role / Position */}
                <p className="text-[#a9dafc] text-xs lg:text-sm font-medium mt-1">
                  {org.role}
                </p>
              </div>
            </div>

            {/* Expanding Content Section with gradient background */}
            <div className={`relative p-[3px] rounded-xl bg-gradient-to-b from-[#64627f] to-[#bdc7c8] mt-2 transition-all duration-500 ease-in-out overflow-hidden shadow-lg
                  ${expandedIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
              {/* Inner content with dark background */}
              <div className="rounded-[inherit] bg-[#424958] p-3">
                <ul className="text-gray-200 list-disc list-inside text-sm space-y-1">
                  {org.points.map((point, i) => (
                    <li key={i} className="text-white">{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Orgs;
