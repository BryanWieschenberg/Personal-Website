import React, { useEffect, useState, useRef } from "react";

// Data for each certification
const certsData = [
  {
    shortName: "AWS Certified Cloud Practitioner",
    name: "AWS Certified Cloud Practitioner",
    subtitle: "",
    role: "",
    img: "../assets/images/aws.png",
    points: [
      "Work in progress",
    ],
    skills: {

    },
  },
  {
    shortName: "CKAD",
    name: "Certified Kubernetes Application Developer",
    subtitle: "",
    role: "",
    img: "../assets/images/ckad.png",
    points: [
      "Work in progress",
    ],
    skills: {

    },
  },
  {
    shortName: "CompTIA Security+ Certification",
    name: "CompTIA Security+ Certification",
    subtitle: "",
    role: "",
    img: "../assets/images/security.png",
    points: [
      "Work in progress",
    ],
    skills: {

    },
  },
  {
    shortName: "Microsoft Certified: Azure AI Engineer Associate",
    name: "Microsoft Certified: Azure AI Engineer Associate",
    subtitle: "",
    role: "",
    img: "../assets/images/azure-ai.png",
    points: [
      "Work in progress",
    ],
    skills: {

    },
  },
];

const Certs: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // New state for staggered animation on each organization card
  const [orgItems, setOrgItems] = useState(
    certsData.map(item => ({ ...item, visible: false }))
  );

  useEffect(() => {
    // Animate the section when it enters view
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setTimeout(() => setVisible(true), 200);
      }
    });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Stagger each org card's fade-in
  useEffect(() => {
    if (visible) {
      orgItems.forEach((_, index) => {
        setTimeout(() => {
          setOrgItems(prev =>
            prev.map((item, i) =>
              i === index ? { ...item, visible: true } : item
            )
          );
        }, index * 50);
      });
    }
  }, [visible]);

  // Toggle expanded state for the selected organization
  const handleClick = (index: number) => {
    setExpandedIndex(prevIndex => (prevIndex === index ? null : index));
  };

  return (
    <>
      {/* Large Arrow at the top */}
      <div className="flex flex-col items-center text-center pt-6 lg:pt-24">
        <img 
          src="./assets/images/arrowBig.png"
          className="custom-image mx-auto animate-pulsate"
          style={{ width: '1600px', height: '20px' }} 
        />
      </div>

      {/* Intro text */}
      <div ref={sectionRef} className={`pt-3 lg:pt-12 text-center transition-opacity duration-300 ${visible ? 'opacity-100' : 'opacity-0'}`}>
        <h1 className={`roles-text lg:mb-2 lg:pt-5 text-2xl lg:text-6xl font-bold pb-4 drop-shadow-[7px_7px_1.5px_rgba(30,30,160,1)] text-center relative text-[#8580e7] bg-clip-text opacity-100`}>
          Certifications:
        </h1>

        <p className="text-sm lg:text-2xl text-white max-w-2xl lg:max-w-6xl mx-auto">
          I'm actively persuing several certifications to greatly enhance my skills!
        </p>
      </div>

      {/* Cards Section */}
      <div className="mt-8 flex flex-wrap justify-center gap-6 px-6 lg:px-12">
        {orgItems.map((org, index) => (
          <div key={index} className="flex flex-col w-80">
            {/* Card */}
            <div
              className={`group relative p-[3px] rounded-2xl bg-gradient-to-b from-[#7064ff] to-[#c4f9ff]
                shadow-lg transition-all duration-300 hover:scale-[103%] cursor-pointer
                ${org.visible ? 'opacity-100 translate-y-0 transition-all duration-300 ease-out' : 'opacity-0 translate-y-5'}
                ${expandedIndex === index ? 'bg-[#294b95]' : ''}`}
              onClick={() => handleClick(index)}
            >
              {/* Inner card */}
              <div className="rounded-xl bg-[#273772] p-4 flex flex-col items-center text-center h-[160px] lg:h-[200px]">
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
            <div className={`relative p-[3px] rounded-2xl bg-gradient-to-b from-[#64627f] to-[#bdc7c8] mt-2 transition-all duration-500 ease-in-out overflow-hidden shadow-lg
                  ${expandedIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
              {/* Inner content with dark background */}
              <div className="rounded-xl bg-[#424958] p-3">
                <ul className="text-gray-200 list-disc list-inside text-sm space-y-1">
                  {org.points.map((point, i) => (
                    <li key={i} className="text-white">{point}</li>
                  ))}
                </ul>
                {org.skills && Object.keys(org.skills).length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-2 overflow-x-auto">
                    {Object.entries(org.skills).map(([skill, level], i) => {
                      let bgColor;
                      switch (level) {
                        case 0:
                          bgColor = 'bg-blue-600';
                          break;
                        case 1:
                          bgColor = 'bg-yellow-600';
                          break;
                        case 2:
                          bgColor = 'bg-green-600';
                          break;
                        case 3:
                          bgColor = 'bg-red-600';
                          break;
                      }
                      return (
                        <span key={i} className={`${bgColor} px-2 py-1 text-white rounded-full border border-white text-xs inline-block min-w-0 max-w-full truncate`}>
                          {skill}
                        </span>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Certs;
