import { FaLaptopCode, FaFileCode, FaGlobe, FaCloudUploadAlt } from 'react-icons/fa';
import { TbMatrix, TbAtom2Filled, TbLogicAnd, TbStack2Filled } from 'react-icons/tb';
import { IoHardwareChip } from 'react-icons/io5';
import { HiDatabase, HiOutlineArrowsExpand } from 'react-icons/hi';
import { PiGraphBold } from 'react-icons/pi';
import { SlGraph } from 'react-icons/sl';
import { RiFunctionFill } from 'react-icons/ri';
import { LuAtom } from 'react-icons/lu';
import { MdNetworkWifi, MdOutlineStorage } from 'react-icons/md';
import { IoStatsChartSharp } from 'react-icons/io5';
import { BiCodeBlock, BiPaintRoll } from 'react-icons/bi';
import { IoIosInformationCircle } from 'react-icons/io';
import { AiOutlineSolution } from 'react-icons/ai';
import { SlChemistry } from 'react-icons/sl';
import { GiArtificialIntelligence } from 'react-icons/gi';

export interface Class {
    id: string;
    name: string;
    taken: string;
    click: string;
    color: string;
    icon: React.ReactElement;
}

export interface Skill {
    type: number; // 0: Programming Languages, 1: Frameworks/Libraries, 2: Tools/Software, 3: Concepts, 4: Soft Skills
    name: string;
    yoe: string;
    desc: string;
    icon: string | React.ReactElement;
}

export interface Work {
    role: string;
    company: string;
    date: string;
    desc: string;
    skills: Record<string, number>;
}

export interface Role {
    text: string;
    icon: React.ReactElement;
    desc: string;
}

export interface Project {
    name: string;
    scale: number; // 0: Large (>4 weeks), 1: Medium (1-4 weeks), 2: Small (<1 week)
    date: string;
    span: string;
    desc: string;
    skills: Record<string, number>;
    github: string;
}

