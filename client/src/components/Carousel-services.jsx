import React from 'react';
import { Link } from "react-router-dom";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/dist/css/splide.min.css";
import webImage from "../assets/images/business.jpg"; // Adjust the path as necessary

const services = [
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
];

function CarouselServices() {
    return (
        <div className="relative flex h-full pt-10">
            <div className="container max-w-screen-xl mx-auto relative z-9 overflow-x-hidden">
                <Splide
                    options={{
                        type: "loop",
                        autoScroll: {
                            pauseOnHover: true,
                            pauseOnFocus: false,
                            rewind: true,
                            speed: 1.5, // Adjusted speed for better visibility
                        },
                        arrows: false,
                        pagination: false,
                        fixedWidth: '300px',
                        gap: '50px',
                    }}
                    extensions={{ AutoScroll }}
                >
                    {services.map((service) => (
                        <SplideSlide key={service.id} className="hover:shadow-xl hover:shadow-white block rounded-lg bg-white shadow-lg dark:bg-neutral-700">
                            <Link to={'/more-services'}>
                                <img className="rounded-t-lg" src={service.img} alt={service.name} style={{ width: '100%', height: 'auto' }} />
                            </Link>
                            <div className="flex flex-col h-full p-4">
                                <h5 className="mt-2 mb-2 text-xl font-bold tracking-wide text-neutral-800 dark:text-neutral-50">
                                    {service.name}
                                </h5>
                                <p className="mb-4 text-base text-neutral-500 dark:text-neutral-300 overflow-hidden text-ellipsis" style={{
                                    display: '-webkit-box',
                                    WebkitLineClamp: 2,
                                    WebkitBoxOrient: 'vertical'
                                }}>
                                    {service.description}
                                </p>
                                <Link to={'/more-services'} className="inline-block rounded bg-blue-500 px-6 py-2 text-xs font-medium uppercase leading-normal text-white shadow transition duration-150 ease-in-out hover:bg-blue-600 focus:outline-none">
                                    Discover More
                                </Link>
                            </div>
                        </SplideSlide>
                    ))}
                </Splide>
            </div>
        </div>
    );
}

export default CarouselServices;