import React from 'react';

const experiences = [
  {
    title: 'Software Engineer',
    company: 'WorkWell Partnership',
    date: 'Sep. 2024 – Present',
    description: [
      'Spearheaded the development of company-wide system infrastructure using Ruby on Rails.',
      'Optimized backend performance and integrated PostgreSQL for secure data management.',
      'Implemented multi-layer encryption and tiered permissions for strict access control.',
    ],
  },
  {
    title: 'Quantum Computing Research Assistant',
    company: 'The College of New Jersey',
    date: 'Aug. 2024 – Present',
    description: [
      'Collaborated with PhD faculty to analyze quantum computing performance.',
      'Explored foundational quantum algorithms to enhance computational efficiency.',
    ],
  },
];

const Experience: React.FC = () => (
  <section id="experience" className="bg-gray-100 py-10">
    <div className="container mx-auto">
      <h2 className="text-4xl font-bold text-center mb-6">Experience</h2>
      {experiences.map((exp, index) => (
        <div key={index} className="bg-white shadow-md rounded-lg p-6 mb-4">
          <h3 className="text-2xl font-semibold">{exp.title}</h3>
          <p className="text-gray-600">{exp.company} – {exp.date}</p>
          <ul className="list-disc pl-5 mt-2 text-gray-700">
            {exp.description.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </section>
);

export default Experience;
