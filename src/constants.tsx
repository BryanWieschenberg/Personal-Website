import { FaCode, FaDatabase, FaProjectDiagram, FaGitAlt, FaNetworkWired, FaShieldAlt, FaCloud, FaChartLine, FaBrain, FaRobot, FaAtom, FaLaptopCode, FaFileCode } from 'react-icons/fa';
import { SiUml } from 'react-icons/si';
import { TbBinaryTreeFilled, TbMatrix, TbAtom2Filled } from "react-icons/tb";
import { GrSystem } from "react-icons/gr";
import { IoHardwareChip, IoChatbubbleEllipses, IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { TbLogicAnd, TbStack2Filled } from "react-icons/tb";
import { HiDatabase, HiOutlineArrowsExpand } from "react-icons/hi";
import { PiGraphBold } from "react-icons/pi";
import { SlGraph, SlChemistry } from "react-icons/sl";
import { RiFunctionFill } from "react-icons/ri";
import { LuAtom } from "react-icons/lu";
import { MdNetworkWifi } from "react-icons/md";
import { IoStatsChartSharp } from "react-icons/io5";

export interface Skill {
  text: string;
  icon: React.ReactElement;
}

export interface Class {
  id: string;
  name: string;
  click: string;
  color: string;
  icon: React.ReactElement;
}

export const skills: Skill[] = [
  { text: "Full Stack Development", icon: <FaCode size={40} /> },
  { text: "Agile Methodologies", icon: <FaProjectDiagram size={40} /> },
  { text: "Data Structures & Algorithms", icon: <TbBinaryTreeFilled size={40} /> },
  { text: "Version Control", icon: <FaGitAlt size={40} /> },
  { text: "Operating Systems", icon: <GrSystem size={40} /> },
  { text: "Networking Protocols", icon: <FaNetworkWired size={40} /> },
  { text: "Cybersecurity", icon: <FaShieldAlt size={40} /> },
  { text: "Database Management Systems (DBMS)", icon: <FaDatabase size={40} /> },
  { text: "Unified Modeling Language (UML)", icon: <SiUml size={40} /> },
  { text: "Cloud Computing", icon: <FaCloud size={40} /> },
  { text: "Quantum Computing", icon: <FaAtom size={40} /> },
  { text: "Data Analytics", icon: <FaChartLine size={40} /> },
  { text: "Artificial Intelligence (AI)", icon: <FaBrain size={40} /> },
  { text: "Machine Learning (ML)", icon: <FaRobot size={40} /> },
];

export const classes: Class[] = [
  { id: "CSC 415", name: "Software Engineering", click: "Covers software engineering principles, emphasizing collaborative problem-solving, systematic development, and UML, to deliver high-quality software.", color: "text-cyan-400", icon: <FaLaptopCode  size={40} /> },
  { id: "CSC 315", name: "Database Systems", click: "Covers database design, modeling, implementation, and management, utilizing PostgreSQL to develop and integrate a robust full-stack web application.", color: "text-cyan-400", icon: <HiDatabase size={40} /> },
  { id: "CSC 345", name: "Operating Systems", click: "Explores operating system theory and implementation, covering memory, processor, file, and device management in the C language.", color: "text-cyan-400", icon: <IoHardwareChip size={40} /> },
  { id: "CSC 325", name: "Computer Architecture", click: "Explores computer architecture through hardware and software, focusing on instruction sets, processor design, logic circuits, assembly programming, and system components like memory, ALUs, and I/O interfaces.", color: "text-cyan-400", icon: <TbLogicAnd size={40} /> },
  { id: "CSC 445", name: "Theory of Computation", click: "Covers the algorithmic theory of computation, exploring computability, complexity, and formal languages through topics like automata, Turing machines, decidability, and NP-completeness.", color: "text-cyan-400", icon: <PiGraphBold size={40} /> },
  { id: "CSC 335", name: "Analysis of Algorithms", click: "Covers fundamental principles of algorithm design and analysis, exploring complexity, data structures, divide and conquer, graph algorithms, dynamic programming, and optimization techniques, in the C language.", color: "text-cyan-400", icon: <SlGraph size={40} /> },
  { id: "CSC 230", name: "Data Structures", click: "Covers data structures, algorithms, and implementation trade-offs, in lower-level object-oriented programming in C++.", color: "text-cyan-400", icon: <TbStack2Filled size={40} /> },
  { id: "CSC 270", name: "Discrete Structures", click: "Introduces fundamental CS concepts with a focus on algorithmic thinking, mathematical reasoning, logic, proofs, sets, functions, graphs, recursion, and finite-state machines.", color: "text-cyan-400", icon: <RiFunctionFill size={40} /> },
  { id: "CSC 298", name: "Quantum Computing", click: "Explores quantum computing through PhD faculty-guided research, covering quantum algorithms, qubit manipulation, superposition, entanglement, and computational complexity.", color: "text-cyan-400", icon: <LuAtom size={40} /> },
  { id: "CSC 360", name: "Computer Networking", click: "Explores modern computer and telecommunication networks, covering the TCP/IP model, fiber-optic and mobile communications, multiple access protocols, TCP/UDP, ATM adaptation, HTTP, and network security.", color: "text-cyan-400", icon: <MdNetworkWifi size={40} /> },
  { id: "CSC 220", name: "Comp. Problem Solving", click: "Introductory course focused on algorithmic design, problem-solving, and translating math concepts into code using object-oriented programming in Java.", color: "text-cyan-400", icon: <FaFileCode size={40} /> },
  { id: "STA 215", name: "Statistics & Probability", click: "Covers descriptive statistics, probability, and classical parametric inference, covering estimation, hypothesis testing, regression, and correlation, utilizing R and RStudio.", color: "text-red-400", icon: <IoStatsChartSharp size={40} /> },
  { id: "MAT 205", name: "Linear Algebra", click: "Explores vector spaces and linear systems, covering matrices, transformations, determinants, eigenvalues, and orthogonality, utilizing MATLAB.", color: "text-red-400", icon: <TbMatrix size={40} /> },
  { id: "MAT 127", name: "Calculus", click: "Explores calculus through covering limits, derivatives, differentiation rules, and integrals with real-world applications.", color: "text-red-400", icon: <HiOutlineArrowsExpand size={40} /> },
  { id: "PHY 201", name: "Physics", click: "A calculus-based physics course that covers kinematics, forces, energy, momentum, collisions, and rotational motion, emphasizing problem-solving and critical thinking.", color: "text-purple-400", icon: <TbAtom2Filled size={40} /> },
  { id: "CHE 201", name: "Chemistry", click: "Explores the laws and theories of matter, covering atomic and molecular structure, quantum mechanics, kinetics, equilibrium, and periodic properties.", color: "text-purple-400", icon: <SlChemistry size={40} /> },
  { id: "SPA 102", name: "Spanish II", click: "Builds on SPA 101 to allow for smooth engagement with native speakers through structured speaking, writing, and listening exercises while deepening cultural understanding.", color: "text-orange-400", icon: <IoChatbubbleEllipses size={40} /> },
  { id: "SPA 101", name: "Spanish I", click: "Introductory Spanish course that emphasizes written and oral communication, critical analysis, linguistic interpretation, and intercultural competence while fostering a cultural diversity appreciation.", color: "text-orange-400", icon: <IoChatbubbleEllipsesOutline size={40} /> },
];
