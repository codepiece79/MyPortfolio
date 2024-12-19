import React from "react";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";


const App = () => {
  return (
    <>
    <NavBar />
    <Home />
    <About />
    <Projects />
    {/* <Contact /> */}
    </>
  );
};

export default App;
