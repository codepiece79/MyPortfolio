import React from "react";
import Circle from "./Circle";

const About = () => {
    return (
        <section
            id="About"
            className="h-auto sm:h-screen flex justify-center items-center p-4 sm:p-0"
        >
            <div className="flex flex-col sm:flex-row justify-between items-center h-auto sm:h-[80%] w-full sm:w-[90%] p-[5%] bg-[#0b132b]">
                {/* Text Section */}
                <div className="w-full sm:w-[50%] mb-6 sm:mb-0">
                    <h1 className="font-roboto-slab text-[1.8rem] sm:text-[2rem] font-normal text-white leading-[2.5rem] sm:leading-[3rem]">
                        About Me
                    </h1>
                    <p className="mb-4 mt-2 font-montserrat text-[0.9rem] sm:text-[0.95rem] text-white w-[95%] sm:w-[85%]">
                        Hi! I’m Ahmad Umar, a Full-Stack Developer skilled in React, Python, and Django, building modern and responsive websites.
                    </p>
                    <h1 className="font-roboto-slab text-[1.1rem] sm:text-[1.2rem] font-[600] text-white leading-[2rem] sm:leading-[3rem]">
                        Front-End
                    </h1>
                    <p className="mb-4 ml-4 sm:ml-6 font-montserrat text-[0.85rem] sm:text-[0.9rem] text-white w-[95%] sm:w-[85%]">
                        I specialize in creating responsive, user-friendly interfaces using HTML, CSS, JavaScript, and React. My focus is on delivering clean designs with seamless functionality, ensuring a smooth user experience.
                    </p>
                    <h1 className="font-roboto-slab text-[1.1rem] sm:text-[1.2rem] font-[600] text-white leading-[2rem] sm:leading-[3rem]">
                        Back-End
                    </h1>
                    <p className="mb-4 ml-4 sm:ml-6 font-montserrat text-[0.85rem] sm:text-[0.9rem] text-white w-[95%] sm:w-[85%]">
                        I build robust, scalable backend systems using Python and Django, ensuring efficient data handling and secure server-side functionality to support modern web applications.
                    </p>
                </div>

                {/* Circle Section */}
                <div className="w-full sm:w-[50%] flex justify-center">
                    <Circle />
                </div>
            </div>
        </section>
    );
};

export default About;
