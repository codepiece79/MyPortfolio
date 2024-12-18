import React from 'react'
import Circle from './Circle'

const About = () => {
    return (
        <section id='About' className='h-screen flex justify-center items-center'>
            <div className="flex justify-between items-center h-[80%] w-[90%] p-[5%] bg-[#0b132b]">
                <div className="w-[50%]">
                    <h1 className='font-roboto-slab text-[2rem] font-normal text-white leading-[3rem]'>About Me</h1>
                    <p className='mb-4 mt-2 font-montserrat text-[0.95rem] text-white w-[85%]'>Hi! I’m Ahmad Umar, a Full-Stack Developer skilled in React, Python, and Django, building modern and responsive websites.</p>
                    <h1 className='font-roboto-slab text-[1.2rem] font-[600] text-white leading-[3rem]'>Front-End</h1>
                    <p className='mb-4 ml-6 font-montserrat text-[0.9rem] text-white w-[85%]'>I specialize in creating responsive, user-friendly interfaces using HTML, CSS, JavaScript, and React. My focus is on delivering clean designs with seamless functionality, ensuring a smooth user experience.</p>
                    <h1 className='font-roboto-slab text-[1.2rem] font-[600] text-white leading-[3rem]'>Back-End</h1>
                    <p className='mb-4 ml-6 font-montserrat text-[0.9rem] text-white w-[85%]'>I build robust, scalable backend systems using Python and Django, ensuring efficient data handling and secure server-side functionality to support modern web applications.</p>
                </div>
                <Circle />
            </div>
        </section>
    )
}

export default About