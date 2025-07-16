import React from 'react';

const Hero = () => {
  return (
    <div className="relative bg-gray-900 min-h-screen flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
          <span className="block">Welcome to</span>
          <span className="block text-indigo-400">Our Amazing Platform</span>
        </h1>
        <p className="mt-6 max-w-lg mx-auto text-xl text-gray-300">
          Building the future of web applications with React and Tailwind CSS.
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <button className="px-8 py-3 text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
            Get Started
          </button>
          <button className="px-8 py-3 text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50">
            Learn More
          </button>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent"></div>
    </div>
  );
};

export default Hero;