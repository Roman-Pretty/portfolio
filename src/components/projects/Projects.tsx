import ProjectCard from './ProjectCard';
import SurveySpark from '../../assets/survey-spark.png';
import TourCast from '../../assets/tour-cast.png';

export function Projects() {
    return (
        <section id='projects' className="hero px-2 lg:px-24 min-h-screen flex flex-col items-center bg-base-100">
            <h2 className="text-3xl font-bold text-center py-10">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <ProjectCard image='https://i.imgur.com/PTc0xpj.png' title="Minecraft Mods" description="
            Java-based Minecraft mods showcasing my proficiency in software development and reacting to community impact.
            " githublink="https://www.github.com/ElenaiDev/ElenaiDodge2.0" date="2020" downloads="15M+" link='https://www.curseforge.com/members/elenaidev/projects' />
                <ProjectCard image={SurveySpark} title="SurveySpark" description="
            A full-stack web application that allows users to generate surveys using GPT-4 and collect responses.
            " githublink='https://www.github.com/conorvenus/survey-spark' link='https://www.github.com/conorvenus/survey-spark' />
                <ProjectCard image={TourCast} title="TourCast" description="
            A weather app built using React that displays what activities are optimal based on climate data.
            " githublink='https://www.github.com/Roman-Pretty/TourCast' link='https://roman-pretty.github.io/TourCast/' />
            </div>
        </section>
    )

}
