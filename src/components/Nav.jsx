import {Link} from 'react-router-dom';
import NavLink from "./NavLink.jsx";
import HomeIcon from '/public/home-but-icon.svg'
import { useState, useEffect } from "react";

function Nav() {

    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => setShowButton(window.scrollY > 80);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
    return (
        <>
            <nav>
                <div className="overflow-hidden p-4 flex items-center gap-2 md:gap-4 justify-between">
                    <NavLink to="/" target="_blank">
                        <img src={HomeIcon} title="Home"
                             className="min-w-10 min-h-10 shrink-0 w-18 h-18 origin-center transition-transform duration-700 hover:rotate-[360deg]"
                             alt="Butterfly Home Button"/>
                    </NavLink>
                    <NavLink to="/about">ABOUT</NavLink>
                    <NavLink to="/projects">PROJECTEN</NavLink>
                    <NavLink to="/contact">CONTACT</NavLink>
                </div>
            </nav>

            {showButton && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-6z-50 p-3 m-1 rounded-full bg-white text-black shadow-lg transition-all duration-300 hover:scale-110"
                    title="Terug naar nav"
                >
                    ↑
                </button>
            )}
        </>
    );

}

export default Nav;