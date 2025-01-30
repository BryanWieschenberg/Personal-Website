import { useRef, useEffect, useState } from "react";
import { classes } from "../constants";

const AnimatedList = () => {
  const [items, setItems] = useState(classes.map(item => ({ ...item, visible: false })));
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setTimeout(() => setVisible(true), 200);
      }
    });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (visible) {
      items.forEach((_, index) => {
        setTimeout(() => {
          setItems(prev =>
            prev.map((item, i) =>
              i === index ? { ...item, visible: true } : item
            )
          );
        }, index * 30);
      });
    }
  }, [visible]);

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
        className={`text-8xl md:text-8xl font-bold mt-4 drop-shadow-[7px_7px_1.5px_rgba(30,30,160,1)] whitespace-nowrap overflow-visible text-center relative bg-gradient-to-r from-[#0030ff] to-[#c4f9ff] bg-clip-text text-transparent ${
          visible ? 'animate-fadeIn' : 'opacity-0'
        }`}
      >
        Education
      </h1>
      <div className="container mx-auto px-16 mt-16">
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
        {items.map((item, index) => (
  <div key={item.id} className="flex flex-col w-64">
    <div
      className={`flex flex-row items-center p-1 bg-[#182a51] rounded-2xl shadow-lg transition-transform duration-200 hover:scale-110 cursor-pointer 
      ${item.visible ? 'opacity-100 translate-y-0 transition-all duration-250 ease-in-out' : 'opacity-0 translate-y-10'}
      ${selectedIndex === index ? 'bg-[#294b95]' : 'bg-[#182a51]'}`}
      onClick={() => handleClick(index)}
    >
      {/* Left-aligned Icon */}
      <div className={`${item.color} flex-shrink-0 pl-2 text-4xl`}>{item.icon}</div>

      {/* Right-aligned Text */}
      <div className="ml-3 flex flex-col">
        <span className={`${item.color} font-bold text-xl`}>{item.id}</span>
        <span className="text-white text-sm mb-1">{item.name}</span>
      </div>
    </div>

    {/* Expanding Section */}
    <div
      className={`transition-all duration-500 ease-in-out overflow-hidden bg-[#333e54] rounded-2xl shadow-lg text-white w-64 mt-2 ${
        selectedIndex === index ? 'max-h-40 opacity-100 py-2' : 'max-h-0 opacity-0 py-0'
      }`}
    >
      <p className="px-3 text-sm text-[#cdd5e5]">{item.click}</p>
    </div>
  </div>
))}
        </div>
      </div>
    </>
  );
};

export default AnimatedList;
