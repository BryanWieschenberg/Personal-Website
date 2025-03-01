import React, { useEffect, useState } from "react";
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
  const [expanded, setExpanded] = useState<boolean[]>(() =>
    // Initialize all orgs as not expanded
    new Array(orgsData.length).fill(false)
  );

  useEffect(() => {
    // Animate the heading or the section if needed
    animateAbout();
  }, []);

  // Toggles the expanded state of a particular card
  const toggleExpand = (index: number) => {
    setExpanded((prev) =>
      prev.map((item, i) => (i === index ? !item : item))
    );
  };

  return (
    <>
      {/* Large Arrow at the top */}
      <div className="flex flex-col items-center text-center pt-6 lg:pt-12">
        <img
          src="./assets/images/arrowBig.png"
          alt="Arrow"
          className="big-arrow w-[400px] h-[4px] lg:w-[1500px] lg:h-[15px] mb-4"
        />
      </div>

      {/* Intro text */}
      <p className="lg:pt-8 text-center text-sm lg:text-2xl text-white max-w-2xl lg:max-w-6xl mx-auto">
        I'm actively involved in many clubs and organizations!
      </p>

      {/* Cards Section */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6 lg:px-12">
        {orgsData.map((org, index) => (
          <div
            key={index}
            // Outer container with gradient border
            className="group relative p-[3px] rounded-xl bg-gradient-to-b from-[#7064ff] to-[#c4f9ff]
                       shadow-lg hover:backdrop-blur-md hover:brightness-150 hover:scale-[1.05] transition-all duration-300
                       overflow-hidden cursor-pointer"
            onClick={() => toggleExpand(index)}
          >
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

              {/* Expandable bullet points */}
              <div
                className={`transition-all duration-300 overflow-hidden mt-2
                  ${
                    expanded[index]
                      ? "max-h-[400px] opacity-100"
                      : "max-h-0 opacity-0"
                  }
                `}
              >
                <ul className="text-gray-200 text-left list-disc list-inside text-xs lg:text-sm space-y-1 mt-2">
                  {org.points.map((point, i) => (
                    <li key={i}>{point}</li>
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
