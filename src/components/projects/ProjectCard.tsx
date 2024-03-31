import React from 'react';
import { Download, Github, Clock, SquareArrowOutUpRight } from 'lucide-react/';

interface ProjectCardProps {
  title: string;
  description: string;
  downloads?: string;
  github?: string;
  date?: string;
  link?: string;
  githublink?: string;
  image?: string;
  badges?: [];
  
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  downloads = "N/A",
  github = "Available",
  date = "2024",
  link = "/",
  githublink = "https://www.github.com/Roman-Pretty",
  image = "https://via.placeholder.com/150",
  badges = [
    { name: 'JS', color: 'bg-yellow-400' },
    { name: 'TS', color: 'bg-blue-400' },
    { name: 'CSS', color: 'bg-purple-600' },
    { name: 'SCSS', color: 'bg-[#c6538c]' },
    { name: 'Tailwind', color: 'bg-blue-100' },
    { name: 'HTML', color: 'bg-orange-600' },
  ]
}) => {

  return (
    <div className="card bordered shadow-lg">
      <div className="card-body gap-6">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <a href={link} className='flex justify-center items-center' target="_blank" rel="noopener noreferrer">
          <img src={image} alt="Project Image" className='h-44' />
        </a>
        <div className='flex justify-between items-center'>
          {badges.map((badge, index) => (
            <div key={index} className={`flex justify-between items-center gap-4`}>
              <div className={`badge ${badge.color} badge-sm`}></div>
              {badge.name}
            </div>
          ))}
        </div>
        <div className='divider ' />
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