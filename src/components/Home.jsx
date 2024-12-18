import React from 'react'
import graphics from '../assets/graphics.png';

const Home = () => {
    return (
        <section id="Home" className="flex justify-between items-center h-screen mx-[5%]">
            <h1 className='font-roboto-slab text-[2.2rem] font-normal text-white leading-[3rem]'>
                Hi! I'm Ahmad Umar <br />
                I'm a Full-Stack Developer!
            </h1>
            <div className="Main-Img">
                <img src={graphics} alt="Main Image" />
            </div>
        </section>
    )
}

export default Home