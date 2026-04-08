import {Link} from "react-router-dom";
import { useEffect } from 'react';

function Home() {
    useEffect(() => {
        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);
    return (
        <div className="">
            <section className="w-full ">
                <div className="fixed grid md:grid-cols-2 gap-24 justify-items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
                    <div className="flex flex-col px-2 md:px-4 items-center text-center md:items-start md:text-left">
                        <text className="md:text-left">
                            MADYA
                        </text>
                        <h1 className="w-full whitespace-nowrap mb-4 md:mb-6 md:text-left">
                            DA SILVA
                        </h1>
                        <p className="md:text-left">
                            Student Creative Media and Game Technologies
                        </p>
                    </div>
                    <div className="relative w-64 h-64 sm:w-96 sm:h-96 mx-auto">

                        <img
                            src="/comp-keyring.svg"
                            alt="keyring"
                            className="absolute w-72 h-72 sm:w-100 sm:h-100 left-1/2 -translate-x-1/2 -top-15 sm:-top-25 z-0"
                        />

                        <Link to="/contact">
                            <div title="contact" className="keychain absolute cursor-pointer top-25 left-22.5 sm:top-27.5 sm:left-33.75 -rotate-40 origin-top">
                                <img src="/contact-key.svg" alt="projects" className="w-32 h-32 sm:w-50 sm:h-50"/>
                            </div>
                        </Link>

                        <Link to="/about">
                            <div title="about me" className="keychain absolute cursor-pointer top-25 left-13.75 sm:top-30 sm:left-18.75">
                                <img src="/ab-me-key.svg" alt="about-me" className="w-40 h-40 sm:w-60 sm:h-60"/>
                            </div>
                        </Link>

                        <Link to="/projects">
                            <div title="projects" className="keychain absolute cursor-pointer top-25 right-12.5 sm:top-28.75 sm:right-22.5 rotate-30 origin-top">
                                <img src="/keyring-projects.svg" alt="contact" className="w-44 h-40 sm:w-65 sm:h-60"/>
                            </div>
                        </Link>

                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;
