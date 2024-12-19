import React, { useState, useEffect } from "react";
import project_img from "../assets/project.jpg";

const Projects = () => {
    const projects = [ // Array to Store Project Info
        {
            title: "Project 1",
            desc: "This is a React Project",
            img: project_img,
            link: "",
        },
        {
            title: "Project 2",
            desc: "This is a React Project",
            img: project_img,
            link: "",
        },
        {
            title: "Project 3",
            desc: "This is a React Project",
            img: project_img,
            link: "",
        },
        {
            title: "Project 4",
            desc: "This is a React Project",
            img: project_img,
            link: "",
        },
        {
            title: "Project 5",
            desc: "This is a React Project",
            img: project_img,
            link: "",
        },
        {
            title: "Project 6",
            desc: "This is a React Project",
            img: project_img,
            link: "",
        },
        {
            title: "Project 7",
            desc: "This is a React Project",
            img: project_img,
            link: "",
        },
        {
            title: "Project 8",
            desc: "This is a React Project",
            img: project_img,
            link: "",
        },
        {
            title: "Project 9",
            desc: "This is a React Project",
            img: project_img,
            link: "",
        },
    ];

    const [visibleProjects, setVisibleProjects] = useState([]);
    const [projectsToShow, setProjectsToShow] = useState(6); // Default to show 6 projects initially

    useEffect(() => { // Update the visible projects when the number of projects to show changes
        setVisibleProjects(projects.slice(0, projectsToShow));
    }, [projectsToShow]);

    const loadMoreProjects = () => { // To load more projects
        setProjectsToShow((prev) => {
            if (prev + 3 <= projects.length) {
                return prev + 3;
            } else {
                return projects.length;
            }
        });
    };


    useEffect(() => { // Detect screen size and set projects to show accordingly
        const handleResize = () => {
            const isMobile = window.innerWidth < 640;
            setProjectsToShow(isMobile ? 3 : 6);
        };

        handleResize(); // Initial check
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <section id="Projects" className="flex flex-col justify-center items-center px-4 py-12 sm:py-12">
            <h1 className="font-roboto-slab text-[2rem] sm:text-[2.5rem] font-normal text-white mb-10 sm:mb-14">
                Projects
            </h1>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-16">
                {visibleProjects.map((project, index) => (
                    <div
                        key={index}
                        className="group h-52 w-80 rounded-lg bg-cover bg-center relative shadow-md"
                        style={{ backgroundImage: `url(${project.img})` }}
                    >
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                            <h2 className="text-white text-lg font-bold">{project.title}</h2>
                            <p className="text-gray-300 text-sm mt-2">{project.desc}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Load More Button */}
            {projectsToShow < projects.length && (
                <button
                    onClick={loadMoreProjects}
                    className="mt-8 px-6 py-2 bg-[#0b132b] text-white rounded-lg hover:bg-blue-600 transition duration-300"
                >
                    Load More
                </button>
            )}
        </section>
    );
};

export default Projects;