export const classes: Class[] = [
    {
        id: 'CSC 415',
        name: 'Software Engineering',
        taken: 'Fall 2024',
        click: 'Covers software engineering principles, emphasizing collaborative problem-solving, systematic development, and UML, to deliver high-quality software.',
        color: 'text-cyan-400',
        icon: <FaLaptopCode size={40} />,
    },
    {
        id: 'CSC 315',
        name: 'Database Systems',
        taken: 'Spring 2024',
        click: 'Covers database design, modeling, implementation, and management, utilizing PostgreSQL to develop and integrate a robust full-stack web application.',
        color: 'text-cyan-400',
        icon: <HiDatabase size={40} />,
    },
    {
        id: 'CSC 470',
        name: 'Data Science',
        taken: 'Fall 2025',
        click: 'Covers data science with a focus on analysis, cleaning, and modeling using Python, exploring real-world datasets with tools like Pandas, NumPy, scikit-learn, with a Jupyter Notebook workflow.',
        color: 'text-cyan-400',
        icon: <GiArtificialIntelligence size={40} />,
    },
    {
        id: 'CSC 345',
        name: 'Operating Systems',
        taken: 'Spring 2025',
        click: 'Explores operating system theory and implementation, covering memory, processor, file, and device management in the C language.',
        color: 'text-cyan-400',
        icon: <IoHardwareChip size={40} />,
    },
    {
        id: 'CSC 325',
        name: 'Computer Architecture',
        taken: 'Spring 2024',
        click: 'Explores computer architecture through hardware and software, focusing on instruction sets, processor design, logic circuits, assembly programming, and system components like memory, ALUs, and I/O interfaces.',
        color: 'text-cyan-400',
        icon: <TbLogicAnd size={40} />,
    },
    {
        id: 'CSC 445',
        name: 'Theory of Computation',
        taken: 'Spring 2025',
        click: 'Covers the algorithmic theory of computation, exploring computability, complexity, and formal languages through topics like automata, Turing machines, decidability, and NP-completeness.',
        color: 'text-cyan-400',
        icon: <PiGraphBold size={40} />,
    },
    {
        id: 'CSC 335',
        name: 'Analysis of Algorithms',
        taken: 'Fall 2023',
        click: 'Covers fundamental principles of algorithm design and analysis, exploring complexity, data structures, divide and conquer, graph algorithms, dynamic programming, and optimization techniques, in the C language.',
        color: 'text-cyan-400',
        icon: <SlGraph size={40} />,
    },
    {
        id: 'CSC 230',
        name: 'Data Structures',
        taken: 'Spring 2023',
        click: 'Covers data structures, algorithms, and implementation trade-offs, in lower-level object-oriented programming in C++.',
        color: 'text-cyan-400',
        icon: <TbStack2Filled size={40} />,
    },
    {
        id: 'CSC 270',
        name: 'Discrete Structures',
        taken: 'Spring 2023',
        click: 'Introduces fundamental CS concepts with a focus on algorithmic thinking, mathematical reasoning, logic, proofs, sets, functions, graphs, recursion, and finite-state machines.',
        color: 'text-cyan-400',
        icon: <RiFunctionFill size={40} />,
    },
    {
        id: 'CSC 498',
        name: 'Quantum Computing',
        taken: 'Fall 2024 - 2025',
        click: 'Explores quantum computing through PhD faculty-guided research, covering quantum algorithms, qubit manipulation, superposition, entanglement, and computational complexity.',
        color: 'text-cyan-400',
        icon: <LuAtom size={40} />,
    },
    {
        id: 'CSC 360',
        name: 'Computer Networking',
        taken: 'Fall 2023',
        click: 'Explores modern computer and telecommunication networks, covering the TCP/IP model, fiber-optic and mobile communications, multiple access protocols, TCP/UDP, ATM adaptation, HTTP, and network security.',
        color: 'text-cyan-400',
        icon: <MdNetworkWifi size={40} />,
    },
    {
        id: 'CSC 220',
        name: 'Computational Thinking',
        taken: 'Fall 2022',
        click: 'Introductory course focused on algorithmic design, problem-solving, and translating math concepts into code using object-oriented programming in Java.',
        color: 'text-cyan-400',
        icon: <FaFileCode size={40} />,
    },
    {
        id: 'STA 215',
        name: 'Statistics & Probability',
        taken: 'Spring 2024',
        click: 'Covers descriptive statistics, probability, and classical parametric inference, covering estimation, hypothesis testing, regression, and correlation, utilizing R and RStudio.',
        color: 'text-red-400',
        icon: <IoStatsChartSharp size={40} />,
    },
    {
        id: 'MAT 205',
        name: 'Linear Algebra',
        taken: 'Fall 2023',
        click: 'Explores vector spaces and linear systems, covering matrices, transformations, determinants, eigenvalues, and orthogonality, utilizing MATLAB.',
        color: 'text-red-400',
        icon: <TbMatrix size={40} />,
    },
    {
        id: 'MAT 127',
        name: 'Calculus',
        taken: 'Fall 2022',
        click: 'Explores calculus through covering limits, derivatives, differentiation rules, and integrals with real-world applications.',
        color: 'text-red-400',
        icon: <HiOutlineArrowsExpand size={40} />,
    },
    {
        id: 'PHY 201',
        name: 'Physics',
        taken: 'Fall 2024',
        click: 'A calculus-based physics course that covers kinematics, forces, energy, momentum, collisions, and rotational motion, emphasizing problem-solving and critical thinking.',
        color: 'text-purple-400',
        icon: <TbAtom2Filled size={40} />,
    },
    {
        id: 'CHE 201',
        name: 'Chemistry',
        taken: 'Spring 2025',
        click: 'A foundational course exploring atomic structure, chemical bonding, stoichiometry, gases, and energy in reactions.',
        color: 'text-purple-400',
        icon: <SlChemistry size={40} />,
    },
];

