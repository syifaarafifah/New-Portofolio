import React from 'react';

const Education = () => {
  return (
    <section id="education" className="mb-12">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 border-b-2 border-[#4ecdc4] pb-2">
        Education
      </h2>
      
      <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-[#ff9e64]">
        <h3 className="text-xl font-bold text-gray-800 mb-2">Diploma IV – Software Engineering Technology</h3>
        <p className="text-[#ff6b6b] font-semibold mb-2">Politeknik Negeri Batam | August 2023 - Present</p>
        <p className="text-gray-600">Currently a fifth-semester student specializing in web and mobile development.</p>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6 mt-6 border-l-4 border-[#4ecdc4]">
        <h3 className="text-xl font-bold text-gray-800 mb-2">Science Track</h3>
        <p className="text-[#ff6b6b] font-semibold mb-2">SMAS IT Ulil Albab Batam</p>
        <p className="text-gray-600">High School Diploma</p>
      </div>
    </section>
  );
};

export default Education;