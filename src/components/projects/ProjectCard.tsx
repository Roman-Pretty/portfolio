import React from 'react';
import {Download, Github, Clock, SquareArrowOutUpRight} from 'lucide-react/';

interface ProjectCardProps {
  title: string;
  description: string;
  downloads?: string;
  github?: string;
  date?: string;
  link?: string;
  githublink?: string;
  image?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, downloads="N/A", github="Available", date="2024", link="/", githublink="https://www.github.com/Roman-Pretty", image="https://via.placeholder.com/150" }) => {
  return (
    <div className="card bordered shadow-lg">
      <div className="card-body gap-6">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <img src={image} alt="Project Image" className='h-44' />
        <div className='divider '/>
        <div className="flex justify-between">
          <div className="flex gap-2">
            <Download />
            <p className='font-semibold'>{downloads}</p>
          </div>
          <a className="flex gap-2" href={githublink} target="_blank" rel="noopener noreferrer">
            <Github />
            <p className='font-semibold'>{github}</p> 
          </a>
          <div className="flex gap-2">
            <Clock />
            <p className='font-semibold'>{date}</p>
          </div>
        </div>
        
        <a href={link} className="btn btn-info mt-4" target="_blank" rel="noopener noreferrer">View Project<SquareArrowOutUpRight size={18} /></a>
      </div>
    </div>
  );
};

export default ProjectCard;