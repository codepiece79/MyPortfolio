import React from 'react';
import graphics from '../assets/graphics.png';

const Home = () => {
  return (
    <section
      id="Home"
      className="sm:justify-between sm:items-center sm:h-screen sm:mx-[5%] flex justify-center items-center h-screen"
    >
      {/* Content for small screens */}
      <h1 className="text-[2rem] font-roboto-slab text-white sm:hidden text-center">
        AHMAD UMAR <br />
        Full-Stack Developer!
      </h1>

      {/* Content for larger screens */}
      <h1 className="sm:leading-[3rem] sm:text-[2.2rem] text-[1.6rem] font-roboto-slab text-white hidden sm:block">
        Hi! I'm Ahmad Umar <br />
        I'm a Full-Stack Developer!
      </h1>

      <div className="Main-Img">
        <img src={graphics} alt="Image" className="max-w-full h-auto hidden sm:block" />
      </div>
    </section>
  );
};

export default Home;
