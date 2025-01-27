import { FaCode, FaDatabase, FaProjectDiagram, FaGitAlt, FaNetworkWired, FaShieldAlt, FaCloud, FaChartLine, FaBrain, FaRobot } from 'react-icons/fa';
import { SiQuantconnect, SiUml } from 'react-icons/si';
import { FcGenericSortingAsc } from 'react-icons/fc';

export interface Skill {
  text: string;
  icon: React.ReactElement; // Change `image` to `icon` and use ReactElement type
}

export const skills: Skill[] = [
  { text: "Full Stack Development", icon: <FaCode size={40} /> },
  { text: "Agile Methodologies", icon: <FaProjectDiagram size={40} /> },
  { text: "Data Structures & Algorithms", icon: <FcGenericSortingAsc size={40} /> },
  { text: "Version Control", icon: <FaGitAlt size={40} /> },
  { text: "Operating Systems", icon: <FaNetworkWired size={40} /> },
  { text: "Networking Protocols", icon: <FaNetworkWired size={40} /> },
  { text: "Cybersecurity", icon: <FaShieldAlt size={40} /> },
  { text: "Database Management Systems (DBMS)", icon: <FaDatabase size={40} /> },
  { text: "Unified Modeling Language (UML)", icon: <SiUml size={40} /> },
  { text: "Cloud Computing", icon: <FaCloud size={40} /> },
  { text: "Quantum Computing", icon: <SiQuantconnect size={40} /> },
  { text: "Data Analytics", icon: <FaChartLine size={40} /> },
  { text: "Artificial Intelligence (AI)", icon: <FaBrain size={40} /> },
  { text: "Machine Learning (ML)", icon: <FaRobot size={40} /> },
];
