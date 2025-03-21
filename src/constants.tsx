import { FaLaptopCode, FaFileCode, FaGamepad, FaMicrophoneAlt, FaUsers, FaHandshake, FaLightbulb, FaSyncAlt, FaTasks, FaChalkboardTeacher, FaClock, FaShieldAlt, FaSpa, FaGlobe, FaCloudUploadAlt } from 'react-icons/fa';
import { TbMatrix, TbAtom2Filled, TbLogicAnd, TbStack2Filled } from "react-icons/tb";
import { IoHardwareChip, IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { HiDatabase, HiOutlineArrowsExpand } from "react-icons/hi";
import { PiGraphBold } from "react-icons/pi";
import { SlGraph } from "react-icons/sl";
import { RiFunctionFill } from "react-icons/ri";
import { LuAtom } from "react-icons/lu";
import { MdNetworkWifi, MdHearing, MdVerifiedUser, MdOutlineStorage, MdTouchApp } from "react-icons/md";
import { IoStatsChartSharp } from "react-icons/io5";
import { BiCodeBlock, BiPaintRoll } from "react-icons/bi";
import { IoIosInformationCircle } from "react-icons/io";
import { BsClipboardDataFill } from "react-icons/bs";
import { AiOutlineCrown, AiOutlineLayout } from "react-icons/ai";

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
  yoe: number;
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
  { id: "CSC 415", name: "Software Engineering", taken: "Fall 2024", click: "Covers software engineering principles, emphasizing collaborative problem-solving, systematic development, and UML, to deliver high-quality software.", color: "text-cyan-400", icon: <FaLaptopCode  size={40} /> },
  { id: "CSC 315", name: "Database Systems", taken: "Spring 2024", click: "Covers database design, modeling, implementation, and management, utilizing PostgreSQL to develop and integrate a robust full-stack web application.", color: "text-cyan-400", icon: <HiDatabase size={40} /> },
  { id: "CSC 345", name: "Operating Systems", taken: "Spring 2025", click: "Explores operating system theory and implementation, covering memory, processor, file, and device management in the C language.", color: "text-cyan-400", icon: <IoHardwareChip size={40} /> },
  { id: "CSC 325", name: "Computer Architecture", taken: "Spring 2024", click: "Explores computer architecture through hardware and software, focusing on instruction sets, processor design, logic circuits, assembly programming, and system components like memory, ALUs, and I/O interfaces.", color: "text-cyan-400", icon: <TbLogicAnd size={40} /> },
  { id: "CSC 445", name: "Theory of Computation", taken: "Spring 2025", click: "Covers the algorithmic theory of computation, exploring computability, complexity, and formal languages through topics like automata, Turing machines, decidability, and NP-completeness.", color: "text-cyan-400", icon: <PiGraphBold size={40} /> },
  { id: "CSC 335", name: "Analysis of Algorithms", taken: "Fall 2023", click: "Covers fundamental principles of algorithm design and analysis, exploring complexity, data structures, divide and conquer, graph algorithms, dynamic programming, and optimization techniques, in the C language.", color: "text-cyan-400", icon: <SlGraph size={40} /> },
  { id: "CSC 230", name: "Data Structures", taken: "Spring 2023", click: "Covers data structures, algorithms, and implementation trade-offs, in lower-level object-oriented programming in C++.", color: "text-cyan-400", icon: <TbStack2Filled size={40} /> },
  { id: "CSC 270", name: "Discrete Structures", taken: "Spring 2023", click: "Introduces fundamental CS concepts with a focus on algorithmic thinking, mathematical reasoning, logic, proofs, sets, functions, graphs, recursion, and finite-state machines.", color: "text-cyan-400", icon: <RiFunctionFill size={40} /> },
  { id: "CSC 298", name: "Quantum Computing", taken: "Fall 2024 / Spring 2025", click: "Explores quantum computing through PhD faculty-guided research, covering quantum algorithms, qubit manipulation, superposition, entanglement, and computational complexity.", color: "text-cyan-400", icon: <LuAtom size={40} /> },
  { id: "CSC 360", name: "Computer Networking", taken: "Fall 2023", click: "Explores modern computer and telecommunication networks, covering the TCP/IP model, fiber-optic and mobile communications, multiple access protocols, TCP/UDP, ATM adaptation, HTTP, and network security.", color: "text-cyan-400", icon: <MdNetworkWifi size={40} /> },
  { id: "CSC 220", name: "Computational Thinking", taken: "Fall 2022", click: "Introductory course focused on algorithmic design, problem-solving, and translating math concepts into code using object-oriented programming in Java.", color: "text-cyan-400", icon: <FaFileCode size={40} /> },
  { id: "STA 215", name: "Statistics & Probability", taken: "Spring 2024", click: "Covers descriptive statistics, probability, and classical parametric inference, covering estimation, hypothesis testing, regression, and correlation, utilizing R and RStudio.", color: "text-red-400", icon: <IoStatsChartSharp size={40} /> },
  { id: "MAT 205", name: "Linear Algebra", taken: "Fall 2023", click: "Explores vector spaces and linear systems, covering matrices, transformations, determinants, eigenvalues, and orthogonality, utilizing MATLAB.", color: "text-red-400", icon: <TbMatrix size={40} /> },
  { id: "MAT 127", name: "Calculus", taken: "Fall 2022", click: "Explores calculus through covering limits, derivatives, differentiation rules, and integrals with real-world applications.", color: "text-red-400", icon: <HiOutlineArrowsExpand size={40} /> },
  { id: "PHY 201", name: "Physics", taken: "Fall 2024", click: "A calculus-based physics course that covers kinematics, forces, energy, momentum, collisions, and rotational motion, emphasizing problem-solving and critical thinking.", color: "text-purple-400", icon: <TbAtom2Filled size={40} /> },
];

