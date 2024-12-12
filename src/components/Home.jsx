import React from "react";
import NavBar from "./NavBar";

const Home = () => {
  return (
    <section id="Home">
      <NavBar />
      <div className="hero">
        <h1>
          Hi! I'm Ahmad Umar <br />
          I'm a Full-Stack Developer
        </h1>
        <div className="Main-Img">
          <img src="src\assets\graphics.png" alt="Main Image" />
        </div>
      </div>
    </section>
  );
};

export default Home;
