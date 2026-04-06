import {Link} from "react-router-dom";
import { useEffect } from 'react';

function Home() {
    useEffect(() => {
        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = 'auto'; // zet het terug als je wegnavigeerd
        };
    }, []);
    return (
        <div className="">
            <section className="w-full ">
                <div className="fixed grid md:grid-cols-2 gap-16 justify-items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
                    <div className="flex flex-col px-2 md:px-4 ">
                        <text className="text-note-yellow text-5xl sm:text-6xl md:text-9xl mb-4 md:mb-6">
                            MADYA
                        </text>

                        <h1 className="text-3xl sm:text-4xl md:text-6xl mb-4 md:mb-6">
                            DA SILVA
                        </h1>
                        <p>
                            Student Creative Media and Game Technologies
                        </p>
                    </div>
                    <div className="relative w-96 h-96 mx-auto">

                        <img
                            src="/comp-keyring.svg"
                            alt="keyring"
                            className="absolute w-100 h-100 left-1/2 -translate-x-1/2 top-0 z-0"
                            style={{top: '-100px'}}
                        />

                        <div title="contact" className="keychain absolute cursor-pointer"
                             style={{top: '110px', left: '135px', rotate: '-40deg', transformOrigin: 'top center'}}>
                            <img src="/contact-key.svg" alt="projects" className="w-50 h-50"/>
                        </div>

                        <Link to="/about">
                            <div title="about me" className="keychain absolute cursor-pointer"
                                 style={{top: '120px', left: '75px',}}>
                                <img src="/ab-me-key.svg" alt="about-me" className="w-60 h-60"/>
                            </div>
                        </Link>
                        <Link to="/projects">
                            <div title="projects" className="keychain absolute cursor-pointer"
                                 style={{top: '60px', right: '30px', rotate: '30deg', transformOrigin: 'top center'}}>
                                <img src="/comp-keyring-prof.svg" alt="contact" className="w-80 h-80"/>
                            </div>
                        </Link>

                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;
