import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Link } from 'react-router-dom';
import Carousel from "../components/Carousel-services";
// Import your images
import webImage from "../assets/images/business.jpg"; // Adjust the path as necessary

// Your advantage array remains unchanged as it does not contain images
const advantage = [
    {
        id: 1,
        name: 'Web Development',
        description: "Avoid unnecessary complications and focus on what matters most. We'll work with you to create a website that's both functional and visually appealing.",
    },
    {
        id: 2,
        name: 'Mobile Development',
        description: "We'll work with you to create a mobile app that's both functional and visually appealing.",
    },
    {
        id: 3,
        name: 'Data Analysis',
        description: "We'll work with you to create a mobile app that's both functional and visually appealing.",
    },
    {
        id: 4,
        name: 'UI/UX Design',
        description: "We'll work with you to create a mobile app that's both functional and visually appealing.",
    },
    {
        id: 5,
        name: 'SEO Optimization',
        description: "We'll work with you to create a mobile app that's both functional and visually appealing.",
    },
    {
        id: 6,
        name: 'Web Development',
        description: "We'll work with you to create a mobile app that's both functional and visually appealing.",
    },
];
const Services = () => {
    return (
        <div>
            <div className=" pt-24 bg-[#0A0D13] py-[50px] md:px-[140px] sm:px-[50px]">
                <div className='flex flex-col items-center justify-center'>
                    <h2 className='text-5xl font-bold text-center text-white'>
                        Our Services
                    </h2>
                    <p className='md:text-xl text-sm text-white pt-7'>Let's see the world with us with you and your family</p>
                </div>
                <div  >
                    <Carousel />
                </div>
                <div className="flex flex-col items-center justify-center md:pt-8 pt-10">
                    <h2 className='text-5xl font-bold text-center text-white'>
                        Our Advantage
                    </h2>
                    <div className="grid 2xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 py-6">
                        {advantage.map((advantage) => (
                            <div key={advantage.id} className="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 h-64">
                                <a href="#">
                                    <img className="rounded-t-lg h-32 w-full object-cover" alt={advantage.name} />
                                </a>
                                <div className="flex flex-col items-center justify-center xl:p-4 md:p-2 p-1">
                                    <h5 className="mb-2  text-lg font-bold tracking-wide text-neutral-800 dark:text-neutral-50">
                                        {advantage.name}
                                    </h5>
                                    <p className="mb-4 text-sm text-neutral-500 dark:text-neutral-300 overflow-hidden text-ellipsis" style={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical' }}>
                                        {advantage.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;