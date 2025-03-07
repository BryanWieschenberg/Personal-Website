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

export interface Role {
  text: string;
  icon: React.ReactElement;
  desc: string;
}

export interface Skill {
  type: number; // 0: Programming Languages, 1: Frameworks/Libraries, 2: Tools/Software, 3: Concepts, 4: Soft Skills
  name: string;
  yoe: number;
  desc: string;
  icon: string | React.ReactElement;
}

export interface Class {
  id: string;
  name: string;
  taken: string;
  click: string;
  color: string;
  icon: React.ReactElement;
}

export interface Work {
  role: string;
  company: string;
  date: string;
  desc: string;
  skills: Record<string, number>;
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

export const roles: Role[] = [
  { text: "Software Engineer", icon: <BiCodeBlock size={40} />, desc: "• asas\n• sasa\n• asas"}, // mention agile
  { text: "Full Stack Developer", icon: <FaGlobe size={40} /> , desc: ""},
  { text: "Front-End Engineer", icon: <BiPaintRoll size={40} />, desc: "" },
  { text: "Back-End Engineer", icon: <MdOutlineStorage size={40} />, desc: "" },
  { text: "Data Analyst", icon: <BsClipboardDataFill size={40} />, desc: "" },
  { text: "DevOps Engineer", icon: <FaCloudUploadAlt size={40} />, desc: "" },
  { text: "IT Support Specialist", icon: <IoIosInformationCircle size={40} />, desc: "" },
  { text: "Game Developer", icon: <FaGamepad size={40} />, desc: "" },
  { text: "UI Developer", icon: <AiOutlineLayout size={40} />, desc: "" },
  { text: "UX Developer", icon: <MdTouchApp size={40} />, desc: "" },
//  { text: "Cloud Engineer", icon: <IoMdCloudDone size={40} /> },
//  { text: "Solutions Architect", icon: <IoMdCloudDone size={40} /> },
//  { text: "Data Scientist", icon: <BsClipboardDataFill size={40} /> },
//  { text: "AI/ML Engineer", icon: <BsClipboardDataFill size={40} /> },
//  { text: "Mobile App Developer", icon: <BsClipboardDataFill size={40} /> },
//  { text: "Cybersecurity Engineer", icon: <BsClipboardDataFill size={40} /> },
];

export const skills: Skill[] = [
  { type: 0, name: "C", yoe: 1.5, desc: "Operating Systems course, Computer Architecture course, Analysis of Algorithms course, Command Line Shell Interface project", icon: "/assets/skills/c.png" },
  { type: 0, name: "C++", yoe: 2, desc: "Data Structures course, Matrix Word Scanner project, AVL Tree Data Analyzer project", icon: "/assets/skills/cpp.png" },
  { type: 0, name: "C#", yoe: 0.5, desc: "Various experiences", icon: "/assets/skills/cs.png" },
  { type: 0, name: "Java", yoe: 5, desc: "Computational Thinking course, Computer Networking course, Name Popularity Sorting Algorithm project", icon: "/assets/skills/java.png" },
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
  { type: 2, name: "Google Cloud", yoe: 0.5, desc: "Video Sharing Service project", icon: "/assets/skills/gcp.png" },
  { type: 2, name: "Firebase", yoe: 0.5, desc: "Video Sharing Service project", icon: "/assets/skills/fb.png" },
  { type: 2, name: "Docker", yoe: 0.5, desc: "Video Sharing Service project", icon: "/assets/skills/docker.png" },
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

export const work: Work[] = [
  { role: "Software Engineer", company: "WorkWell Partnership", date: "Sep. 2024 – Dec. 2024", desc: "• Spearheaded the development of company-wide system infrastructure as part of TCNJ Software Engineering course, integrating essential components to support a scalable user base.\n• Optimized backend performance and integrating PostgreSQL to manage users and securely handle sensitive data.\n• Implemented multi-layer encryption and tiered permissions to ensure strict access control at multiple levels.\n• Structured the system architecture using UML to create standardized workflows, enhancing modularity, streamlining development processes, and improving long-term maintainability.", skills: {"Java": 0, "UML": 1, "Git": 2, "Jira": 3, "Agile": 1, "bruh": 1, "bruhas": 1} },
  { role: "Computer Science Mentor", company: "The College of New Jersey", date: "Dec. 2024 – Present", desc: "• Mentoring students by offering guidance on foundational concepts, coursework, and career development, while fostering a supportive and inclusive environment.\n• Promoting effective problem-solving, time management, and project completion strategies to drive academic and personal success.", skills: {"Java": 0} },
  { role: "Quantum Computing Research Assistant", company: "The College of New Jersey", date: "Aug. 2024 – Present", desc: "• Collaborating alongside PhD faculty to analyze quantum computing performance against classical approaches.\n• Exploring foundational quantum algorithms and their applications to enhance computational efficiency.\n• Applying quantum computing knowledge to evaluate algorithm scalability, providing practical insights for data analysis and complex system optimization.", skills: {"Java": 0} },
  { role: "Operations Assistant", company: "The College of New Jersey", date: "Aug. 2023 – Present", desc: "• Managing a complex database overseeing 4,000+ campus dormitory assignments, ensuring precise tracking.\n• Responding to and resolving critical incidents involving system operations to maintain campus security and safety.\n• Streamlined data modification processes by implementing protocols for efficient living space access updates.", skills: {"Java": 0} },
  { role: "Residential Advisor", company: "The College of New Jersey", date: "Aug. 2023 – Present", desc: "• Leading an inclusive community of 100+ residents by providing support, connecting students to resources, and enforcing policies through systemized documentation.\n• Organized 20+ community-building events, increasing engagement and fostering supportive and inclusive environments.", skills: {"Java": 0} }
];

export const projects: Project[] = [
  { name: "Personal Website", scale: 0, date: "Jan. 2025 – Mar. 2025", span: "3 months", desc: "• asas\n• sasa\n• asas", skills: {"Java": 0, "UML": 1, "Git": 2, "Jira": 3, "Agile": 1, "bruh": 1, "bruhas": 1, "boywhatda": 2, "boywhatdas": 2, "boywhatdass": 2, "boywhatdasss": 2}, github: "https://github.com/BryanWieschenberg/Personal-Website" },
  { name: "Livestock Metrics Visualization App", scale: 0, date: "Jan. 2025 – Mar. 2025", span: "3 months", desc: "• \n• \n• ", skills: {"Java": 0}, github: "https://github.com/BryanWieschenberg/Personal-Website" },
  { name: "Dashboard and Applicant Manager", scale: 0, date: "Jan. 2025 – Mar. 2025", span: "3 months", desc: "• \n• \n• ", skills: {"Java": 0}, github: "https://github.com/BryanWieschenberg/Personal-Website" },
  { name: "TCNJ Kappa Theta Pi Website", scale: 0, date: "Jan. 2025 – Mar. 2025", span: "3 months", desc: "• \n• \n• ", skills: {"Java": 0}, github: "" },
  { name: "Video Sharing Service", scale: 0, date: "Jan. 2025 – Mar. 2025", span: "3 months", desc: "• \n• \n• ", skills: {"Java": 0}, github: "https://github.com/BryanWieschenberg/Personal-Website" },
  { name: "Hackathon Event Scheduler", scale: 1, date: "Jan. 2025 – Mar. 2025", span: "3 months", desc: "• \n• \n• ", skills: {"Java": 0}, github: "https://github.com/BryanWieschenberg/Personal-Website" },
  { name: "Command Line Shell Interface", scale: 1, date: "Jan. 2025 – Mar. 2025", span: "3 months", desc: "• \n• \n• ", skills: {"Java": 0, "UML": 1, "Git": 2, "Jira": 3, "Agile": 1, "bruh": 1, "bruhas": 1, "boywhatda": 2, "boywhatdas": 2, "boywhatdass": 2, "boywhatdasssaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa": 2, "asas": 3}, github: "https://github.com/BryanWieschenberg/Personal-Website" },
  { name: "Flashcards App", scale: 1, date: "Jan. 2025 – Mar. 2025", span: "3 months", desc: "• \n• \n• ", skills: {"Java": 0}, github: "https://github.com/BryanWieschenberg/Personal-Website" },
  { name: "Amazon Web Scraper", scale: 1, date: "Jan. 2025 – Mar. 2025", span: "3 months", desc: "• \n• \n• ", skills: {"Java": 0}, github: "https://github.com/BryanWieschenberg/Personal-Website" },
  { name: "Turtle Stack", scale: 2, date: "Jan. 2025 – Mar. 2025", span: "3 months", desc: "• \n• \n• ", skills: {"Java": 0}, github: "https://github.com/BryanWieschenberg/Personal-Website" },
  { name: "Computer Lab Finder", scale: 2, date: "Jan. 2025 – Mar. 2025", span: "3 months", desc: "• \n• \n• ", skills: {"Java": 0}, github: "https://github.com/BryanWieschenberg/Personal-Website" },
  { name: "AVL Tree Data Analyzer", scale: 2, date: "Jan. 2025 – Mar. 2025", span: "3 months", desc: "• \n• \n• ", skills: {"Java": 0}, github: "https://github.com/BryanWieschenberg/Personal-Website" },
  { name: "Matrix Word Scanner", scale: 2, date: "Jan. 2025 – Mar. 2025", span: "3 months", desc: "• \n• \n• ", skills: {"Java": 0}, github: "https://github.com/BryanWieschenberg/Personal-Website" },
  { name: "Baby Name Finder", scale: 2, date: "Jan. 2025 – Mar. 2025", span: "3 months", desc: "• \n• \n• ", skills: {"Java": 0}, github: "https://github.com/BryanWieschenberg/Personal-Website" },
]