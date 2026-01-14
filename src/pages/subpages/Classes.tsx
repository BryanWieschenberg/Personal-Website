import { useRef, useEffect, useState } from 'react';
import { classes } from '../../constants';

const Classes = () => {
    const [items, setItems] = useState(classes.map((item) => ({ ...item, visible: false })));
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setTimeout(() => setVisible(true), 0);
            }
        });

        if (ref.current) {
            observer.observe(ref.current);
        }
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (visible) {
            items.forEach((_, index) => {
                setTimeout(() => {
                    setItems((prev) =>
                        prev.map((item, i) => (i === index ? { ...item, visible: true } : item)),
                    );
                }, index * 50);
            });
        }
    }, [visible]);

    const handleClick = (index: number) => {
        setSelectedIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <>
            <div className="mt-24"></div>
            <img
                src="./assets/images/arrowBig.png"
                className="custom-image mx-auto animate-pulsate"
                style={{ width: '1600px', height: '20px' }}
            />

            <div className="pt-12"></div>

            <h1
                ref={ref}
                className={`roles-text lg:mb-2 lg:pt-5 text-2xl lg:text-6xl font-bold pb-4 drop-shadow-[7px_7px_1.5px_rgba(30,30,160,1)] text-center relative text-[#8580e7] bg-clip-text opacity-100`}
            >
                Coursework:
            </h1>

            <p className="text-center text-sm lg:text-2xl text-white max-w-2xl lg:max-w-6xl mx-auto">
                I have taken a variety of courses that have prepared me to be a software engineer:
            </p>

            <div className="container mx-auto px-16 mt-9">
                <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
                    {items.map((item, index) => (
                        <div key={item.id} className="flex flex-col w-64">
                            <div
                                className={`flex flex-row items-center p-1 bg-[#182a51] rounded-2xl shadow-lg duration-200 hover:scale-110 cursor-pointer 
                ${item.visible ? 'opacity-100 translate-y-0 transition-all duration-300 ease-out' : 'opacity-0 translate-y-5'}
                ${selectedIndex === index ? 'bg-[#294b95]' : 'bg-[#182a51]'}`}
                                onClick={() => handleClick(index)}
                            >
                                <div className={`${item.color} flex-shrink-0 pl-2 text-4xl`}>
                                    {item.icon}
                                </div>

                                <div className="ml-3 flex flex-col">
                                    <span className={`${item.color} font-bold text-xl`}>
                                        {item.id}
                                    </span>
                                    <span className="text-white text-sm mb-1">{item.name}</span>
                                </div>
                            </div>

                            <div
                                className={`transition-all duration-500 ease-in-out overflow-hidden bg-[#333e54] rounded-2xl shadow-lg text-white w-64 mt-2 ${
                                    selectedIndex === index
                                        ? 'max-h-64 opacity-100 py-2'
                                        : 'max-h-0 opacity-0 py-0'
                                }`}
                            >
                                <p className="px-3 text-md font-semibold text-blue-100">
                                    ➤ {item.taken}
                                </p>
                                <p className="px-3 text-sm text-[#cdd5e5]">{item.click}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Classes;
