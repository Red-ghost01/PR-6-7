import React, { useState } from "react";
import FaqImage from "../assets/images/65df16e541d38750b514883e_shutterstock_1864000498-p-800.jpg"

const faqs = [
  {
    question: "What is your return policy?",
    answer:
      "You may return most new, unopened items within 30 days of delivery for a full refund.",
  },
  {
    question: "How do I track my order?",
    answer:
      "You can track your order status in your account or by using the tracking number sent to your email.",
  },
  {
    question: "Do you offer customer support?",
    answer: "Yes, we offer 24/7 customer support via email and chat.",
  },
  {
    question: "Can I modify my order?",
    answer: "Yes, you can modify your order within 2 hours of placing it.",
  },
  {
    question: "Do you ship internationally?",
    answer: "Yes, we ship to many countries worldwide.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (openIndex !== index) {
      setOpenIndex(index);
    } else {
      setOpenIndex(null);
    }
  };

  return (
    <div className="pt-24 bg-[#0A0D13] py-[50px] px-[140px]">
      <div>
        <h1 className="text-[#F49F0A] mb-24 text-[48px] font-semibold m-auto w-fit">
          FAQ
        </h1>
      </div>
      <div className="flex gap-10 items-center">
        <div>
            <img src={FaqImage} alt="FaqImage" />
        </div>
        <div className="max-w-[1024px] mx-auto">
          {faqs.map((faq, index) => {
            // Calculate the style based on the open state
            const isOpen = openIndex === index;

            return (
              <div key={index} className="border-b border-[#ffffffdc]">
                <button
                  className="flex justify-between items-center w-full text-left py-7 px-20 text-white bg-[#F49F0A] focus:outline-none"
                  onClick={() => toggleAccordion(index)}
                >
                  <span className="text-2xl font-semibold">{faq.question}</span>
                  <span className="text-6xl">{isOpen ? "-" : "+"}</span>
                </button>
                <div
                  className={`overflow-auto transition-max-height duration-1000 ${
                    isOpen ? "max-h-40" : "max-h-0"
                  }`}
                >
                  <div className="py-7 px-20 text-[#F49F0A] bg-white">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Faq;
