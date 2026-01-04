import React from "react";
import SectionWrapper from "../components/SectionWrapper";
import { skills } from "../data/skills";
import { Reveal } from "../components/Reveal";

const Skills = () => {
    return (
        <div name="skills" className="w-full bg-secondary text-white">
            <SectionWrapper id="skills" className="flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <Reveal>
                        <p className="text-4xl font-bold inline border-b-4 border-cyan-500">
                            Skills
                        </p>
                    </Reveal>
                    <Reveal>
                        <p className="py-6 text-gray-400">
                            Technologies and tools I work with to bring ideas to life.
                        </p>
                    </Reveal>
                </div>

                <div className="grid sm:grid-cols-2 gap-8 px-0 sm:px-0">
                    {skills.map((skillGroup, index) => (
                        <Reveal key={index} width="100%">
                            <div className="bg-primary p-6 rounded-lg shadow-md border-b-2 border-cyan-600 h-full hover:scale-105 duration-300">
                                <h3 className="text-2xl font-bold mb-4 text-center sm:text-left text-cyan-400">
                                    {skillGroup.category}
                                </h3>
                                <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
                                    {skillGroup.items.map((item, idx) => (
                                        <span
                                            key={idx}
                                            className="px-4 py-2 bg-secondary rounded-full text-sm font-semibold text-gray-300 shadow-sm border border-gray-700"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </SectionWrapper>
        </div>
    );
};

export default Skills;
