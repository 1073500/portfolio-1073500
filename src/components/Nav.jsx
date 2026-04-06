import {Link} from 'react-router-dom';
import NavLink from "./NavLink.jsx";
import HomeIcon from '/public/home-but-icon.svg'

function Nav() {


    return (
        <header className=" m-4 top-4 z-50 ">
            <nav className="">

                <div className=" overflow-hidden p-1 pl-5 pr-5 2 flex items-center gap-6 justify-between ">
                    <NavLink to="/" target="_blank">
                        <img src={HomeIcon} title="Home"
                             className=" w-16 h-16 origin-center transition-transform duration-700 ease-in-out hover:rotate-[360deg] hover:scale-110 logo w-16 "
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