export const skills: Skill[] = [
    {
        type: 0,
        name: 'Python',
        yoe: '4',
        desc: 'Computer Networking course, Amazon Web Scraper project, Flashcards App project, Computer Lab Finder project, Turtle Stack Hackathon game',
        icon: '/assets/skills/py.png',
    },
    {
        type: 0,
        name: 'Rust',
        yoe: '0.5',
        desc: 'StreamLine project',
        icon: '/assets/skills/Rust.svg',
    },
    {
        type: 0,
        name: 'C',
        yoe: '1.5',
        desc: 'Operating Systems course, Computer Architecture course, Analysis of Algorithms course, Command Line Shell Interface project',
        icon: '/assets/skills/c.png',
    },
    {
        type: 0,
        name: 'C++',
        yoe: '2',
        desc: 'Data Structures course, Matrix Word Scanner project, AVL Tree Data Analyzer project',
        icon: '/assets/skills/cpp.png',
    },
    {
        type: 0,
        name: 'Java',
        yoe: '5',
        desc: 'Computational Thinking course, Computer Networking course, Name Frequency Analyzer project',
        icon: '/assets/skills/java.png',
    },
    {
        type: 0,
        name: 'HTML',
        yoe: '7',
        desc: 'This website, Software Engineering course, Database Systems course, Livestock Metrics Visualization App project, Dashboard & Applicant Manager project, Video Sharing Service project',
        icon: '/assets/skills/html.png',
    },
    {
        type: 0,
        name: 'CSS',
        yoe: '7',
        desc: 'This website, Software Engineering course, Database Systems course, Livestock Metrics Visualization App project, Dashboard & Applicant Manager project, Video Sharing Service project',
        icon: '/assets/skills/css.png',
    },
    {
        type: 0,
        name: 'JavaScript',
        yoe: '3',
        desc: '',
        icon: '/assets/skills/js.png',
    },
    {
        type: 0,
        name: 'TypeScript',
        yoe: '1',
        desc: 'This website, Video Sharing Service project',
        icon: '/assets/skills/ts.png',
    },
    {
        type: 0,
        name: 'SQL',
        yoe: '1',
        desc: 'Software Engineering course, Database Systems course, WorkWell Partnership Software Engineer role, Livestock Metrics Visualization App project, Dashboard & Applicant Manager project',
        icon: '/assets/skills/sql.png',
    },
    {
        type: 0,
        name: 'Bash',
        yoe: '3',
        desc: 'AI/ML Researcher role, Command Line Shell Interface project',
        icon: '/assets/skills/bash.png',
    },
    {
        type: 0,
        name: 'x86-64 Assembly',
        yoe: '1',
        desc: 'Operating Systems course, Computer Architecture course',
        icon: '/assets/skills/asm.png',
    },
    {
        type: 1,
        name: 'Next.js',
        yoe: '0.5',
        desc: 'Video Sharing Service project',
        icon: '/assets/skills/next.png',
    },
    {
        type: 1,
        name: 'React',
        yoe: '0.5',
        desc: 'This website, Video Sharing Service project',
        icon: '/assets/skills/react.png',
    },
    {
        type: 1,
        name: 'Node.js',
        yoe: '0.5',
        desc: 'Video Sharing Service project',
        icon: '/assets/skills/node.png',
    },
    {
        type: 1,
        name: 'Express.js',
        yoe: '0.5',
        desc: 'Productivity App project',
        icon: '/assets/skills/ex.png',
    },
    {
        type: 1,
        name: 'Ruby on Rails',
        yoe: '0.5',
        desc: 'Software Engineering course, WorkWell Partnership Software Engineer role, Dashboard & Applicant Manager project',
        icon: '/assets/skills/rails.png',
    },
    {
        type: 1,
        name: 'Flask',
        yoe: '1.5',
        desc: 'Database Systems course, Livestock Metrics Visualization App project',
        icon: '/assets/skills/flask.png',
    },
    {
        type: 1,
        name: 'Tailwind CSS',
        yoe: '0.5',
        desc: 'This website',
        icon: '/assets/skills/tw.png',
    },
    {
        type: 1,
        name: 'OpenCV',
        yoe: '0.5',
        desc: '',
        icon: '/assets/skills/OpenCV.svg',
    },
    {
        type: 1,
        name: 'PyTorch',
        yoe: '0.5',
        desc: '',
        icon: '/assets/skills/PyTorch.svg',
    },
    {
        type: 1,
        name: 'NumPy',
        yoe: '0.5',
        desc: '',
        icon: '/assets/skills/NumPy.svg',
    },
    {
        type: 1,
        name: 'Pandas',
        yoe: '0.5',
        desc: '',
        icon: '/assets/skills/pandas.svg',
    },
    {
        type: 1,
        name: 'Matplotlib',
        yoe: '0.5',
        desc: '',
        icon: '/assets/skills/Matplotlib.svg',
    },
    {
        type: 2,
        name: 'Git',
        yoe: '2',
        desc: 'This website, Software Engineering course, Database Systems course, WorkWell Partnership Software Engineer role, Livestock Metrics Visualization App project, Dashboard & Applicant Manager project, Video Sharing Service project, Hackathon Event Scheduler project',
        icon: '/assets/skills/git.png',
    },
    {
        type: 2,
        name: 'GitHub',
        yoe: '4',
        desc: 'Many experiences',
        icon: '/assets/skills/github.png',
    },
    {
        type: 2,
        name: 'PostgreSQL',
        yoe: '1.5',
        desc: 'Software Engineering course, Database Systems course, WorkWell Partnership Software Engineer role, Livestock Metrics Visualization App project, Dashboard & Applicant Manager project',
        icon: '/assets/skills/psql.png',
    },
    {
        type: 2,
        name: 'MongoDB',
        yoe: '0.5',
        desc: 'Various experiences',
        icon: '/assets/skills/mdb.png',
    },
    {
        type: 2,
        name: 'Docker',
        yoe: '0.5',
        desc: 'Video Sharing Service project',
        icon: '/assets/skills/docker.png',
    },
    {
        type: 2,
        name: 'Jupyter',
        yoe: '0.5',
        desc: '',
        icon: '/assets/skills/Jupyter.png',
    },
    {
        type: 2,
        name: 'Robot Operating System (ROS)',
        yoe: '0.5',
        desc: '',
        icon: '/assets/skills/ROS.svg',
    },
    {
        type: 2,
        name: 'Linux',
        yoe: '2',
        desc: 'Software Engineering course, Database Systems course, WorkWell Partnership Software Engineer role, Livestock Metrics Visualization App project, Dashboard & Applicant Manager project',
        icon: '/assets/skills/linux.png',
    },
    {
        type: 2,
        name: 'Ubuntu',
        yoe: '1',
        desc: 'Video Sharing Service project',
        icon: '/assets/skills/ubuntu.png',
    },
    {
        type: 2,
        name: 'Unified Modeling Language',
        yoe: '1.5',
        desc: 'Software Engineering course, Database Systems course, WorkWell Partnership Software Engineer role, Livestock Metrics Visualization App project, Dashboard & Applicant Manager project',
        icon: '/assets/skills/uml.png',
    },
    {
        type: 2,
        name: 'Firebase',
        yoe: '0.5',
        desc: 'Video Sharing Service project',
        icon: '/assets/skills/fb.png',
    },
    {
        type: 2,
        name: 'Google Cloud Platform (GCP)',
        yoe: '0.5',
        desc: 'Video Sharing Service project',
        icon: '/assets/skills/gcp.png',
    },
    {
        type: 2,
        name: 'Amazon Web Services (AWS)',
        yoe: '0.5',
        desc: 'Productivity App project (Elastic Compute Cloud)',
        icon: '/assets/skills/aws.png',
    },
    {
        type: 3,
        name: 'Agile Development',
        yoe: '0.5',
        desc: '',
        icon: '/assets/skills/agile.png',
    },
    {
        type: 3,
        name: 'Secure Software Practices',
        yoe: '0.5',
        desc: '',
        icon: '/assets/skills/ssp.png',
    },
    {
        type: 3,
        name: 'System Design',
        yoe: '0.5',
        desc: '',
        icon: '/assets/skills/sd.png',
    },
    {
        type: 3,
        name: 'RESTful APIs',
        yoe: '0.5',
        desc: '',
        icon: '/assets/skills/rest.png',
    },
    {
        type: 3,
        name: 'Authentication',
        yoe: '0.5',
        desc: '',
        icon: '/assets/skills/auth.png',
    },
    {
        type: 3,
        name: 'OAuth 2.0',
        yoe: '0.5',
        desc: '',
        icon: '/assets/skills/oauth.png',
    },
    {
        type: 3,
        name: 'Object-Oriented Programming (OOP)',
        yoe: '0.5',
        desc: '',
        icon: '/assets/skills/oop.png',
    },
    {
        type: 3,
        name: 'Concurrency & Multithreadding',
        yoe: '0.5',
        desc: '',
        icon: '/assets/skills/conc.png',
    },
    {
        type: 3,
        name: 'Data Structures & Algorithms',
        yoe: '0.5',
        desc: '',
        icon: '/assets/skills/dsa.png',
    },
    {
        type: 3,
        name: 'Database Design',
        yoe: '0.5',
        desc: '',
        icon: '/assets/skills/dd.png',
    },
    {
        type: 3,
        name: 'Continuous Integration & Continuous Delivery (CI/CD)',
        yoe: '0.5',
        desc: '',
        icon: '/assets/skills/cicd.png',
    },
];

