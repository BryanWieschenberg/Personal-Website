import React from 'react';

interface RoleType {
    title: string;
}

const OpenTo: React.FC = () => {
    const roleTypes: RoleType[] = [
        { title: 'Full-Time' },
        { title: 'Co-Ops' },
        { title: 'Internships' },
        { title: 'Research Roles' },
        { title: 'Contract Roles' },
        { title: 'Part-Time' },
    ];

    return (
        <div className="container mx-auto px-4 lg:px-20 mb-6">
            <h1 className="roles-text lg:mb-2 lg:pt-10 text-xl lg:text-5xl mt-2 font-bold pb-4 drop-shadow-[7px_7px_1.5px_rgba(30,30,160,1)] text-center relative text-[#a1aeff] bg-clip-text">
                I'm Open to:
            </h1>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 lg:gap-4">
                {roleTypes.map((role, index) => (
                    <div
                        key={index}
                        className="group relative p-[3px] rounded-xl bg-gradient-to-b from-[#7064ff] to-[#c4f9ff]
                            shadow-lg hover:backdrop-blur-md hover:brightness-150 hover:scale-[1.05] transition-all duration-300
                            overflow-hidden"
                    >
                        <div className="rounded-[inherit] bg-[#273772] flex items-center justify-center text-center h-8 lg:h-10">
                            <p className="text-white text-sm lg:text-lg font-medium">
                                {role.title}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OpenTo;
