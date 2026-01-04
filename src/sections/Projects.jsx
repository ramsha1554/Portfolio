import React from "react";
import SectionWrapper from "../components/SectionWrapper";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";
import { Reveal } from "../components/Reveal";

const Projects = () => {
    return (
        <div name="projects" className="w-full bg-primary text-white">
            <SectionWrapper id="projects" className="flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <Reveal>
                        <p className="text-4xl font-bold inline border-b-4 border-cyan-500">
                            Projects
                        </p>
                    </Reveal>
                    <Reveal>
                        <p className="py-6 text-gray-400">
                            Check out some of my recent work. These implementations highlight my ability to build scalable, production-ready applications.
                        </p>
                    </Reveal>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 px-12 sm:px-0">
                    {projects.map((project, index) => (
                        <Reveal key={index} width="100%">
                            <ProjectCard project={project} />
                        </Reveal>
                    ))}
                </div>
            </SectionWrapper>
        </div>
    );
};

export default Projects;
