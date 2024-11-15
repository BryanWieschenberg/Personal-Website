import React from 'react';

const Contact: React.FC = () => (
  <section id="contact" className="py-10 bg-white">
    <div className="container mx-auto text-center">
      <h2 className="text-4xl font-bold mb-6">Contact Me</h2>
      <p className="text-gray-700 text-lg">Feel free to reach out for collaboration or questions!</p>
      <p className="text-gray-700 mt-4">
        <strong>Email:</strong> <a href="mailto:bryan.wieschenberg@gmail.com" className="text-blue-500">bryan.wieschenberg@gmail.com</a>
      </p>
      <p className="text-gray-700">
        <strong>Phone:</strong> <a href="tel:+19732160825" className="text-blue-500">(973) 216-0825</a>
      </p>
    </div>
  </section>
);

export default Contact;
