import React from 'react'
import dj from "../assets/dj.png"
import js from "../assets/js.png"
import css from "../assets/css.png"
import py from "../assets/py.png"
import react from "../assets/react.png"
import tw from "../assets/tw.png"
import git from "../assets/git.png"
import html from "../assets/html.png"
import ts from "../assets/ts.png"

const Circle = () => {
    return (
        <div className="circle w-96 h-96 rounded-full flex flex-col justify-between">
            <div className="flex justify-between mx-[25%] mt-10">
                <img className='h-10 transition-all duration-100 hover:scale-110' src={dj} alt="django" />
                <img className='h-10 transition-all duration-100 hover:scale-110' src={js} alt="js" />
            </div>
            <div className="flex justify-between mx-[7%] mt-5">
                <img className='h-10 transition-all duration-100 hover:scale-110' src={css} alt="css" />
                <img className='h-10 transition-all duration-100 hover:scale-110' src={py} alt="py" />
            </div>
            <div className="flex justify-center items-center">
                <img className='h-10 transition-all duration-100 hover:scale-110' src={react} alt="react" />
            </div>
            <div className="flex justify-between mx-[7%] mb-5">
                <img className='h-10 transition-all duration-100 hover:scale-110' src={tw} alt="tw" />
                <img className='h-10 transition-all duration-100 hover:scale-110' src={git} alt="git" />
            </div>
            <div className="flex justify-between mx-[25%] mb-10">
                <img className='h-10 transition-all duration-100 hover:scale-110' src={html} alt="html" />
                <img className='h-10 transition-all duration-100 hover:scale-110' src={ts} alt="ts" />
            </div>
        </div>)
}

export default Circle