import {Link} from 'react-router-dom';
import {useState} from 'react';
import NavLink from "./NavLink.jsx";
import Heart from '/moshi-heart.png'

function Nav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);


    return (
        <header className="  m-4 sticky top-4 z-50 ">
            <nav className="container mx-auto px-4 py-4">
                <a href="/" target="_blank">
                    <img src={Heart} className="logo w-20 " alt="Heart" />
                </a>
                <div className=" backdrop-blur-sm border bg-slate-900 bg-opacity-80 border-gray-800 rounded-full overflow-hidden shadow-md  p-2 pl-5 pr-5 2  flex items-center justify-between">

                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/about">Over Mij</NavLink>
                    <NavLink to="/projects">Projecten</NavLink>
                    <NavLink to="/contact">Contact</NavLink>

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