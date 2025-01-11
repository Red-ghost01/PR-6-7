import React from 'react';
import { FaCompass } from 'react-icons/fa';
import sampleVideo from '../assets/images/desktop_Hero.mp4';

const Home = () => {
  return (
    <div className="relative w-full h-screen">
      <video
        className="absolute top-0 left-0 object-cover w-full h-full opacity-90"
        preload="metadata"
        loop
        aria-label="Sample Video"
        autoPlay
        muted
        playsInline
      >
        <source src={sampleVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute md:top-[30%] md:left-[10%] md:right-[55%]">
        <p className="text-6xl font-bold text-white">Your Partner In Remote And Office</p>
        <div className="flex mt-1 text-[20px] text-white items-center">
          <span className="mr-2">-</span>
          <p>
            Harness the power of data to build experiences and technologies that work smarter, drive results, and fuel innovation.
          </p>
        </div>
        <div className="flex items-center mt-[46px] w-[196px] h-[50px] bg-[#F49F0A] rounded">
          <button className='flex items-center justify-center w-[70%] h-full text-black bg-transparent focus:outline-none' aria-label="Get in touch">
            Get in touch
          </button>
          <div className='flex justify-center items-center w-[30%] h-full bg-[#EB9400] rounded'>
            <FaCompass className='text-black' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;