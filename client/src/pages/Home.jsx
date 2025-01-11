import React from 'react';
import sampleVideo from '../assets/images/desktop_Hero.mp4';

const VideoPlayer = () => {
  return (
    <div className="relative md:w-full h-min">

      <video
        width="100%"
        height="auto"
        className="absolute video-player opacity-90"
        preload="metadata"
        loop={true} // set to true if you want it to loop
        aria-label="Sample Video"
        autoplay // Add autoplay attribute
        muted // Mute the video to allow autoplay
        playsInline // Add playsInline attribute
      >
        <source src={sampleVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className='absolute top-[50%] left-[140px] right-[650px]'>
        <p className='text-6xl font-bold text-white'>Your Parter In Remote And Office</p>
        <div className='flex mt-1 text-[20px] text-white' style={{ whiteSpace: 'nowrap' }}><p>- Harness the power of data to build experiences and technologies that work smarter, drive result, and fuel innovation.</p>
        </div>
        </div>
    </div>
  );
};

export default VideoPlayer;