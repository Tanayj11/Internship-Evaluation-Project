import React, { useState } from 'react';

const Gallery = () => {
  const [images, setImages] = useState([]);

  const handleAddImage = () => {
    const newImage = prompt('Enter the image URL:');
    if (newImage) {
      setImages([...images, newImage]);
    }
  };

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
      <h2 className="text-lg font-semibold mb-4 text-white">Gallery</h2>
      <div className="grid grid-cols-3 gap-4">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="Gallery"
            className="w-full h-auto object-cover rounded-md transform hover:scale-105 transition-transform duration-300"
          />
        ))}
      </div>
      <button
        onClick={handleAddImage}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300"
      >
        Add Image
      </button>
      
    </div>
  );
};

export default Gallery;
