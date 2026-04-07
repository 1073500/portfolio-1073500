import {Link} from 'react-router-dom';
import NavLink from "./NavLink.jsx";
import HomeIcon from '/public/home-but-icon.svg'

function Nav() {


    return (
        <header className=" m-4 top-4 z-50 ">

            <nav >

                <div className=" overflow-hidden p-1 pl-2 pr-2  flex items-center gap-2 md:gap-4 justify-between ">
                    <NavLink to="/" target="_blank">
                        <img src={HomeIcon} title="Home"
                             className=" min-w-10 min-h-10 shrink-0  w-18 h-18 origin-center transition-transform duration-700  hover:rotate-[360deg]  "
                             alt="Butterfly Home Button"/>
                    </NavLink>
                        <NavLink className="" to="/about">ABOUT</NavLink>
                        <NavLink to="/projects">PROJECTEN</NavLink>
                        <NavLink to="/contact">CONTACT</NavLink>
                </div>

            </nav>
        </header>
    );
}

export default Nav;