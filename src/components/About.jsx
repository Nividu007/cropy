import React from 'react';

const About = () => {
  return (
    <div id="about" className="flex mx-10 items-top justify-center mb-10 ">
      <div className="w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 shadow-[7px_6px_14px_7px_rgba(0,_0,_0,_0.35)] p-6">
        <h2 className="mb-4 text-2xl font-semibold text-gray-100">About Us</h2>
        <p className="text-gray-300 leading-relaxed">
          Welcome to Cropy! Our application helps Farmers, Investors, and Researchers make informed decisions about crop yield predictions.
          With a user-friendly interface and powerful AI model, we aim to make your prediction accurate.
        </p>
      </div>
    </div>
  );
};

export default About;
