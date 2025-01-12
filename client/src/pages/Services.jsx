import React from 'react';
import Carousel from "react-multi-carousel";
import { Link } from 'react-router-dom';
import "react-multi-carousel/lib/styles.css";

// Import your images
import webImage from "../assets/images/business.jpg"; // Adjust the path as necessary

const services = [
    {
        id: 1,
        name: 'Web Development',
        img: webImage,  // Use the imported variable here
        description: "Avoid unnecessary complications and focus on what matters most. We'll work with you to create a website that's both functional and visually appealing.",
    },
    {
        id: 2,
        name: 'Mobile Development',
        img: webImage, // Use the same or a different imported variable for the corresponding image
        description: "We'll work with you to create a mobile app that's both functional and visually appealing.",
    },
    {
        id: 3,
        name: 'Data Analysis',
        img: webImage, // Replace this with the correct image if necessary
        description: "We'll work with you to create a mobile app that's both functional and visually appealing.",
    },
    {
        id: 4,
        name: 'UI/UX Design',
        img: webImage, // Replace this with the correct image if necessary
        description: "We'll work with you to create a mobile app that's both functional and visually appealing.",
    },
    {
        id: 5,
        name: 'SEO Optimization',
        img: webImage, // Replace this with the correct image if necessary
        description: "We'll work with you to create a mobile app that's both functional and visually appealing.",
    },
    {
        id: 6,
        name: 'Web Development',
        img: webImage, // Replace this with the correct image if necessary
        description: "We'll work with you to create a mobile app that's both functional and visually appealing.",
    },
];

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
            <div className=" pt-24 bg-[#0A0D13] py-[50px]">
                <div className='flex flex-col items-center justify-center'>
                    <h2 className='text-5xl font-bold text-center text-white'>
                        Our Services
                    </h2>
                    <p className='text-xl text-white pt-7'>Let's see the world with us with you and your family</p>
                </div>
                <div className="px-5" >
                    <Carousel
                        additionalTransfrom={0}
                        arrows
                        autoPlay
                        autoPlaySpeed={2000}
                        centerMode={true}
                        className=""
                        containerClass="container-with-dots"

                        dotListClass=""
                        draggable
                        focusOnSelect={false}
                        infinite
                        itemClass=""
                        keyBoardControl
                        minimumTouchDrag={80}
                        pauseOnHover
                        renderArrowsWhenDisabled={false}
                        renderButtonGroupOutside={false}
                        renderDotsOutside={false}
                        responsive={{
                            desktop: {
                                breakpoint: {
                                    max: 3000,
                                    min: 1440
                                },
                                items: 4,
                                partialVisibilityGutter: 40
                            },
                            customize: {
                                breakpoint: {
                                    max: 1440,
                                    min: 1024
                                },
                                items: 3,
                                partialVisibilityGutter: 30
                            },
                            mobile: {
                                breakpoint: {
                                    max: 464,
                                    min: 0
                                },
                                items: 1,
                                partialVisibilityGutter: 30
                            },
                            tablet: {
                                breakpoint: {
                                    max: 1024,
                                    min: 464
                                },
                                items: 2,
                                partialVisibilityGutter: 30
                            }
                        }}
                        rewind={false}
                        rewindWithAnimation={false}
                        rtl={false}
                        shouldResetAutoplay
                        showDots={false}
                        sliderClass=""
                        slidesToSlide={1}
                        swipeable
                    >
                        {
                            services.map((service) => (
                                <div key={service.id} className={service.id % 2 ? "hover:shadow-xl hover:shadow-white block rounded-lg bg-white shadow-lg dark:bg-neutral-700 w-72 m-7 p-4 h-80 mt-32"
                                    : "hover:shadow-xl hover:shadow-white block rounded-lg bg-white shadow-lg dark:bg-neutral-700 w-72 m-7 p-4 h-80"}>
                                    <Link to={'/more-services'}>
                                        <img className="rounded-t-lg" src={service.img} alt={service.name} />
                                    </Link>
                                    <div className="flex flex-col h-full">
                                        <h5 className="mt-2 mb-2 text-xl font-bold tracking-wide text-neutral-800 dark:text-neutral-50">
                                            {service.name}
                                        </h5>
                                        <p className="mb-4 text-base text-neutral-500 dark:text-neutral-300 overflow-hidden text-ellipsis" style={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical' }}>
                                            {service.description}
                                        </p>
                                        <Link to={'/more-services'}
                                            className="inline-block rounded bg-blue-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-blue-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-blue-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-blue-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
                                            Discover More
                                        </Link>
                                    </div>
                                </div>
                            ))


                        }
                    </Carousel>
                </div>
                <div className="flex flex-col items-center justify-center pt-8">
                    <h2 className='text-5xl font-bold text-center text-white'>
                        Our Advantage
                    </h2>
                    <div className="grid 2xl:grid-cols-5 md:grid-cols-3 grid-cols-1 gap-6 p-6">
                        {advantage.map((advantage) => (
                            <div key={advantage.id} className="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 h-64">
                                <a href="#">
                                    <img className="rounded-t-lg h-32 w-full object-cover" alt={advantage.name} />
                                </a>
                                <div className="flex flex-col h-full p-4">
                                    <h5 className="mb-2 text-lg font-bold tracking-wide text-neutral-800 dark:text-neutral-50">
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