export const work: Work[] = [
    {
        role: 'Founder & Product Engineer',
        company: 'AskJet',
        date: 'Jan. 2026 – Present',
        desc: '• Founded and building AskJet end-to-end, owning product vision, architecture, and UX for an AI-powered productivity platform that turns natural language it into clear, reviewable task and calendar actions, always with human approval, full transparency, and a privacy-first design\n• Designing core product systems including human-in-the-loop AI approvals, global undo/redo semantics, offline persistence, and constraint-aware daily planning using React, TypeScript, tRPC, PostgreSQL, and Cloudflare Workers\n• Leading full-stack implementation and prioritized low-friction automation with safety guardrails, designing for sustainable daily planning that reduces decision fatigue while maintaining user trust and control over their schedule',
        skills: {
            TypeScript: 0,
            React: 1,
            tRPC: 1,
            PostgreSQL: 2,
            'Cloudflare Workers': 3,
            'System Design': 3,
            'Database Design': 3,
            'CI/CD': 3,
        },
    },
    {
        role: 'Operations Manager',
        company: 'The College of New Jersey',
        date: 'Aug. 2025 – Present',
        desc: '• Leading a team of 15 staff in key inventory tracking, streamlining office workflows to support 3,000+ campus residents, resulting in a 40% reduction in key distribution errors and improved operational efficiency\n• Standardizing dormitory procedures through transaction logs, weekly audits, monthly team meetings, and emergency coordination protocols, reducing process overhead for staff and ensuring safe conditions across all properties',
        skills: {},
    },
    {
        role: 'Machine Learning Engineer',
        company: 'The College of New Jersey',
        date: 'May 2025 – Jul. 2025',
        desc: '• Engineered a proprietary computer vision application with OpenCV to extract spatial data using trained model at a stable 30 FPS, ensuring low-latency perception and supporting reliable robotic decision-making\n• Trained and optimized a Convolutional Neural Network (CNN) in PyTorch on 40,000+ real-world images (captured and augmented), using NumPy and Matplotlib for analysis, improving accuracy by 50%+ and ensuring resilience to lighting/color variations\n• Implemented a closed-loop pipeline in ROS that transformed vision outputs into precise autonomous actuation, coordinating multiple robots and reducing manual operator intervention by 25% compared to baseline teleoperation',
        skills: {
            Python: 0,
            OpenCV: 1,
            PyTorch: 1,
            Matplotlib: 1,
            ROS: 2,
            Ubuntu: 2,
            'Computer Vision': 3,
            'Neural Networks': 3,
        },
    },
    {
        role: 'Software Engineer',
        company: 'WorkWell Partnership',
        date: 'Aug. 2024 – Dec. 2024',
        desc: '• Spearheaded the development of company-wide system infrastructure as part of TCNJ Software Engineering course, integrating essential components to support a scalable user base\n• Optimized backend performance and integrating PostgreSQL to manage users and securely handle sensitive data\n• Implemented multi-layer encryption and tiered permissions to ensure strict access control at multiple levels\n• Structured the system architecture using UML to create standardized workflows, enhancing modularity, streamlining development processes, and improving long-term maintainability',
        skills: { Ruby: 0, SQL: 0, Rails: 1, Bootstrap: 1, PostgreSQL: 2 },
    },
];