export const skills: Skill[] = [
  { type: 0, name: "C", yoe: 1.5, desc: "Operating Systems course, Computer Architecture course, Analysis of Algorithms course, Command Line Shell Interface project", icon: "/assets/skills/c.png" },
  { type: 0, name: "C++", yoe: 2, desc: "Data Structures course, Matrix Word Scanner project, AVL Tree Data Analyzer project", icon: "/assets/skills/cpp.png" },
  { type: 0, name: "C#", yoe: 0.5, desc: "Various experiences", icon: "/assets/skills/cs.png" },
  { type: 0, name: "Java", yoe: 5, desc: "Computational Thinking course, Computer Networking course, Name Frequency Analyzer project", icon: "/assets/skills/java.png" },
  { type: 0, name: "Python", yoe: 4, desc: "Computer Networking course, Amazon Web Scraper project, Flashcards App project, Computer Lab Finder project, Turtle Stack Hackathon game", icon: "/assets/skills/py.png" },
  { type: 0, name: "Ruby", yoe: 0.5, desc: "Software Engineering course, WorkWell Partnership Software Engineer role, Dashboard & Applicant Manager project, Hackathon Event Scheduler project", icon: "/assets/skills/rb.png" },
  { type: 0, name: "HTML", yoe: 7, desc: "This website, Software Engineering course, Database Systems course, Livestock Metrics Visualization App project, Dashboard & Applicant Manager project, Video Sharing Service project, TCNJ Kappa Theta Pi website", icon: "/assets/skills/html.png" },
  { type: 0, name: "CSS", yoe: 7, desc: "This website, Software Engineering course, Database Systems course, Livestock Metrics Visualization App project, Dashboard & Applicant Manager project, Video Sharing Service project, TCNJ Kappa Theta Pi website", icon: "/assets/skills/css.png" },
  { type: 0, name: "JavaScript", yoe: 3, desc: "TCNJ Kappa Theta Pi website", icon: "/assets/skills/js.png" },
  { type: 0, name: "TypeScript", yoe: 1, desc: "This website, Video Sharing Service project", icon: "/assets/skills/ts.png" },
  { type: 0, name: "SQL", yoe: 1.5, desc: "Software Engineering course, Database Systems course, WorkWell Partnership Software Engineer role, Livestock Metrics Visualization App project, Dashboard & Applicant Manager project", icon: "/assets/skills/sql.png" },
  { type: 0, name: "ARM/x86 Assembly", yoe: 1, desc: "Operating Systems course, Computer Architecture course", icon: "/assets/skills/asm.png" },
  { type: 1, name: "React", yoe: 0.5, desc: "This website, Video Sharing Service project", icon: "/assets/skills/react.png" },
  { type: 1, name: "Next.js", yoe: 0.5, desc: "Video Sharing Service project", icon: "/assets/skills/next.png" },
  { type: 1, name: "Vue.js", yoe: 0.5, desc: "This website", icon: "/assets/skills/vue.png" },
  { type: 1, name: "Node.js", yoe: 0.5, desc: "Video Sharing Service project", icon: "/assets/skills/node.png" },
  { type: 1, name: "Express.js", yoe: 0.5, desc: "Productivity App project", icon: "/assets/skills/ex.png" },
  { type: 1, name: "Rails", yoe: 0.5, desc: "Software Engineering course, WorkWell Partnership Software Engineer role, Dashboard & Applicant Manager project", icon: "/assets/skills/rails.png" },
  { type: 1, name: "Flask", yoe: 1.5, desc: "Database Systems course, Livestock Metrics Visualization App project", icon: "/assets/skills/flask.png" },
  { type: 1, name: "Django", yoe: 1, desc: "Various experiences", icon: "/assets/skills/dj.png" },
  { type: 1, name: "Selenium", yoe: 1.5, desc: "Computer Networking course, Amazon Web Scraper project", icon: "/assets/skills/se.png" },
  { type: 1, name: "Tailwind CSS", yoe: 0.5, desc: "This website", icon: "/assets/skills/tw.png" },
  { type: 1, name: "GSAP", yoe: 0.5, desc: "Various experiences", icon: "/assets/skills/gsap.png" },
  { type: 1, name: "Bootstrap", yoe: 0.5, desc: "Software Engineering course, WorkWell Partnership Software Engineer role, Dashboard & Applicant Manager project", icon: "/assets/skills/bs.png" },
  { type: 2, name: "Git", yoe: 2, desc: "This website, Software Engineering course, Database Systems course, WorkWell Partnership Software Engineer role, Livestock Metrics Visualization App project, Dashboard & Applicant Manager project, Video Sharing Service project, Hackathon Event Scheduler project, TCNJ Kappa Theta Pi website", icon: "/assets/skills/git.png" },
  { type: 2, name: "Jira", yoe: 1, desc: "Various experiences", icon: "/assets/skills/jira.png" },
  { type: 2, name: "Visual Studio Code", yoe: 4, desc: "Many experiences", icon: "/assets/skills/vscode.png" },
  { type: 2, name: "PostgreSQL", yoe: 1.5, desc: "Software Engineering course, Database Systems course, WorkWell Partnership Software Engineer role, Livestock Metrics Visualization App project, Dashboard & Applicant Manager project", icon: "/assets/skills/psql.png" },
  { type: 2, name: "MongoDB", yoe: 0.5, desc: "Various experiences", icon: "/assets/skills/mdb.png" },
  { type: 2, name: "Unified Modeling Language", yoe: 1.5, desc: "Software Engineering course, Database Systems course, WorkWell Partnership Software Engineer role, Livestock Metrics Visualization App project, Dashboard & Applicant Manager project", icon: "/assets/skills/uml.png" },
  { type: 2, name: "Amazon Web Services", yoe: 0.5, desc: "Productivity App project", icon: "/assets/skills/aws.png" },
  { type: 2, name: "Google Cloud", yoe: 0.5, desc: "Video Sharing Service project", icon: "/assets/skills/gcp.png" },
  { type: 2, name: "Firebase", yoe: 0.5, desc: "Video Sharing Service project", icon: "/assets/skills/fb.png" },
  { type: 2, name: "Docker", yoe: 0.5, desc: "Video Sharing Service project", icon: "/assets/skills/docker.png" },
  { type: 2, name: "OpenAI API", yoe: 0.5, desc: "Productivity App project", icon: "/assets/skills/openai.png" },
  { type: 2, name: "Microsoft Excel", yoe: 5, desc: "Many experiences", icon: "/assets/skills/excel.png" },
  { type: 2, name: "Unity", yoe: 0.5, desc: "Various experiences", icon: "/assets/skills/unity.png" },
  { type: 2, name: "MATLAB", yoe: 1.5, desc: "Linear Algebra course", icon: "/assets/skills/matlab.png" },
  { type: 2, name: "R", yoe: 1, desc: "Statistics & Probability course", icon: "/assets/skills/r.png" },
  { type: 2, name: "Wireshark", yoe: 1, desc: "Computer Networking course", icon: "/assets/skills/ws.png" },
  { type: 2, name: "Windows", yoe: 10, desc: "Many experiences", icon: "/assets/skills/windows.png" },
  { type: 2, name: "MacOS", yoe: 2, desc: "Various experiences", icon: "/assets/skills/macos.png" },
  { type: 2, name: "Linux", yoe: 2, desc: "Software Engineering course, Database Systems course, WorkWell Partnership Software Engineer role, Livestock Metrics Visualization App project, Dashboard & Applicant Manager project", icon: "/assets/skills/linux.png" },
  { type: 2, name: "Ubuntu", yoe: 1, desc: "Video Sharing Service project", icon: "/assets/skills/ubuntu.png" },
  { type: 3, name: "Communication", yoe: 10, desc: "Kappa Theta Pi Professional Technology Fraternity, Leadership Development Program, Association for Computing Machinery, Diversity & Inclusion Group in Tech for All, Software Engineering course, Database Systems course, WorkWell Partnership Software Engineer role, TCNJ Computer Science Mentor role, TCNJ Quantum Computing Research Assistant role, TCNJ Operations Assistant role, TCNJ Residential Advisor role, Livestock Metrics Visualization App project, Dashboard & Applicant Manager project, many more", icon: <IoChatbubbleEllipsesOutline size={40} /> },
  { type: 3, name: "Active Listening", yoe: 10, desc: "Many experiences", icon: <MdHearing size={40} /> },
  { type: 3, name: "Public Speaking", yoe: 8, desc: "TCNJ Residential Advisor role, many more", icon: <FaMicrophoneAlt size={40} /> },
  { type: 3, name: "Collaboration", yoe: 10, desc: "Kappa Theta Pi Professional Technology Fraternity, Leadership Development Program, Association for Computing Machinery, Diversity & Inclusion Group in Tech for All, Software Engineering course, Database Systems course, WorkWell Partnership Software Engineer role, TCNJ Computer Science Mentor role, TCNJ Quantum Computing Research Assistant role, TCNJ Operations Assistant role, TCNJ Residential Advisor role, Livestock Metrics Visualization App project, Dashboard & Applicant Manager project, many more", icon: <FaUsers size={40} /> },
  { type: 3, name: "Conflict Resolution", yoe: 6, desc: "TCNJ Residential Advisor role, TCNJ Operations Assistant role, many more", icon: <FaHandshake size={40} /> },
  { type: 3, name: "Innovation", yoe: 4, desc: "Many experiences", icon: <FaLightbulb size={40} /> },
  { type: 3, name: "Adaptability", yoe: 4, desc: "TCNJ Residential Advisor role, TCNJ Operations Assistant role, many more", icon: <FaSyncAlt size={40} /> },
  { type: 3, name: "Leadership", yoe: 8, desc: "Kappa Theta Pi Professional Technology Fraternity, Leadership Development Program, Association for Computing Machinery, Diversity & Inclusion Group in Tech for All, TCNJ Computer Science Mentor role, TCNJ Residential Advisor role, many more", icon: <AiOutlineCrown size={40} /> },
  { type: 3, name: "Management", yoe: 2, desc: "Many experiences", icon: <FaTasks size={40} /> },
  { type: 3, name: "Mentorship", yoe: 2, desc: "Kappa Theta Pi Professional Technology Fraternity, Leadership Development Program, TCNJ Computer Science Mentor role", icon: <FaChalkboardTeacher size={40} /> },
  { type: 3, name: "Time Management", yoe: 5, desc: "Many experiences", icon: <FaClock size={40} /> },
  { type: 3, name: "Resilience", yoe: 7, desc: "Many experiences", icon: <FaShieldAlt size={40} /> },
  { type: 3, name: "Integrity", yoe: 10, desc: "Many experiences", icon: <MdVerifiedUser size={40} /> },
  { type: 3, name: "Stress Management", yoe: 5, desc: "Many experiences", icon: <FaSpa size={40} /> },
];

