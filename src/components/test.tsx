import React, { useRef, useEffect, useState } from 'react';
import { classes, Class } from '../constants';
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
    });

    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  const handleClick = (index: number) => {
    setSelectedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="container mx-auto px-16 mt-16">
      
        <div className="flex flex-wrap gap-4 p-4 justify-center">
        {classes.map((classItem, index) => (
            <motion.div
            key={classItem.id}
            className="p-4 bg-gray-800 text-white rounded-xl shadow-lg text-center cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0, transition: { delay: index * 0.05, duration: 0.5 } }}
            whileHover={{ scale: 1.1 }}
            >
            {classItem.name}
            </motion.div>
        ))}
        </div>
    </div>
  );
};

export default Test;
