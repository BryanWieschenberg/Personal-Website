import React, { useEffect, useState, useRef } from "react";
import { animateAbout } from "../animations";

// Data for each organization
const orgsData = [
  {
    shortName: "KΘΠ",
    name: "Kappa Theta Pi",
    subtitle: "Professional Technology Fraternity",
    role: "Vice President of Technical Development",
    points: [
      "Designing and maintaining the fraternity website, ensuring a user-friendly experience",
      "Leading monthly workshops focusing on new digital innovations, fostering knowledge sharing",
      "Actively mentoring new members to ensure smooth onboarding and personal growth",
      "Collaborating with industry professionals, alumni, and fellow members to cultivate professional relationships",
      "Coordinating hackathon teams, bridging cross-functional skills and technical leadership",
    ],
  },
  {
    shortName: "LDP",
    name: "LDP",
    subtitle: "Leadership Development Program",
    role: "Program Facilitator",
    points: [
      "Facilitated workshops on leadership skills, helping participants develop effective communication and teamwork",
      "Mentored participants, providing guidance on balancing personal and professional growth",
      "Coordinated group activities to encourage peer collaboration and real-world problem-solving",
    ],
  },
  {
    shortName: "ACM",
    name: "Association for Computing Machinery",
    subtitle: "Association for Computing Machinery",
    role: "Member",
    points: [
      "Engaged in a collaborative space for tech enthusiasts to share ideas and best practices",
      "Participated in workshops, coding challenges, and networking events",
      "Contributed to discussions on trending topics and cutting-edge research",
    ],
  },
  {
    shortName: "DIGITall",
    name: "Diversity & Inclusion Group in Tech for All",
    subtitle: "Diversity & Inclusion Group in Tech for All",
    role: "Member",
    points: [
      "Broadened my perspective of diversity and inclusion by fostering discussions on experiences, challenges, and solutions",
      "Networked with professionals and peers from diverse backgrounds for equitable representation in technology",
      "Advocated for inclusive hiring practices and resource allocation within student-led tech initiatives",
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
          className="big-arrow w-[400px] h-[4px] lg:w-[1500px] lg:h-[15px] mb-4 animate-pulsate"
        />
      </div>

      {/* Intro text */}
      <div ref={sectionRef} className={`lg:pt-8 text-center transition-opacity duration-300 ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}>
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
                shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer
                ${visible ? 'opacity-100 translate-y-0 transition-all duration-300 ease-out' : 'opacity-0 translate-y-5'}
                ${expandedIndex === index ? 'bg-[#294b95]' : ''}`}
              onClick={() => handleClick(index)}>
              {/* Inner card */}
              <div className="rounded-[inherit] bg-[#273772] p-4 flex flex-col items-center text-center">
                {/* Big circle icon or text */}
                <div className="w-16 h-16 lg:w-20 lg:h-20 bg-[#1e2a4a] rounded-full flex items-center justify-center text-white text-xl lg:text-2xl font-bold mb-2">
                  {org.shortName}
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
            <div className={`relative p-[3px] rounded-xl bg-gradient-to-b from-[#7064ff] to-[#c4f9ff] mt-2
                  transition-all duration-500 ease-in-out overflow-hidden shadow-lg
                  ${expandedIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
              {/* Inner content with dark background */}
              <div className="rounded-[inherit] bg-[#273772] p-3">
                <ul className="text-gray-200 list-disc list-inside text-xs space-y-1">
                  {org.points.map((point, i) => (
                    <li key={i} className="text-[#cdd5e5]">{point}</li>
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