import React from "react";
import sampleVideo from "../assets/images/system-on-chip.mp4";
import webImage from "../assets/images/business.jpg"; // Adjust the path as necessary
const teams = [
    {   
        id: 1,
        name: 'Web Development',
        img: webImage,  
        description: "Avoid unnecessary complications and focus on what matters most. We'll work with you to create a website that's both functional and visually appealing.",
    },
    {
        id: 2,
        name: 'Mobile Development',
        img: webImage,
        description: "We'll work with you to create a mobile app that's both functional and visually appealing.",
    },
    {
        id: 3,
        name: 'Data Analysis',
        img: webImage,
        description: "Our team provides actionable insights through data analysis.",
    },
    {
        id: 4,
        name: 'UI/UX Design',
        img: webImage,
        description: "We create engaging UI/UX designs that enhance user experiences.",
    },
    {
        id: 5,
        name: 'SEO Optimization',
        img: webImage,
        description: "Optimize your website for search engines and improve visibility.",
    },
    {
        id: 6,
        name: 'Content Creation',
        img: webImage,
        description: "We will help you communicate your message clearly and effectively.",
    },
    {
        id: 7,
        name: 'Web Development',
        img: webImage,  
        description: "Avoid unnecessary complications and focus on what matters most. We'll work with you to create a website that's both functional and visually appealing.",
    },
    {
        id: 8,
        name: 'Mobile Development',
        img: webImage,
        description: "We'll work with you to create a mobile app that's both functional and visually appealing.",
    },
    {
        id: 9,
        name: 'Data Analysis',
        img: webImage,
        description: "Our team provides actionable insights through data analysis.",
    },
    {
        id: 10,
        name: 'UI/UX Design',
        img: webImage,
        description: "We create engaging UI/UX designs that enhance user experiences.",
    },
    {
        id: 11,
        name: 'SEO Optimization',
        img: webImage,
        description: "Optimize your website for search engines and improve visibility.",
    },
    {
        id: 12,
        name: 'Content Creation',
        img: webImage,
        description: "We will help you communicate your message clearly and effectively.",
    },
];

const Team = () => {
    return (
        <div className="relative w-full h-screen">
            <div className="absolute top-0 left-0 object-cover w-full h-full bg-gradient-to-t from-[#00000075] to-[#e9e9e948]">
                <div className=" px-[140px] xl:py-28 md:pt-32 md:pb-16 pt-28 pb-20">
                    <h1 className="xl:text-6xl md:text-5xl text-4xl font-bold text-[#F49F0A]">Our Teams</h1>
                    <p className="pt-[32px] xl:text-2xl md:text-[18px] text-white"><span>-</span><span>&nbsp;</span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, voluptate.</p>
                </div>
                <div className="grid grid-cols-1 xl:grid-cols-4 md:grid-cols-2 gap-10 py-6">
                    {teams.map((team) => (
                        <div key={team.id} className="block  rounded-lg shadow-lg dark:bg-neutral-700 ">
                            <a href="#">
                                <img className="rounded-t-lg h-32 w-full object-cover" alt={team.name} src={team.img} />
                            </a>
                        </div>
                    ))}

                </div>
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