export const work: Work[] = [
  { role: "Software Engineer", company: "WorkWell Partnership", date: "Sep. 2024 – Dec. 2024", desc: "• Spearheaded the development of company-wide system infrastructure as part of TCNJ Software Engineering course, integrating essential components to support a scalable user base\n• Optimized backend performance and integrating PostgreSQL to manage users and securely handle sensitive data\n• Implemented multi-layer encryption and tiered permissions to ensure strict access control at multiple levels\n• Structured the system architecture using UML to create standardized workflows, enhancing modularity, streamlining development processes, and improving long-term maintainability", skills: {"Ruby": 0, "SQL": 0, "Rails": 1, "Bootstrap": 1, "PostgreSQL": 2, "Git": 2, "UML": 2, "Linux": 2, "Collaboration": 3, "Communication": 3} },
  { role: "Computer Science Mentor", company: "The College of New Jersey", date: "Dec. 2024 – Present", desc: "• Mentoring students by offering guidance on foundational concepts, coursework, and career development, while fostering a supportive and inclusive environment\n• Promoting effective problem-solving, time management, and project completion strategies to drive academic and personal success", skills: {"Java": 0, "C++": 0, "C": 0, "Python": 0, "Leadership": 3, "Mentorship": 3, "Collaboration": 3, "Communication": 3} },
  { role: "Quantum Computing Research Assistant", company: "The College of New Jersey", date: "Aug. 2024 – Present", desc: "• Collaborating alongside PhD faculty to analyze quantum computing performance against classical approaches\n• Exploring foundational quantum algorithms and their applications to enhance computational efficiency\n• Applying quantum computing knowledge to evaluate algorithm scalability, providing practical insights for data analysis and complex system optimization", skills: {"Collaboration": 3, "Communication": 3} },
  { role: "Operations Assistant", company: "The College of New Jersey", date: "Aug. 2023 – Present", desc: "• Managing a complex database overseeing 4,000+ campus dormitory assignments, ensuring precise tracking\n• Responding to and resolving critical incidents involving system operations to maintain campus security and safety\n• Streamlined data modification processes by implementing protocols for efficient living space access updates", skills: {"Adaptability": 3, "Conflict Resolution": 3, "Collaboration": 3, "Communication": 3} },
  { role: "Residential Advisor", company: "The College of New Jersey", date: "Aug. 2023 – Present", desc: "• Leading an inclusive community of 100+ residents by providing support, connecting students to resources, and enforcing policies through systemized documentation\n• Organized 20+ community-building events, increasing engagement and fostering supportive and inclusive environments", skills: {"Leadership": 3, "Public Speaking": 3, "Mentorship": 3, "Adaptability": 3, "Conflict Resolution": 3, "Collaboration": 3, "Communication": 3} }
];

