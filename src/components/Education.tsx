import { useRef, useEffect, useState } from 'react';
import { classes } from '../constants';
import { motion } from "framer-motion";

const Test = () => {
  const ref = useRef<HTMLHeadingElement>(null);
  const [visible, setVisible] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setTimeout(() => setVisible(true), 200);
      }
    { /*},
    {
      root: null, // Uses the viewport as the root
      rootMargin: "-20% 0px -20% 0px", // Makes the trigger range smaller
      threshold: 0.6, // At least 60% of the element must be visible */}
    }
  );

  if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  const handleClick = (index: number) => {
    setSelectedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <>
      <div className="mt-20"></div>

      <img
        src="./assets/images/arrowBig.png"
        className="custom-image mx-auto"
        style={{ width: '1600px', height: '20px' }}
      />
      <div className="mt-20"></div>

      <h1
        ref={ref}
        className="text-8xl md:text-8xl font-bold mt-4 drop-shadow-[7px_7px_1.5px_rgba(30,30,160,1)] whitespace-nowrap overflow-visible text-center relative bg-gradient-to-r from-[#0030ff] to-[#c4f9ff] bg-clip-text text-transparent"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0px)" : "translateY(100px)",
          transition: "opacity 0.5s ease-out, transform 0.5s ease-out",
        }}
      >
        Education
      </h1>

      <div className="container mx-auto px-16 mt-16">
        <div className="flex flex-wrap justify-center gap-4">
          {classes.map((classItem, index) => (
            <div key={classItem.id} className="flex flex-col w-64">
              {/* Motion Card */}
              <motion.div
                className="flex items-center p-2 bg-[#182a51] rounded-2xl shadow-lg cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 50 }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                whileHover={{ scale: 1.1 }}
                onClick={() => handleClick(index)}
                style={{
                  pointerEvents: visible ? "auto" : "none",
                }}
              >
                <div className={`${classItem.color} flex-shrink-0`}>{classItem.icon}</div>
                <div className="ml-2">
                  <div className="flex items-center space-x-2">
                    <span className={`${classItem.color} font-bold text-xl`}>{classItem.id}</span>
                  </div>
                  <span className="text-white text-sm block leading-tight">{classItem.name}</span>
                </div>
              </motion.div>

              {/* Dropdown Content */}
              <motion.div
                className="overflow-hidden bg-[#333e54] rounded-2xl shadow-lg text-white w-64 mt-1"
                initial={{ maxHeight: 0, opacity: 0 }}
                animate={
                  selectedIndex === index
                    ? { maxHeight: "160px", opacity: 1, padding: "12px" }
                    : { maxHeight: 0, opacity: 0, padding: 0 }
                }
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <p className="px-3">{classItem.click}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Test;
