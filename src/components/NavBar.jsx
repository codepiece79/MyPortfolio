import React, { useState, useEffect } from "react";

const NavBar = () => {
    const tabs = ["Home", "About", "Projects", "Contact"]; // NavBar Links
    const [activeTab, setActiveTab] = useState("Home"); // For Highlighting the Active Tab
    const [isScrolled, setIsScrolled] = useState(false); // For NavBar to be Fixed after scrolling
    const [isMenuOpen, setIsMenuOpen] = useState(false); // Burger Menu Toggle for Small Screens

    const handleClick = (tab) => { // To handle click
        setActiveTab(tab);
        setIsMenuOpen(false);
        const section = document.getElementById(tab);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    useEffect(() => { // For Navbar to be fixed after scrolling & Changing Highlighted tab when scrolled
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
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
        <>
            {/* Desktop Navbar */}
            <nav
                className={`hidden sm:block z-[50] fixed w-full py-5 transition-all duration-300 ${isScrolled ? "bg-[rgba(0,0,0,0.2)]" : "mt-2"
                    }`} // Will change BG when scrolled
            >
                <ul className="flex justify-center list-none">
                    {tabs.map((tab) => ( // For Maping through the tabs Array
                        <li key={tab} className="flex flex-col justify-center items-center">
                            <a
                                href={"#" + tab}
                                className={`text-white font-montserrat mx-[1.2rem] text-[1.2rem] transition-colors duration-300 hover:text-[#e7d5d5] ${activeTab === tab ? "font-semibold" : ""
                                    }`}
                                onClick={() => handleClick(tab)} // Changing and scrolling through the active tab
                            >
                                {tab}
                            </a>
                            {activeTab === tab && ( // Underlining the active tab
                                <div className="mt-1 w-12 h-[2px] bg-white"></div>
                            )}
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Mobile Navbar */}
            <nav
                className={`sm:hidden z-[50] fixed w-full py-5 transition-all duration-300 ${isScrolled ? "bg-[rgba(0,0,0,0.2)]" : "mt-2"
                    }`} // Will change BG when scrolled
            >
                <div className="flex justify-between items-center px-4">
                    <h1 className="text-white text-[1.5rem] font-montserrat">My Portfolio</h1>
                    <button
                        className="text-white text-[1.8rem]"
                        onClick={() => setIsMenuOpen((prev) => !prev)} // Changing ismenuopen to true if false & false if true
                    >
                        ☰
                    </button>
                </div>
                {isMenuOpen && ( // Shows tabs only when ismenuopen is true
                    <ul className="list-none flex flex-col items-start mt-4 px-4 space-y-4">
                        {tabs.map((tab) => ( // For Maping through the tabs Array
                            <li key={tab}>
                                <a
                                    href={"#" + tab}
                                    className={`text-white font-montserrat text-[1.2rem] transition-colors duration-300 hover:text-[#e7d5d5] ${activeTab === tab ? "font-semibold" : ""
                                        }`}
                                    onClick={() => handleClick(tab)} // Changing and scrolling through the active tab
                                >
                                    {tab}
                                </a>
                            </li>
                        ))}
                    </ul>
                )}
            </nav>
        </>
    );
};

export default NavBar;
