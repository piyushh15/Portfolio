import React from 'react';
import "./ProjectCard.css";

const ProjectCard = ({ title, image, detail, link }) => {
  return (
    <div className="projectcard-container">
      <div className="projectcard-content">
        <a href={link}>
          <img className="projectcard-image" src={image} alt={title} />
        </a>
        <div className="projectcard-details">
          <a href={link}>
            <h5 className="projectcard-title font-briem text-[1.4rem] tracking-wider">{title}</h5>
          </a>
          <p className="projectcard-description font-montserrat text-[0.95rem] ">{detail.description}</p>
          
         
        </div>
        <div className='flex justify-center items-center mb-7'>
        <a 
            href={link} 
            className="inline-flex text-montserrat items-center px-7 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            View Project
            
          
          </a>

        </div>
       
      </div>
    </div>
  );
};

export default ProjectCard;