export const roles: Role[] = [
  { text: "Software Engineer", icon: <BiCodeBlock size={40} />, desc: "• Programming expertise (C, C++, Python, Java, etc.) with solid CS fundamentals\n• Proven agile collaborator delivering scalable, maintainable code using UML and Git"},
  { text: "Full Stack Developer", icon: <FaGlobe size={40} /> , desc: "• Expert end-to‑end developer using modern front‑end and back‑end tech\n• Strong database and version control skills"},
  { text: "Front-End Engineer", icon: <BiPaintRoll size={40} />, desc: "• Extensive experience in building responsive UI with HTML, CSS, TypeScript, React, and Vue.js\n• Delivering user-centric designs that prioritize usability, accessibility, and seamless interactions" },
  { text: "Back-End Engineer", icon: <MdOutlineStorage size={40} />, desc: "• Skilled in building robust server‑side apps with Node.js, Flask, Django, and Rails\n• Extensive experience in database design, API architecture, and cloud integrations" },
  { text: "Data Analyst", icon: <BsClipboardDataFill size={40} />, desc: "• Proficient in SQL, PostgreSQL, Python, and R for data extraction and visualization\n• Transforms large datasets into actionable insights with optimized queries" },
  { text: "DevOps Engineer", icon: <FaCloudUploadAlt size={40} />, desc: "• Experienced with Docker, Linux, and cloud deployments\n• Streamlines CI/CD pipelines and agile deployment processes" },
  { text: "IT Support Specialist", icon: <IoIosInformationCircle size={40} />, desc: "• Broad technical support across Windows, MacOS, and Linux environments\n• Strong troubleshooting and clear communication for effective user assistance" },
  { text: "Game Developer", icon: <FaGamepad size={40} />, desc: "• Developed engaging games using Python and Unity with real‑time mechanics\n• Blends creative design with agile prototyping for interactive experiences" },
  { text: "UI Developer", icon: <AiOutlineLayout size={40} />, desc: "• Crafts intuitive, visually appealing interfaces with HTML, CSS, JavaScript, React, and Vue.js\n• Focused on responsive design and performance optimization" },
  { text: "UX Developer", icon: <MdTouchApp size={40} />, desc: "• Synthesizes user-centered design methodologies in front-end development to produce seamless, engaging user experiences\n• Leverages usability testing and iterative design to enhance user satisfaction" },
//  { text: "Cloud Engineer", icon: <IoMdCloudDone size={40} /> },
//  { text: "Solutions Architect", icon: <IoMdCloudDone size={40} /> },
//  { text: "Data Scientist", icon: <BsClipboardDataFill size={40} /> },
//  { text: "AI/ML Engineer", icon: <BsClipboardDataFill size={40} /> },
//  { text: "Mobile App Developer", icon: <BsClipboardDataFill size={40} /> },
//  { text: "Cybersecurity Engineer", icon: <BsClipboardDataFill size={40} /> },
];

