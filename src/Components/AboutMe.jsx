import React, { useState } from 'react';

const AboutMe = () => {
  const [activeTab, setActiveTab] = useState('about');

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
      <div className="flex space-x-4 border-b border-gray-600 pb-2 mb-4">
        {['about', 'experiences', 'recommended'].map(tab => (
          <button
            key={tab}
            className={`px-4 py-2 font-semibold transition-colors duration-300 ${activeTab === tab ? 'text-blue-400 border-b-2 border-blue-400' : 'text-gray-400 hover:text-white'}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>
      <div className="text-gray-300">
        {activeTab === 'about' && <div>About me content goes here.</div>}
        {activeTab === 'experiences' && <div>Experiences content goes here.</div>}
        {activeTab === 'recommended' && <div>Recommended content goes here.</div>}
      </div>
    </div>
  );
};

export default AboutMe;
