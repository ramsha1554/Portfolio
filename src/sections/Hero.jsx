import React from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { Reveal } from "../components/Reveal";

const Hero = () => {
    return (
        <section
            name="hero"
            className="h-screen w-full flex items-center justify-center bg-gradient-to-b from-primary to-secondary"
        >
            <div className="max-w-screen-lg mx-auto flex flex-col items-start justify-center h-full px-4 md:flex-row md:items-center">
                <div className="flex flex-col justify-center h-full md:w-full">
                    <Reveal>
                        <h2 className="text-4xl sm:text-7xl font-bold text-white mb-4">
                            I'm a Full Stack MERN Developer
                        </h2>
                    </Reveal>
                    <Reveal>
                        <p className="text-gray-400 py-4 max-w-md text-xl">
                            Building Scalable Web Applications with Clean Code.
                            Focused on performance, user experience, and solving real-world problems.
                        </p>
                    </Reveal>

                    <Reveal>
                        <div className="flex gap-4">
                            <Link
                                to="projects"
                                smooth
                                duration={500}
                                className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer hover:scale-105 duration-300"
                            >
                                View Projects
                            </Link>
                            <Link
                                to="contact"
                                smooth
                                duration={500}
                                className="group text-cyan-500 w-fit px-6 py-3 my-2 flex items-center rounded-md border border-cyan-500 cursor-pointer hover:bg-cyan-500/10 hover:scale-105 duration-300"
                            >
                                Contact Me
                            </Link>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
};

export default Hero;