export const roles: Role[] = [
    {
        text: 'Software Engineer',
        icon: <BiCodeBlock size={40} />,
        desc: '• Strong foundation in algorithms, data structures, and system design\n• Skilled at building secure, efficient, and maintainable applications across domains',
    },
    {
        text: 'Full Stack Developer',
        icon: <FaGlobe size={40} />,
        desc: '• Experienced in modern web frameworks like Next.js, databases like PostgreSQL, and cloud platforms like AWS\n• Capable of delivering scalable, end-to-end solutions from concept to deployment',
    },
    {
        text: 'Front-End Engineer',
        icon: <BiPaintRoll size={40} />,
        desc: '• Can design clean, responsive, and accessible interfaces with modern tools like React.js and Tailwind CSS\n• Focused on intuitive user experiences and performance-driven front-end code',
    },
    {
        text: 'Back-End Engineer',
        icon: <MdOutlineStorage size={40} />,
        desc: '• Can develop robust RESTful APIs and server-side systems with security best practices\n• Skilled in data modeling, authentication, and scalable architectures',
    },
    {
        text: 'DevOps Engineer',
        icon: <FaCloudUploadAlt size={40} />,
        desc: '• Can automate build, test, and deployment pipelines for reliability\n• Optimizes infrastructure with containerization and cloud-native workflows',
    },
    {
        text: 'Product Engineer',
        icon: <AiOutlineSolution size={40} />,
        desc: '• Bridges technical implementation with user needs to deliver impactful products\n• Skilled in translating requirements into scalable, maintainable solutions',
    },
    {
        text: 'Systems Engineer',
        icon: <HiOutlineArrowsExpand size={40} />,
        desc: '• Skilled in networking, operating systems, and concurrency concepts\n• Ensures performance and reliability through low-level programming languages like Rust, C, and C++',
    },
    {
        text: 'IT Support Specialist',
        icon: <IoIosInformationCircle size={40} />,
        desc: '• Provides clear, reliable support with strong problem-solving skills\n• Improves workflows and user productivity through diagnostics and troubleshooting',
    },
];

