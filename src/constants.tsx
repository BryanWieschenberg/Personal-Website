import { FaCode, FaDatabase, FaProjectDiagram, FaGitAlt, FaNetworkWired, FaShieldAlt, FaCloud, FaChartLine, FaBrain, FaRobot, FaAtom, FaLaptopCode, FaFileCode, FaGamepad } from 'react-icons/fa';
import { SiUml } from 'react-icons/si';
import { TbBinaryTreeFilled, TbMatrix, TbAtom2Filled } from "react-icons/tb";
import { GrSystem, GrCloudlinux } from "react-icons/gr";
import { IoHardwareChip, IoChatbubbleEllipses, IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { TbLogicAnd, TbStack2Filled } from "react-icons/tb";
import { HiDatabase, HiOutlineArrowsExpand } from "react-icons/hi";
import { PiGraphBold } from "react-icons/pi";
import { SlGraph, SlChemistry } from "react-icons/sl";
import { RiFunctionFill } from "react-icons/ri";
import { LuAtom } from "react-icons/lu";
import { MdNetworkWifi, MdOutlineSmartphone } from "react-icons/md";
import { IoStatsChartSharp, IoPersonCircle } from "react-icons/io5";
import { BiCodeBlock } from "react-icons/bi";
import { FaStackExchange } from "react-icons/fa6";
import { IoIosInformationCircle, IoMdCloudDone } from "react-icons/io";
import { BsClipboardDataFill } from "react-icons/bs";

export interface Role {
  text: string;
  icon: React.ReactElement;
}

export interface Skill {
  cat: number; // 0: Programming Languages, 1: Frameworks/Libraries, 2: Tools/Software, 3: Concepts, 4: Languages, 5: Soft Skills
  name: string;
  icon: string;
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
  description: string;
}

export const roles: Role[] = [
  { text: "Software Engineer", icon: <BiCodeBlock size={40} /> },
  { text: "Full Stack Developer", icon: <FaStackExchange size={40} /> },
  { text: "Mobile App Developer", icon: <MdOutlineSmartphone size={40} /> },
  { text: "IT Systems Analyst", icon: <IoIosInformationCircle size={40} /> },
  { text: "Game Developer", icon: <FaGamepad size={40} /> },
  { text: "Cloud Engineer", icon: <IoMdCloudDone size={40} /> },
  { text: "Data Analyst", icon: <BsClipboardDataFill size={40} /> },
  { text: "UI/UX Developer", icon: <IoPersonCircle size={40} /> },
  { text: "Quality Assurance Engineer", icon: <GrCloudlinux size={40} /> },
/*  { text: "Software Development", icon: <FaCode size={40} /> },
  { text: "Full Stack Development", icon: <FaCode size={40} /> },
  { text: "Mobile App Development", icon: <FaCode size={40} /> },
  { text: "Agile Methodologies", icon: <FaProjectDiagram size={40} /> },
  { text: "Information Technology Systems", icon: <TbBinaryTreeFilled size={40} /> },
  { text: "Data Structures & Algorithms", icon: <TbBinaryTreeFilled size={40} /> },
  { text: "Game Development", icon: <FaCode size={40} /> },
  { text: "Version Control", icon: <FaGitAlt size={40} /> },
  { text: "Operating Systems", icon: <GrSystem size={40} /> },
  { text: "Networking Protocols", icon: <FaNetworkWired size={40} /> },
  { text: "Cybersecurity", icon: <FaShieldAlt size={40} /> },
  { text: "Database Management Systems (DBMS)", icon: <FaDatabase size={40} /> },
  { text: "Unified Modeling Language (UML)", icon: <SiUml size={40} /> },
  { text: "Cloud Engineering", icon: <FaCloud size={40} /> },
  { text: "Quantum Computing", icon: <FaAtom size={40} /> },
  { text: "Data Analytics", icon: <FaChartLine size={40} /> },
  { text: "UI/UX Developer", icon: <FaChartLine size={40} /> },
  { text: "Quality Assurance Engineer", icon: <FaBrain size={40} /> },
  { text: "Artificial Intelligence (AI)", icon: <FaBrain size={40} /> },
  { text: "Machine Learning (ML)", icon: <FaRobot size={40} /> }, */
];

export const skills: Skill[] = [
  { cat: 0, name: "C", icon: "/assets/skills/c.png" },
  { cat: 0, name: "C++", icon: "/assets/skills/cpp.png" },
  { cat: 0, name: "C", icon: "/assets/skills/c.png" },
  { cat: 0, name: "C", icon: "/assets/skills/c.png" },
  { cat: 0, name: "C", icon: "/assets/skills/c.png" },
  { cat: 0, name: "C", icon: "/assets/skills/c.png" },
  { cat: 0, name: "C", icon: "/assets/skills/c.png" },
  { cat: 0, name: "C", icon: "/assets/skills/c.png" },
  { cat: 0, name: "C", icon: "/assets/skills/c.png" },
  { cat: 0, name: "C", icon: "/assets/skills/c.png" },
  { cat: 0, name: "C", icon: "/assets/skills/c.png" },
  { cat: 0, name: "C", icon: "/assets/skills/c.png" },
  { cat: 0, name: "C", icon: "/assets/skills/c.png" },
  { cat: 0, name: "C", icon: "/assets/skills/c.png" },
  { cat: 0, name: "C", icon: "/assets/skills/c.png" },
  { cat: 0, name: "C", icon: "/assets/skills/c.png" },
  { cat: 0, name: "C", icon: "/assets/skills/c.png" },
  { cat: 0, name: "C", icon: "/assets/skills/c.png" },
  { cat: 0, name: "C", icon: "/assets/skills/c.png" },
  { cat: 0, name: "C", icon: "/assets/skills/c.png" },
  { cat: 0, name: "C", icon: "/assets/skills/c.png" },
  { cat: 0, name: "C", icon: "/assets/skills/c.png" },
  { cat: 0, name: "C", icon: "/assets/skills/c.png" },
  { cat: 0, name: "C", icon: "/assets/skills/c.png" },
  { cat: 0, name: "C", icon: "/assets/skills/c.png" },
  { cat: 0, name: "C", icon: "/assets/skills/c.png" },
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
  { id: "CHE 201", name: "Chemistry", taken: "Spring 2025", click: "Explores the laws and theories of matter, covering atomic and molecular structure, quantum mechanics, kinetics, equilibrium, and periodic properties.", color: "text-purple-400", icon: <SlChemistry size={40} /> },
  { id: "SPA 102", name: "Spanish II", taken: "Spring 2024", click: "Builds on SPA 101 to allow for smooth engagement with native speakers through structured speaking, writing, and listening exercises while deepening cultural understanding.", color: "text-orange-400", icon: <IoChatbubbleEllipses size={40} /> },
  { id: "SPA 101", name: "Spanish I", taken: "Fall 2023", click: "Introductory Spanish course that emphasizes written and oral communication, critical analysis, linguistic interpretation, and intercultural competence while fostering a cultural diversity appreciation.", color: "text-orange-400", icon: <IoChatbubbleEllipsesOutline size={40} /> },
];

export const work: Work[] = [
  { role: "Software Engineer", company: "WorkWell Partnership", date: "Sep. 2024 – Dec. 2024", description: "• Spearheaded the development of company-wide system infrastructure as part of TCNJ Software Engineering course, integrating essential components to support a scalable user base.• Optimized backend performance and integrating PostgreSQL to manage users and securely handle sensitive data.• Implemented multi-layer encryption and tiered permissions to ensure strict access control at multiple levels.• Structured the system architecture using UML to create standardized workflows, enhancing modularity, streamlining development processes, and improving long-term maintainability." },
  { role: "Computer Science Mentor", company: "The College of New Jersey", date: "Dec. 2024 – Present", description: "• Mentoring students by offering guidance on foundational concepts, coursework, and career development, while fostering a supportive and inclusive environment.• Promoting effective problem-solving, time management, and project completion strategies to drive academic and personal success." },
  { role: "Quantum Computing Research Assistant", company: "The College of New Jersey", date: "Aug. 2024 – Present", description: "• Collaborating alongside PhD faculty to analyze quantum computing performance against classical approaches.• Exploring foundational quantum algorithms and their applications to enhance computational efficiency.• Applying quantum computing knowledge to evaluate algorithm scalability, providing practical insights for data analysis and complex system optimization." },
  { role: "Operations Assistant", company: "The College of New Jersey", date: "Aug. 2023 – Present", description: "• Managing a complex database overseeing 4,000+ campus dormitory assignments, ensuring precise tracking.• Responding to and resolving critical incidents involving system operations to maintain campus security and safety.• Streamlined data modification processes by implementing protocols for efficient living space access updates." },
  { role: "Residential Advisor", company: "The College of New Jersey", date: "Aug. 2023 – Present", description: "• Leading an inclusive community of 100+ residents by providing support, connecting students to resources, and enforcing policies through systemized documentation.• Organized 20+ community-building events, increasing engagement and fostering supportive and inclusive environments." }
];
