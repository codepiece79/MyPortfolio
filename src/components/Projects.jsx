import React from 'react'

const Projects = () => {
    const projects = [
        {
            title: "Project 1",
            desc: "This is a React Project",
            img: "../assets/project.jpg"
        },
        {
            title: "Project 2",
            desc: "This is a React Project",
            img: "../assets/project.jpg"
        },
        {
            title: "Project 3",
            desc: "This is a React Project",
            img: "../assets/project.jpg"
        },
        {
            title: "Project 4",
            desc: "This is a React Project",
            img: "../assets/project.jpg"
        },
        {
            title: "Project 5",
            desc: "This is a React Project",
            img: "../assets/project.jpg"
        },
        {
            title: "Project 6",
            desc: "This is a React Project",
            img: "../assets/project.jpg"
        }
    ];

    return (
        <section id="Projects" className="h-screen flex flex-col justify-between items-center">
            <h1 className='font-roboto-slab text-[2rem] font-normal text-white leading-[3rem]'>Projects</h1>

            <div className="grid grid-cols-3 gap-16 mt-16">
                {projects.map((project) => (
                    <div
                        key={project.title}
                        className={`bg-[url('${project.img}')] bg-cover h-52 w-80 rounded`}
                    >
                        {/* <div className="bg-black bg-opacity-50 h-full flex flex-col justify-center items-center rounded">
                            <h2 className="text-white font-bold">{project.title}</h2>
                            <p className="text-gray-300">{project.desc}</p>
                        </div> */}
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;
