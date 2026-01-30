import {Link} from 'react-router-dom';
import {useState} from 'react';
import NavLink from "./NavLink.jsx";
import Smile from '/smile-logo.svg'

function Nav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);


    return (
        <header className=" m-4 sticky top-4 z-50 ">
            <nav className="container mx-auto px-4 py-4">

                <div className=" bg-opacity-80 backdrop-blur-sm bg-opacity-80 rounded-full overflow-hidden p-1 pl-5 pr-5 2 flex items-center justify-between hover:bg-blue-600">
                    <NavLink to="/" target="_blank">
                        <img src={Smile} className="w-16 h-16 origin-center transition-transform duration-700 ease-in-out hover:rotate-[360deg] hover:scale-110 logo w-16 " alt="Smile logo" />
                    </NavLink>
                    <NavLink to="/about">OVER MIJ</NavLink>
                    <NavLink to="/projects">PROJECTEN</NavLink>
                    <NavLink to="/contact">CONTACT</NavLink>

                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden text-white hover:text-blue-600 focus:outline-none"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            {isMenuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </div>

                {isMenuOpen && (
                    <div className="md:hidden mt-4 pb-4">
                        <div className="flex flex-col space-y-4">
                            <NavLink
                                to="/"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Home
                            </NavLink>
                            <NavLink
                                to="/about"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Over Mij
                            </NavLink>
                            <NavLink
                                to="/projects"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Projecten
                            </NavLink>
                            <NavLink
                                to="/contact"
                                onClick={() => setIsMenuOpen(false)}>
                                Contact
                            </NavLink>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
}

export default Nav;