export const projects: Project[] = [
  { name: "Productivity App", scale: 0, date: "Mar. 2025 – Present", span: "Ongoing", desc: "• Engineering a cross-platform productivity app using React/Next.js with TypeScript and Express.js backend, containerized with Docker and deployed on AWS\n• Designing a responsive PostgreSQL architecture with optimized query patterns, enabling real-time synchronization of calendar events and tasks\n• Implementing OpenAI API integration that analyzes user productivity patterns and automates calendar/task functions, vastly reducing management time", skills: {"HTML": 0, "CSS": 0, "TypeScript": 0, "SQL": 0, "React": 1, "Next.js": 1, "Tailwind CSS": 1, "Node.js": 1, "Express.js": 1, "Git": 2, "PostgreSQL": 2, "Docker": 2, "AWS": 2, "OpenAI API": 2}, github: "" },
  { name: "Personal Website", scale: 0, date: "Jan. 2025 – Mar. 2025", span: "3 months", desc: "• Responsive portfolio showcasing skills and projects using TypeScript, React, and Tailwind CSS\n• Modern UI/UX design with dynamic content and interactive animations", skills: {"HTML": 0, "CSS": 0, "TypeScript": 0, "React": 1, "Vue.js": 1, "Tailwind CSS": 1, "Git": 2}, github: "https://github.com/BryanWieschenberg/Personal-Website" },
  { name: "Dashboard and Applicant Manager", scale: 0, date: "Sep. 2024 – Nov. 2024", span: "3 months", desc: "• Full‑stack dashboard built with Ruby on Rails and PostgreSQL for task management and application tracking\n• Advanced data filtering and analytics for WorkWell Partnership staff", skills: {"HTML": 0, "CSS": 0, "Ruby": 0, "SQL": 0, "Rails": 1, "Boostrap": 1, "Git": 2, "PostgreSQL": 2, "UML": 2, "Linux": 2, "Collaboration": 3, "Communication": 3}, github: "" },
  { name: "Video Sharing Service", scale: 0, date: "Oct. 2025 – Nov. 2024", span: "1 month", desc: "• Engineered a full stack application with a responsive frontend using React, Next.js, and TypeScript, to enable smooth video browsing and playback\n• Constructed a scalable Node.js backend with Docker for efficient deployment and streamlined uploads and processing\n• Integrated Google Cloud for storage and Firebase authentication API for secure and reliable user login\n• Built a modular system architecture for maintenance, scalability, and independent development across components", skills: {"HTML": 0, "CSS": 0, "TypeScript": 0, "React": 1, "Next.js": 1, "Node.js": 1, "Git": 2, "Google Cloud": 2, "Firebase": 2, "Docker": 2, "Ubuntu": 2}, github: "https://github.com/BryanWieschenberg/Video-Sharing-Service" },
  { name: "Livestock Metrics Visualization App", scale: 0, date: "Feb. 2024 – Apr. 2024", span: "3 months", desc: "• Created a web application with PostgreSQL and Flask to enable stakeholders to effectively manage a goat ranch\n• Designed insightful SQL views and queries to identify trends and uncover correlations between key factors\n• Added dynamic visualization to present results from 20+ years of data, improving interaction and data interpretation", skills: {"HTML": 0, "CSS": 0, "SQL": 0, "Flask": 1, "Git": 2, "PostgreSQL": 2, "UML": 2, "Linux": 2, "Collaboration": 3, "Communication": 3}, github: "https://github.com/BryanWieschenberg/Livestock-Metrics-Visualization-App" },
  { name: "TCNJ Kappa Theta Pi Website", scale: 0, date: "Feb. 2024 – Present", span: "Ongoing", desc: "• Helping build tcnjktp.com to showcase fraternity using HTML, CSS, and JavaScript, to highlight members and upcoming events\n• Responsive design focused on community engagement and event promotion", skills: {"HTML": 0, "CSS": 0, "JavaScript": 0, "Git": 2, "Communication": 3}, github: "" },
  { name: "Command Line Shell Interface", scale: 1, date: "Feb. 2025", span: "2 weeks", desc: "• CLI built in C leveraging system calls (fork(), exec()) to emulate Linux shell commands\n• Supports I/O redirection, piping, and arrow key navigation for command history", skills: {"C": 0, "Linux": 2}, github: "https://github.com/BryanWieschenberg/Command-Line-Shell-Interface" },
  { name: "Flashcards App", scale: 1, date: "Feb. 2025", span: "1.5 weeks", desc: "• Interactive study tool developed in Python for memorizing terms and definitions\n• Implements dynamic content switching with keyboard controls for adaptive learning", skills: {"Python": 0}, github: "https://github.com/BryanWieschenberg/Flashcards-App" },
  { name: "Hackathon Event Scheduler", scale: 1, date: "Sep. 2024", span: "3 weeks", desc: "• Developed a Hackathon scheduler in Ruby, utilizing room and event CSV data to generate optimized scheduling plans\n• Implemented automated room allocation and conflict detection, keeping track of capacity, equipment, and event type", skills: {"Ruby": 0, "Git": 2, "Linux": 2}, github: "https://github.com/BryanWieschenberg/Hackathon-Scheduling-Tool" },
  { name: "Amazon Web Scraper", scale: 1, date: "Oct. 2023", span: "2 weeks", desc: "• Automated web scraper using Python and Selenium for Amazon data extraction\n• Analyzes reviewer bias and creates trusted final conclusions on products", skills: {"Python": 0, "Selenium": 1}, github: "https://github.com/BryanWieschenberg/Amazon-Web-Scraper" },
  { name: "Turtle Stack", scale: 2, date: "Feb. 2025", span: "24 hours", desc: "• Hackathon game built in Python featuring real‑time turtle stacking mechanics\n• Implemented dynamic difficulty and unique turtle properties to create a challenging yet addicting experience", skills: {"Python": 0}, github: "https://github.com/BryanWieschenberg/Turtle-Stack" },
  { name: "Computer Lab Finder", scale: 2, date: "Oct. 2024", span: "2 days", desc: "• Python-based tool for locating TCNJ computer labs by analyzing room occupancy and class/event schedules\n• Outputs availability and scheduling data with an easy-to-read format", skills: {"Python": 0}, github: "https://github.com/BryanWieschenberg/Computer-Lab-Finder" },
  { name: "AVL Tree Data Analyzer", scale: 2, date: "Apr. 2023", span: "1 week", desc: "• Built an extremely optimized and fast AVL tree in C++ in a team of two other students, which analyzes large data sets of randomly-generated names and social security numbers\n• The user can choose which data set they want to be analyzed using the command line, spanning from 15 lines of data to 500,000 lines, with each line containing the operation needed to be performed on that line of data, along with the corresponding name and social security number\n• Implemented three operations for data in the set: insertion, delete, and retrieval, with each line telling the program which operation to perform", skills: {"C++": 0}, github: "https://github.com/BryanWieschenberg/AVL-Tree-Data-Analyzer" },
  { name: "Matrix Word Scanner", scale: 2, date: "Feb. 2023", span: "5 days", desc: "• Planned and executed a program built in C++ to scan a matrix of any size in a 2-dimensional array and use the command line to find any amount of words of any length listed and color the successfully found words red\n• Can search for any words listed in the command line after the name of the executable, followed by <, then the matrix file name", skills: {"C++": 0}, github: "https://github.com/BryanWieschenberg/Matrix-Word-Scanner" },
  { name: "Name Frequency Analyzer", scale: 2, date: "Nov. 2022", span: "5 days", desc: "• Designed and implemented a program built in Java that analyzes baby name popularities in public data given by the Social Security Administration\n• Sorted a dataset of 2,052,781 lines, with each consisting of names, genders, and number of occurrences through every male and female name with two to fifteen characters from the year 1880 to 2021, and ranked each name by popularity for each year through an optimized object-oriented algorithmn\n• Created six seamless search functions for the user", skills: {"Java": 0}, github: "https://github.com/BryanWieschenberg/Name-Frequency-Analyzer" },
]
