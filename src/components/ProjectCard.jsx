import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const ProjectCard = ({ project }) => {
    return (
        <motion.div
            whileHover={{ y: -10 }}
            className="bg-secondary rounded-lg overflow-hidden shadow-lg border border-gray-700 hover:shadow-cyan-500/20 transition-all duration-300 flex flex-col h-full"
        >
            {/* Placeholder for Image - Using a gradient for now */}
            <div className="h-48 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center p-4">
                <span className="text-4xl text-gray-600 font-bold">{project.title.charAt(0)}</span>
            </div>

            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold mb-2 text-white">{project.title}</h3>
                <p className="text-gray-400 mb-4 flex-grow">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech, index) => (
                        <span
                            key={index}
                            className="text-xs font-medium px-2 py-1 bg-primary text-cyan-400 rounded-full border border-cyan-900"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                <ul className="list-disc list-inside text-gray-400 text-sm mb-6 space-y-1">
                    {project.features.slice(0, 3).map((feature, i) => (
                        <li key={i} className="line-clamp-1">{feature}</li>
                    ))}
                </ul>

                <div className="flex gap-4 mt-auto">
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 text-white hover:text-cyan-400 transition-colors"
                    >
                        <FaGithub size={20} /> Code
                    </a>
                    <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 text-white hover:text-cyan-400 transition-colors"
                    >
                        <FaExternalLinkAlt size={18} /> Live Demo
                    </a>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
