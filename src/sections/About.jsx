import React from "react";
import SectionWrapper from "../components/SectionWrapper";
import { Reveal } from "../components/Reveal";

const About = () => {
    return (
        <div name="about" className="w-full bg-secondary text-white">
            <SectionWrapper id="about" className="flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <Reveal>
                        <p className="text-4xl font-bold inline border-b-4 border-cyan-500">
                            About
                        </p>
                    </Reveal>
                </div>

                <div className="text-xl mt-10">
                    <Reveal>
                        <p className="mb-6">
                            I am a Full Stack Developer specializing in the MERN stack. I don't
                            just write code; I build solutions. With a strong background in web development,
                            I approach every project with a product-first mindset, ensuring that
                            technical decisions translate into business value.
                        </p>
                    </Reveal>

                    <Reveal>
                        <p>
                            My expertise lies in architecting database schemas, building
                            RESTful APIs, and crafting responsive front-end interfaces. I believe
                            in clean, maintainable code and continuous learning. Currently, I am
                            open to opportunities where I can contribute to meaningful projects
                            and grow as an engineer.
                        </p>
                    </Reveal>
                </div>
            </SectionWrapper>
        </div>
    );
};

export default About;
