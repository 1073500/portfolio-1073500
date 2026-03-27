import {Link} from "react-router-dom";

function Home() {
    return (
        <div className="">
            <section className="py-20 m-6 md:m-24">
                <div className="flex items-center justify-around">
                    <div className="flex flex-col  px-2 md:px-4 ">
                        <h1 className="text-note-yellow  text-5xl sm:text-6xl md:text-9xl mb-4 md:mb-6">
                            MADYA
                        </h1>

                        <h2 className="text-3xl sm:text-4xl md:text-6xl mb-4 md:mb-6">
                            DA SILVA
                        </h2>
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
                             style={{top: '95px', left: '70px', rotate: '-40deg', transformOrigin: 'top center'}}>
                            <img src="/comp-keyring-cont.svg" alt="projects" className="w-80 h-80"/>
                        </div>

                        <Link to="/about">
                            <div title="about me" className="keychain absolute cursor-pointer"
                                 style={{top: '110px', left: '45px',}}>
                                <img src="/comp-keyring-abme.svg" alt="about-me" className="w-80 h-80"/>
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
