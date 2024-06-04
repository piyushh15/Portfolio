import React, { useState, useEffect } from 'react';
import "./Project.css";
import ProjectCard from './ProjectCard';
import { ProjectData } from "../utils/Projectdata";

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [numVisibleCards, setNumVisibleCards] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 782) {
        setNumVisibleCards(1);
      } else if (screenWidth < 1143) {
        setNumVisibleCards(2);
      } else {
        setNumVisibleCards(3);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % ProjectData.length);
  };
  
  const prevProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + ProjectData.length) % ProjectData.length);
  };
  
  const visibleProjects = ProjectData.slice(currentIndex, currentIndex + numVisibleCards);

  return (
    <section id="projects">
      <div className='project-container'>
      <h5 className="project-title font-montserrat">Projects</h5>
      <div className="project-carousel p-1">
        <button className="arrow left-arrow rounded-[100%] w-[3rem] text-3xl" onClick={prevProject}>&#8249;</button>
        <div className="project">
          {visibleProjects.map((project, index) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              image={project.image}
              detail={project.detail[0]}
              link={project.link}
            />
          ))}
        </div>
        <button className="arrow right-arrow rounded-[100%] w-[3rem] text-3xl" onClick={nextProject}>&#8250;</button>
      </div>
    </div>

    </section>
    
  );
};

export default Projects;
