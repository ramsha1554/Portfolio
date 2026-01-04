import React from "react";
import SectionWrapper from "../components/SectionWrapper";
import { Reveal } from "../components/Reveal";

const Contact = () => {
    return (
        <div name="contact" className="w-full bg-secondary text-white pb-20">
            <SectionWrapper id="contact" className="flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <Reveal>
                        <p className="text-4xl font-bold inline border-b-4 border-cyan-500">
                            Contact
                        </p>
                    </Reveal>
                </div>

                <Reveal>
                    <p className="pb-8 text-gray-400">Submit the form below or shoot me an email.</p>
                </Reveal>

                <div className="flex justify-center items-center">
                    <Reveal width="100%">
                        <form action="https://getform.io/f/example-endpoint" method="POST" className="flex flex-col w-full md:w-1/2 max-w-lg mx-auto gap-4">
                            <input type="text" name="name" placeholder="Enter your name" className="p-3 bg-transparent border-2 border-gray-700 rounded-md text-white focus:outline-none focus:border-cyan-500 transition-colors" />
                            <input type="text" name="email" placeholder="Enter your email" className="p-3 bg-transparent border-2 border-gray-700 rounded-md text-white focus:outline-none focus:border-cyan-500 transition-colors" />
                            <textarea name="message" placeholder="Enter your message" rows="6" className="p-3 bg-transparent border-2 border-gray-700 rounded-md text-white focus:outline-none focus:border-cyan-500 transition-colors"></textarea>

                            <button className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 my-4 mx-auto flex items-center rounded-md hover:scale-105 duration-300 font-bold tracking-wider">
                                Let's Talk
                            </button>
                        </form>
                    </Reveal>
                </div>
            </SectionWrapper>
        </div>
    );
};

export default Contact;
