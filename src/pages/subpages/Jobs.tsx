import React, { useState, useEffect, useRef } from 'react';
import { roles } from '../../constants';

const Jobs: React.FC = () => {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
    const [jobItems, setJobItems] = useState(roles.map((role) => ({ ...role, visible: false })));
    const containerRef = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setTimeout(() => setVisible(true), 0);
            }
        });
        if (containerRef.current) {
            observer.observe(containerRef.current);
        }
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (visible) {
            jobItems.forEach((_, index) => {
                setTimeout(() => {
                    setJobItems((prev) =>
                        prev.map((job, i) => (i === index ? { ...job, visible: true } : job)),
                    );
                }, index * 50);
            });
        }
    }, [visible]);

    const handleClick = (index: number) => {
        setSelectedIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <div className="container mx-auto px-4 lg:px-20 mb-6" ref={containerRef}>
            <img
                src="./assets/images/arrowBig.png"
                className="custom-image mx-auto animate-pulsate"
                style={{ width: '1600px', height: '20px' }}
            />

            <div className="mt-20"></div>

            <h1
                className={`roles-text lg:mb-2 lg:pt-5 text-2xl lg:text-6xl font-bold pb-4 drop-shadow-[7px_7px_1.5px_rgba(30,30,160,1)] text-center relative text-[#8580e7] bg-clip-text opacity-100`}
            >
                Jobs I'm Qualified For:
            </h1>
            <div className="container mx-auto px-16 mt-16">
                <div className="flex flex-wrap justify-center gap-3">
                    {jobItems.map((job, index) => (
                        <div
                            key={index}
                            className={`flex flex-col w-[240px] ${job.visible ? 'opacity-100 translate-y-0 transition-all duration-300 ease-out' : 'opacity-0 translate-y-5'}`}
                        >
                            {/* Job Card */}
                            <div
                                className={`flex flex-row items-center p-3 bg-[#1d3d81] mb-[4px] rounded-2xl shadow-lg duration-200 hover:scale-105 cursor-pointer ${selectedIndex === index ? 'bg-[#4c6cb3]' : 'bg-[#182a51]'}`}
                                onClick={() => handleClick(index)}
                            >
                                <div className="text-4xl text-white">{job.icon}</div>
                                <div className="ml-3 flex flex-col">
                                    <span className="font-bold text-md text-white">{job.text}</span>
                                </div>
                            </div>
                            {/* Expanding Description */}
                            <div
                                className={`transition-all duration-500 ease-in-out overflow-hidden bg-[#333e54] rounded-2xl shadow-lg text-white w-[240px] mt-2 ${selectedIndex === index ? 'max-h-64 opacity-100 py-2' : 'max-h-0 opacity-0 py-0'}`}
                            >
                                <p className="px-3 text-sm text-blue-100 whitespace-pre-line">
                                    {job.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <img
                src="./assets/images/arrowBig.png"
                className="mt-20 lg:mt-24 custom-image mx-auto animate-pulsate"
                style={{ width: '1600px', height: '20px' }}
            />
        </div>
    );
};

export default Jobs;
