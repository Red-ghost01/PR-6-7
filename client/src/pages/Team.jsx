import React from "react";
import sampleVideo from "../assets/images/system-on-chip.mp4";
import Carousel from "../components/Carousel-team";
const Team = () => {
    return (
        <div className="relative w-full h-screen">
            <div className="absolute top-0 left-0 object-cover w-full h-full bg-gradient-to-t from-[#00000075] to-[#e9e9e948]">
                <div className=" px-[140px] py-28">
                    <h1 className="xl:text-6xl md:text-5xl text-4xl font-bold text-[#F49F0A]">Our Teams</h1>
                    <p className="pt-[32px] xl:text-2xl md:text-[18px] text-white"><span>-</span><span>&nbsp;</span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, voluptate.</p>
                </div>
                <Carousel />
            </div>
            <video
                className=" top-0 left-0 object-cover w-full h-full "
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


        </div>
    );
};

export default Team;