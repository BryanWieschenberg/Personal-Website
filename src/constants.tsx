import { FaCode, FaDatabase, FaProjectDiagram, FaGitAlt, FaNetworkWired, FaShieldAlt, FaCloud, FaChartLine, FaBrain, FaRobot, FaAtom, FaLaptopCode } from 'react-icons/fa';
import { SiUml } from 'react-icons/si';
import { TbBinaryTreeFilled } from "react-icons/tb";
import { GrSystem } from "react-icons/gr";
import { IoHardwareChip } from "react-icons/io5";
import { TbLogicAnd } from "react-icons/tb";

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
  { id: "CSC 415", name: "Software Engineering", click: "hi", color: "text-cyan-400", icon: <FaLaptopCode size={40} /> },
  { id: "CSC 315", name: "Database Systems", click: "hi", color: "text-cyan-400", icon: <FaCode size={40} /> },
  { id: "CSC 335", name: "Analysis of Algorithms", click: "hi", color: "text-cyan-400", icon: <FaCode size={40} /> },
  { id: "CSC 345", name: "Operating Systems", click: "hi", color: "text-cyan-400", icon: <IoHardwareChip size={40} /> },
  { id: "CSC 325", name: "Computer Architecture", click: "hi", color: "text-cyan-400", icon: <TbLogicAnd size={40} /> },
  { id: "CSC 360", name: "Computer Networking", click: "hi", color: "text-cyan-400", icon: <FaCode size={40} /> },
  { id: "CSC 445", name: "Theory of Computation", click: "hi", color: "text-cyan-400", icon: <FaCode size={40} /> },
  { id: "MAT 205", name: "Linear Algebra", click: "hi", color: "text-red-400", icon: <FaCode size={40} /> },
  { id: "MAT 127", name: "Calculus", click: "hi", color: "text-red-400", icon: <FaCode size={40} /> },
  { id: "STA 215", name: "Statistics & Probability", click: "hi", color: "text-orange-400", icon: <FaCode size={40} /> },
  { id: "PHY 201", name: "General Physics", click: "hi", color: "text-purple-400", icon: <FaCode size={40} /> },
  { id: "CHE 201", name: "General Chemistry", click: "hi", color: "text-green-400", icon: <FaCode size={40} /> },
];
