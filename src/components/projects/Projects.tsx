import ProjectCard from './ProjectCard';
import SurveySpark from '../../assets/survey-spark.png';
import TourCast from '../../assets/tour-cast.png';

export function Projects() {
    return (
        <section id='projects' className="hero px-2 lg:px-24 min-h-screen flex flex-col items-center bg-base-100">
            <h2 className="text-3xl font-bold text-center py-10">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

                <ProjectCard
                    badges={[
                        { name: 'Java', color: 'bg-[#b07219]' },
                        { name: 'Gradle', color: 'bg-[#012e38]' },
                        { name: 'Forge', color: 'bg-[#dfa86a]' },
                        { name: 'LWJGL', color: 'bg-[#221e1f]' },
                    ]}
                    image='https://i.imgur.com/PTc0xpj.png' title="Minecraft Mods" description="
            Java-based Minecraft mods showcasing my proficiency in software development and reacting to community impact.
            " githublink="https://www.github.com/ElenaiDev/ElenaiDodge2.0" date="2020" downloads="15M+" link='https://www.curseforge.com/members/elenaidev/projects' />

                <ProjectCard 
                badges={[ 
                    { name: 'TS', color: 'bg-[#2f74c0]' },
                    { name: 'NextJS', color: 'bg-[#000000]' },
                    { name: 'Tailwind', color: 'bg-[#a2e0fc]'} ,
                    { name: 'GPT-4', color: 'bg-[#70a597]' },
                    
                ]}
                image={SurveySpark} title="SurveySpark" description="
            A full-stack web application that allows users to generate surveys using GPT-4 and collect responses.
            " githublink='https://www.github.com/conorvenus/survey-spark' link='https://www.github.com/conorvenus/survey-spark' />

                <ProjectCard 
                badges={[ 
                    { name: 'JS', color: 'bg-[#fcdc00]' },
                    { name: 'React', color: 'bg-[#3998b6]' },
                    { name: 'SCSS', color: 'bg-[#c76494]'} ,
                    { name: 'Weather API', color: 'bg-[#eb6e4b]' },
                    
                ]}
                image={TourCast} title="TourCast" description="
            A weather app built using React that displays what activities are optimal based on climate data.
            " githublink='https://www.github.com/Roman-Pretty/TourCast' link='https://roman-pretty.github.io/TourCast/' />
            </div>
        </section>
    )

}
