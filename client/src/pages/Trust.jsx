import React from "react";
import BadgeCard from "../components/client-card.jsx";
import Url from "../assets/images/logos/instapage-logo-vector.svg";
import image from "../assets/images/467858946_1317848599119206_8893472275537528835_n.jpg";
const logos = [
    {
        id: 1,
        name: 'instapage',
        url: Url,
    },
    {
        id: 2,
        name: 'instapage',
        url: Url,
    },
    {
        id: 3,
        name: 'instapage',
        url: Url,
    },
    {
        id: 4,
        name: 'instapage',
        url: Url,
    },
    {
        id: 5,
        name: 'instapage',
        url: Url,
    },
    {
        id: 6,
        name: 'instapage',
        url: Url,
    },
    {
        id: 7,
        name: 'instapage',
        url: Url,
    },
    {
        id: 8,
        name: 'instapage',
        url: Url,
    },

];
const customers = [
    {
        id: 1,
        image: image,
        title: 'Trusted by customers',
        description: 'In the result,which is the same as the member of the.',
    },
    {
        id: 2,
        image: image,
        title: 'Trusted by customers',
        description: 'In the result,which is the same as the member of the.',
    },
    {
        id: 3,
        image: image,
        title: 'Trusted by customers',
        description: 'In the result,which is the same as the member of the.',
    },
]
export default function () {
    const title = "Trusted by customers";
    const description = "In the result,which is the same as the member of the.";
    return (
        <div className=" h-full md:h-screen md:px-[140px] 2xl:pt-24 md:pt-28 px-[70px] bg-[#0A0D13]">
            <div className="flex flex-col items-center justify-center ">
                <h1 className="text-4xl font-bold text-[#F49F0A]">TRUSTED BY CUSTOMERS</h1>
                <p className="pt-8">In the result,which is the same as the member of the.</p>
            </div>
            <div className="grid grid-cols-1 xl:grid-cols-4 md:grid-cols-2 gap-10 py-6">
                {logos.map((logo) => (
                    <div key={logo.id} className="block  rounded-lg shadow-lg dark:bg-neutral-700 ">
                        <a href="#">
                            <img className="rounded-t-lg h-32 w-full object-cover" alt={logo.name} src={logo.url} />
                        </a>
                    </div>
                ))}
            </div>
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-10 py-6">
                {customers.map((customer) => (
                    <BadgeCard image={image} title={title} description={description} />
                ))}
            </div>
        </div>
    )
}