import React, { useState, useEffect } from "react";

const NavBar = () => {
    const tabs = ["Home", "About", "Projects", "Contact"];
    const [activeTab, setActiveTab] = useState("Home");
    const [isScrolled, setIsScrolled] = useState(false);

    const handleClick = (tab) => {
        setActiveTab(tab);
        const section = document.getElementById(tab);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        }
        window.addEventListener("scroll", handleScroll);

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveTab(entry.target.id);
                    }
                });
            },
            { threshold: 0.5 }
        );
        tabs.forEach((tab) => {
            const section = document.getElementById(tab);
            if (section) observer.observe(section);
        });
        return () => {
            window.removeEventListener("scroll", handleScroll);
            observer.disconnect();
        };
    }, []);

    return (
        <nav className={`fixed w-full py-5 transition-all duration-300 ${isScrolled ? 'bg-[rgba(0,0,0,0.2)]' : 'mt-2'}`}>
            <ul className="flex justify-center list-none">
                {tabs.map((tab) => (
                    <li key={tab} className="flex flex-col justify-center items-center">
                        <a href={"#" + tab} className={`text-white font-montserrat mx-[1.2rem] text-[1.2rem] transition-colors duration-300 hover:text-[#e7d5d5] ${activeTab === tab ? "font-semibold" : ''}`} onClick={() => handleClick(tab)}>{tab}</a>
                        {activeTab === tab && (
                            <div className=" mt-1 w-12 h-[2px] bg-white"></div>
                        )}
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default NavBar