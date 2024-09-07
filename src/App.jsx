import { useState } from 'react';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('about');
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);
    const newImages = files.map((file) => URL.createObjectURL(file));
    setImages((prevImages) => [...prevImages, ...newImages]);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'about':
        return (
          <div className="transition-opacity duration-500 opacity-100">
            <p className="text-base">Hey There ! I am Tanay Joshi, a fourth year student at Charotar University of Science and Technology.</p>
            <p className="text-base mt-2">I had a great passion for computers since I was in the school. I was always curious about how the things worked and functioned. And that curiosity led me here.</p>
          </div>
        );
      case 'experiences':
        return (
          <div className="transition-opacity duration-500 opacity-100">
            <p className="text-base">I have worked on many projects including two summer internships. I also solve DSA questions and I have solved around 100 questions on Leetcode.</p>
          </div>
        );
      case 'recommended':
        return (
          <div className="transition-opacity duration-500 opacity-100">
            <p className="text-base">Check my LinkedIn </p>
            <br />
            <p className="text-base">
              LinkedIn:
              <a
                href="https://www.linkedin.com/in/tanay-joshi011/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline p-1"
              >
                Tanay Joshi
              </a>
            </p>
          </div>
        );
      default:
        return null;
    }
  };

  const handleScroll = (direction) => {
    const maxIndex = images.length - 3;
    if (direction === 'left' && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else if (direction === 'right' && currentIndex < maxIndex) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const visibleImages = images.slice(currentIndex, currentIndex + 3);

  return (
    <div className="min-h-screen bg-gray-800 text-gray-300 flex justify-end items-center p-6">
      <div className="max-w-3xl w-full space-y-8">
        {/* Tabs Component */}
        <div className="bg-gray-700 p-4 rounded-xl shadow-2xl border border-gray-600">
          <div className="flex justify-around mb-4 border-b border-gray-600 pb-2 space-x-2 rounded-lg bg-gray-800">
            <button
              className={`text-lg focus:outline-none py-2 px-4 rounded-md transition-colors duration-300 ${activeTab === 'about' ? 'bg-gray-500 text-white' : 'hover:bg-gray-600'}`}
              onClick={() => setActiveTab('about')}
            >
              About Me
            </button>
            <button
              className={`text-lg focus:outline-none py-2 px-4 rounded-md transition-colors duration-300 ${activeTab === 'experiences' ? 'bg-gray-500 text-white' : 'hover:bg-gray-600'}`}
              onClick={() => setActiveTab('experiences')}
            >
              Experiences
            </button>
            <button
              className={`text-lg focus:outline-none py-2 px-4 rounded-md transition-colors duration-300 ${activeTab === 'recommended' ? 'bg-gray-500 text-white' : 'hover:bg-gray-600'}`}
              onClick={() => setActiveTab('recommended')}
            >
              Recommended
            </button>
          </div>
          <div className="p-4 bg-gray-800 rounded-lg border border-gray-600">
            {renderTabContent()}
          </div>
        </div>

        {/* Image Upload Component */}
        <div className="bg-gray-700 p-6 rounded-xl shadow-2xl border border-gray-600 relative">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl">Gallery</h2>
            <div className="flex space-x-4 items-center">
              <button onClick={() => handleScroll('left')} className="bg-gray-600 hover:bg-gray-500 text-white py-2 px-4 rounded-full">
                &larr;
              </button>
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={handleImageUpload}
                className="text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-gray-600 file:text-white hover:file:bg-gray-500"
              />
              <button onClick={() => handleScroll('right')} className="bg-gray-600 hover:bg-gray-500 text-white py-2 px-4 rounded-full">
                &rarr;
              </button>
            </div>
          </div>
          <div id="image-container" className="grid grid-cols-3 gap-4">
            {visibleImages.map((image, index) => (
              <div key={index} className="relative overflow-visible rounded-lg shadow-lg hover:shadow-xl">
                <img
                  src={image}
                  alt={`Uploaded ${index}`}
                  className="w-full h-full object-cover transition-transform duration-700 ease-in-out transform hover:scale-125 hover:z-50 rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