export const projects: Project[] = [
    {
        name: 'AskJet',
        scale: 0,
        date: 'Jan. 2026',
        span: 'Ongoing',
        desc: '• Founded and building AskJet end-to-end, owning product vision, architecture, and UX for an AI-powered productivity platform that turns natural language it into clear, reviewable task and calendar actions, always with human approval, full transparency, and a privacy-first design\n• Designing core product systems including human-in-the-loop AI approvals, global undo/redo semantics, offline persistence, and constraint-aware daily planning using React, TypeScript, tRPC, PostgreSQL, and Cloudflare Workers\n• Leading full-stack implementation and prioritized low-friction automation with safety guardrails, designing for sustainable daily planning that reduces decision fatigue while maintaining user trust and control over their schedule',
        skills: {
            React: 0,
            TypeScript: 0,
            tRPC: 0,
            PostgreSQL: 0,
            'Cloudflare Workers': 0,
        },
        github: 'https://askjet.io',
    },
    {
        name: 'GoalGetter',
        scale: 0,
        date: 'Aug. 2025',
        span: '1 month',
        desc: '• Engineered a production-ready web app with Next.js, TypeScript, Tailwind CSS, and PostgreSQL, integrating tasks and calendar in a dynamic split-screen interface adopted by 30+ active users, with AWS EC2 + Route 53 powering scalable deployment\n• Implemented enterprise-grade authentication with NextAuth.js, OAuth 2.0, bcrypt, SHA-256, and reCAPTCHA v3, reducing unauthorized access by 95%+ and securing sensitive user data through hashed credentials and tokenized email verification\n• Designed a high-performance scheduling engine with cached recurrence expansion and state calculations, improving processing speed by 60% in event-heavy weeks, enabling smooth navigation at all times',
        skills: {
            TypeScript: 0,
            'Next.js': 1,
            'NextAuth.js': 1,
            'Tailwind CSS': 1,
            Bcrypt: 1,
            PostgreSQL: 2,
            'AWS EC2': 2,
            'RESTful API': 4,
            'OAuth 2.0': 4,
            'System Design': 4,
            'Database Design': 4,
            'CI/CD': 4,
        },
        github: 'https://github.com/BryanWieschenberg/GoalGetter',
    },
    {
        name: 'StreamLine',
        scale: 0,
        date: 'Jul. 2025',
        span: '1 month',
        desc: '• Designed and implemented a multithreaded, multi-room chat platform in Rust with RSA-OAEP (SHA-256) end-to-end encryption, featuring robust data modeling, persistent JSON storage, LAN-based real-time messaging, and shared state management via Arc and Mutex\n• Engineered a modular command system with 50+ commands supporting full account and room management, moderation, message rate limiting, and session timeout control\n• Built a secure system architecture with per-command role-based access control (RBAC) and validated control packet handling, reducing unauthorized actions by over 75% in simulated attack and resilience tests',
        skills: {
            Rust: 0,
            RSA: 1,
            'PKCS#8': 1,
            SHA256: 1,
            Mulithreadding: 4,
            'Thread Safety': 4,
            'TCP Sockets': 4,
            RBAC: 4,
            'End-to-End Encryption': 4,
        },
        github: 'https://github.com/BryanWieschenberg/StreamLine',
    },
    {
        name: 'Personal Website',
        scale: 1,
        date: 'Jan. 2025 – Mar. 2025',
        span: '3 months',
        desc: '• Responsive portfolio showcasing skills and projects using TypeScript, React, and Tailwind CSS\n• Modern UI/UX design with dynamic content and interactive animations',
        skills: {
            HTML: 0,
            CSS: 0,
            TypeScript: 0,
            React: 1,
            'Tailwind CSS': 1,
            Vercel: 2,
            'Cloud Deployment': 4,
            Frontend: 4,
        },
        github: 'https://github.com/BryanWieschenberg/Personal-Website',
    },
    {
        name: 'Dashboard and Applicant Manager',
        scale: 1,
        date: 'Sep. 2024 – Nov. 2024',
        span: '3 months',
        desc: '• Full-stack dashboard built with Ruby on Rails and PostgreSQL for task management and application tracking\n• Advanced data filtering and analytics for WorkWell Partnership staff',
        skills: {
            HTML: 0,
            CSS: 0,
            Ruby: 0,
            SQL: 0,
            Rails: 1,
            Boostrap: 1,
            PostgreSQL: 2,
            'Agile Development': 4,
        },
        github: '',
    },
    {
        name: 'Video Sharing Service',
        scale: 1,
        date: 'Oct. 2025 – Nov. 2024',
        span: '1 month',
        desc: '• Engineered a full stack application with a responsive frontend using React, Next.js, and TypeScript, to enable smooth video browsing and playback\n• Constructed a scalable Node.js backend with Docker for efficient deployment and streamlined uploads and processing\n• Integrated Google Cloud for storage and Firebase authentication API for secure and reliable user login\n• Built a modular system architecture for maintenance, scalability, and independent development across components',
        skills: {
            HTML: 0,
            CSS: 0,
            TypeScript: 0,
            React: 1,
            'Next.js': 1,
            'Node.js': 1,
            'Express.js': 1,
            'Google Cloud': 2,
            Firebase: 2,
            Docker: 2,
            DevOps: 4,
            Backend: 4,
        },
        github: 'https://github.com/BryanWieschenberg/Video-Sharing-Service',
    },
    {
        name: 'Livestock Metrics Visualization App',
        scale: 1,
        date: 'Feb. 2024 – Apr. 2024',
        span: '3 months',
        desc: '• Created a web application with PostgreSQL and Flask to enable stakeholders to effectively manage a goat ranch\n• Designed insightful SQL views and queries to identify trends and uncover correlations between key factors\n• Added dynamic visualization to present results from 20+ years of data, improving interaction and data interpretation',
        skills: {
            HTML: 0,
            CSS: 0,
            SQL: 0,
            Flask: 1,
            PostgreSQL: 2,
            'Full-Stack': 4,
        },
        github: 'https://github.com/BryanWieschenberg/Livestock-Metrics-Visualization-App',
    },
    {
        name: 'Neural Networks',
        scale: 2,
        date: 'Jun. 2025',
        span: '3 days',
        desc: '• Built a CNN in PyTorch to classify images, trained on the MNIST dataset\n• Developed an RNN to detect spam messages using NLP techniques\n• Visualized training performance and accuracy using Matplotlib',
        skills: {
            Python: 0,
            PyTorch: 1,
            Matplotlib: 1,
            CNNs: 4,
            'Image Classification': 4,
            RNNs: 4,
            NLP: 4,
        },
        github: 'https://github.com/BryanWieschenberg/Neural-Networks',
    },
    {
        name: 'Command Line Shell Interface',
        scale: 2,
        date: 'Feb. 2025',
        span: '2 weeks',
        desc: '• CLI built in C leveraging system calls (fork(), exec()) to emulate Linux shell commands\n• Supports I/O redirection, piping, and arrow key navigation for command history',
        skills: { C: 0, Bash: 0, Termios: 1, 'Parent/Child Processes': 4 },
        github: '',
    },
    {
        name: 'Flashcards App',
        scale: 2,
        date: 'Feb. 2025',
        span: '1.5 weeks',
        desc: '• Interactive study tool developed in Python for memorizing terms and definitions\n• Implements dynamic content switching with keyboard controls for adaptive learning',
        skills: { Python: 0, Tkinter: 1 },
        github: 'https://github.com/BryanWieschenberg/Flashcards-App',
    },
    {
        name: 'Hackathon Event Scheduler',
        scale: 2,
        date: 'Sep. 2024',
        span: '3 weeks',
        desc: '• Developed a Hackathon scheduler in Ruby, utilizing room and event CSV data to generate optimized scheduling plans\n• Implemented automated room allocation and conflict detection, keeping track of capacity, equipment, and event type',
        skills: { Ruby: 0 },
        github: 'https://github.com/BryanWieschenberg/Hackathon-Scheduling-Tool',
    },
    {
        name: 'Amazon Web Scraper',
        scale: 2,
        date: 'Oct. 2023',
        span: '2 weeks',
        desc: '• Automated web scraper using Python and Selenium for Amazon data extraction\n• Analyzes reviewer bias and creates trusted final conclusions on products',
        skills: { Python: 0, Selenium: 1, 'Beautiful Soup': 1, 'Web Scraping': 4 },
        github: 'https://github.com/BryanWieschenberg/Amazon-Web-Scraper',
    },
    {
        name: 'Turtle Stack',
        scale: 2,
        date: 'Feb. 2025',
        span: '24 hours',
        desc: '• Hackathon game built in Python featuring real-time turtle stacking mechanics\n• Implemented dynamic difficulty and unique turtle properties to create a challenging yet addicting experience',
        skills: { Python: 0, Pygame: 1, 'Game Development': 4 },
        github: 'https://github.com/BryanWieschenberg/Turtle-Stack',
    },
    {
        name: 'Computer Lab Finder',
        scale: 2,
        date: 'Oct. 2024',
        span: '2 days',
        desc: '• Python-based tool for locating TCNJ computer labs by analyzing room occupancy and class/event schedules\n• Outputs availability and scheduling data with an easy-to-read format',
        skills: { Python: 0 },
        github: 'https://github.com/BryanWieschenberg/Computer-Lab-Finder',
    },
    {
        name: 'AVL Tree Data Analyzer',
        scale: 2,
        date: 'Apr. 2023',
        span: '1 week',
        desc: '• Built an extremely optimized and fast AVL tree in C++ in a team of two other students, which analyzes large data sets of randomly-generated names and social security numbers\n• The user can choose which data set they want to be analyzed using the command line, spanning from 15 lines of data to 500,000 lines, with each line containing the operation needed to be performed on that line of data, along with the corresponding name and social security number\n• Implemented three operations for data in the set: insertion, delete, and retrieval, with each line telling the program which operation to perform',
        skills: { 'C++': 0, 'AVL Trees': 4 },
        github: 'https://github.com/BryanWieschenberg/AVL-Tree-Data-Analyzer',
    },
    {
        name: 'Matrix Word Scanner',
        scale: 2,
        date: 'Feb. 2023',
        span: '5 days',
        desc: '• Planned and executed a program built in C++ to scan a matrix of any size in a 2-dimensional array and use the command line to find any amount of words of any length listed and color the successfully found words red\n• Can search for any words listed in the command line after the name of the executable, followed by <, then the matrix file name',
        skills: { 'C++': 0 },
        github: 'https://github.com/BryanWieschenberg/Matrix-Word-Scanner',
    },
    {
        name: 'Name Frequency Analyzer',
        scale: 2,
        date: 'Nov. 2022',
        span: '5 days',
        desc: '• Designed and implemented a program built in Java that analyzes baby name popularities in public data given by the Social Security Administration\n• Sorted a dataset of 2,052,781 lines, with each consisting of names, genders, and number of occurrences through every male and female name with two to fifteen characters from the year 1880 to 2021, and ranked each name by popularity for each year through an optimized object-oriented algorithmn\n• Created six seamless search functions for the user',
        skills: { Java: 0, 'Object-Oriented Programming': 4 },
        github: 'https://github.com/BryanWieschenberg/Name-Frequency-Analyzer',
    },
];
