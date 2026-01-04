import React from "react";
import SectionWrapper from "../components/SectionWrapper";
import { experiences } from "../data/experience";
import { Reveal } from "../components/Reveal";

const Experience = () => {
    return (
        <div name="experience" className="w-full bg-primary text-white">
            <SectionWrapper id="experience" className="flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <Reveal>
                        <p className="text-4xl font-bold inline border-b-4 border-cyan-500">
                            Experience
                        </p>
                    </Reveal>
                </div>

                <div className="flex flex-col gap-8 px-0 sm:px-0">
                    {experiences.map((exp, index) => (
                        <Reveal key={index} width="100%">
                            <div className="flex flex-col md:flex-row gap-4 md:gap-10 border-l-2 border-cyan-500 pl-6 pb-6 relative">
                                {/* Dot for timeline */}
                                <div className="absolute w-4 h-4 bg-cyan-500 rounded-full -left-[9px] top-0 shadow-[0_0_10px_rgba(6,182,212,0.8)]"></div>

                                <div className="md:w-1/4">
                                    <h4 className="text-xl font-bold text-white">{exp.role}</h4>
                                    <p className="text-cyan-400 font-medium">{exp.company}</p>
                                    <p className="text-sm text-gray-500 mt-1">{exp.period}</p>
                                </div>
                                <div className="md:w-3/4">
                                    <p className="text-gray-300 leading-relaxed">{exp.description}</p>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </SectionWrapper>
        </div>
    );
};

export default Experience;
