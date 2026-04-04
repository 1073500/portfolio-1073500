import Header from "./Header.jsx";

function About() {
    return (<div className="p-12 ">

        <div className="container mx-auto px-4 ">
            <section className="p-6 mb-6">
                    <div className="text-center">
                        <Header >
                            ABOUT ME
                        </Header>
                    </div>
                    <div className="text-center p-12">
                        <p className="text-black text-sm text-center">
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur."
                        </p>
                    </div>
            </section>
            <section className="mb-12 justify-self-start gap-4 justify-between">
                <div className="flex flex-col mb-6">
                    <h1 className="mb-6 text-end ">Design</h1>
                    <div className="grid grid-cols-2 sm:items-center justify-items-center sm:flex-col mb-6 text-end">
                        <div
                            className="w-48 h-48 object-contain filter-[drop-shadow(6px_6px_0px_#177642)] relative">
                            {["https://vectorseek.com/wp-content/uploads/2025/07/canva-ai-Logo-PNG-SVG-Vector-01-300x300.png", "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg", "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/miro-icon.png", "https://iconape.com/wp-content/png_logo_vector/trello-3.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Inkscape_Logo.svg/1280px-Inkscape_Logo.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Adobe_Illustrator_CC_icon.svg/500px-Adobe_Illustrator_CC_icon.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/960px-Adobe_Photoshop_CC_icon.svg.png",


                                // voeg hier meer URLs toe
                            ].map((src, i, arr) => {
                                const angle = (360 / arr.length) * i;
                                return (<div
                                    key={i}
                                    className="absolute w-16 h-16 top-1/2 left-1/2 transition-transform duration-300 hover:scale-125 cursor-pointer"
                                    style={{
                                        transform: `rotate(${angle}deg) translate(90px) rotate(-${angle}deg) translate(-50%, -50%)`,
                                    }}
                                >
                                    <img src={src} alt="Program logo" className="w-full h-full object-contain"/>
                                </div>);
                            })}
                        </div>
                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur."</p>
                    </div>
                </div>
                <div className="flex flex-col ">
                    <h1 className="mb-6 text-end">Development</h1>
                    <div className="grid grid-cols-2 justify-items-center mb-6 text-end">
                        <div
                            className=" w-48 h-48 object-contain filter-[drop-shadow(6px_6px_0px_#177642)] relative">
                            {["https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/FileZilla_logo.svg/500px-FileZilla_logo.svg.png", "https://code.visualstudio.com/assets/branding/code-stable.png", "https://framerusercontent.com/images/Aiz6UFs2GjtwZCywBWIHZnRAiXY.png?width=200&height=200", "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/postman-icon.png", "https://resources.jetbrains.com/storage/products/company/brand/logos/PhpStorm_icon.svg", "https://dbngin.com/resources/images/apps/dbngin.png", "https://cdn.worldvectorlogo.com/logos/git-bash.svg", // voeg hier meer URLs toe
                            ].map((src, i, arr) => {
                                const angle = (360 / arr.length) * i;
                                return (<div
                                    key={i}
                                    className="absolute w-16 h-16 top-1/2 left-1/2 transition-transform duration-300 hover:scale-125 cursor-pointer"
                                    style={{
                                        transform: `rotate(${angle}deg) translate(90px) rotate(-${angle}deg) translate(-50%, -50%)`,
                                    }}
                                >
                                    <img src={src} alt="Program logo" className="w-full h-full object-contain"/>
                                </div>);
                            })}
                        </div>
                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur."</p>
                    </div>
                </div>
            </section>
            <section className="mb-16">
                <h2>Skills</h2>
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum."</p>
            </section>

        </div>
    </div>);
}

export default About;