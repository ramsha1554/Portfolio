import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const links = [
        { id: 1, link: "about" },
        { id: 2, link: "skills" },
        { id: 3, link: "projects" },
        { id: 4, link: "experience" },
        { id: 5, link: "contact" },
    ];

    return (
        <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-primary fixed z-50 glass">
            <div>
                <h1 className="text-3xl font-bold font-signature ml-2 cursor-pointer hover:text-accent transition-colors duration-300">
                    <Link to="hero" smooth duration={500}>DevPortfolio</Link>
                </h1>
            </div>

            <ul className="hidden md:flex">
                {links.map(({ id, link }) => (
                    <li
                        key={id}
                        className="px-4 cursor-pointer capitalize font-medium text-gray-400 hover:scale-105 hover:text-white duration-200"
                    >
                        <Link to={link} smooth duration={500} offset={-80}>
                            {link}
                        </Link>
                    </li>
                ))}
                <div className="flex items-center ml-4 gap-4 border-l pl-4 border-gray-700">
                    <a href="https://github.com/ramsha1554/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors"><FaGithub size={20} /></a>
                    <a href="https://www.linkedin.com/in/syeda-ramsha-anjum1554/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors"><FaLinkedin size={20} /></a>
                </div>
            </ul>

            <div
                onClick={() => setNav(!nav)}
                className="cursor-pointer pr-4 z-10 text-gray-400 md:hidden"
            >
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>

            {nav && (
                <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-primary to-black text-gray-400">
                    {links.map(({ id, link }) => (
                        <li
                            key={id}
                            className="px-4 cursor-pointer capitalize py-6 text-4xl"
                        >
                            <Link
                                onClick={() => setNav(!nav)}
                                to={link}
                                smooth
                                duration={500}
                                offset={-80}
                            >
                                {link}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Navbar;
