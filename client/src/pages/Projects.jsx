import project1 from "../assets/images/Project1.png";
import project2 from "../assets/images/project2.jpg";
import project3 from "../assets/images/Project3.jpg";
import avartar1 from "../assets/images/avartar.png";
import './Projects.css'

import React, { useEffect, useRef, useState }  from "react";
import { Link } from "react-router-dom";

const project_list = [
  {
    backgroundimage: project1,
    avartar: avartar1,
    author: "By Jacob Fernandez",
    project: "Minimalist website design and development",
    date: "18 Apr 2022",
    link: "",
  },
  {
    backgroundimage: project2,
    avartar: avartar1,
    author: "By Jacob Fernandez",
    project: "Minimalist website design and development",
    date: "18 Apr 2022",
    link: "",
  },
  {
    backgroundimage: project3,
    avartar: avartar1,
    author: "By Jacob Fernandez",
    project: "Minimalist website design and development",
    date: "18 Apr 2022",
    link: "",
  },
];

const Projects = () => {
  return (
    <div className=" pt-24 bg-[#0A0D13] py-[50px] px-[140px]">
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-5xl font-bold text-center text-white pb-24">
          Our Projects
        </h2>
        <div>
          {project_list.map((project, index) => (
            <Panel key={index} index={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;

const Panel = ({ index, project }) => {
    const panelRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
  
    useEffect(() => {
      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(panelRef.current); // Stop observing once it has appeared
        }
      }, {
        threshold: 0.1, // Trigger when 10% of the element is visible
      });
  
      if (panelRef.current) {
        observer.observe(panelRef.current);
      }
  
      return () => {
        if (panelRef.current) {
          observer.unobserve(panelRef.current);
        }
      };
    }, []);
  
    return (
      <div
        ref={panelRef}
        className={`flex ${index % 2 === 0 ? "flex-row-reverse" : ""} mb-10 relative w-fit`}
      >
        <div className="w-[50%] h-[360px]">
          <img
            src={project.backgroundimage}
            className="w-full h-full"
            alt="project image"
          />
        </div>
        <div className="w-[38%] text-white flex justify-center items-center px-24">
          <div>
            <div className="flex gap-6 pb-4">
              <img src={project.avartar} width={28} height={28} alt="avartar" />
              <p className="text-[14px] md:text-[18px]">{project.author}</p>
            </div>
            <p className="text-[18px] md:text-[24px] font-bold pb-4">{project.project}</p>
            <div>
              <p className="text-[14px] md:text-[18px]">{project.date}</p>
              <Link to={project.link}></Link>
            </div>
          </div>
        </div>
        <div className="absolute w-[88%] h-full bg-gradient-to-b from-[#171e2c] via-[#364768] to-[#0f131d] opacity-25"></div>
        <div className={`${isVisible ? 'fadeIn' : 'opacity-0'}`}></div> {/* Apply fadeIn class when visible */}
      </div>
    );
  };