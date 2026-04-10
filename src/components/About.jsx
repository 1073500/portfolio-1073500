import Header from "./Header.jsx";

function About() {
    return (<div className="md:p-12 sm:p-4">

        <div className="container mx-auto px-4 ">
            <section className="p-6 mb-6">
                <div className="text-center mb-5">
                    <Header>
                        ABOUT ME
                    </Header>
                </div>
                <div className="text-center max-w-2xl mx-auto">
                    <p className="bg-[#56a843] p-2 rounded-2xl">
                        Mijn naam is Madya da Silva, ik ben 20 jaar oud en tweedejaars student Creative Media and Game
                        Technologies
                        aan Hogeschool Rotterdam.
                        Ik ben iemand die niet stilzit, of het nu gaat om fullstack development, design & iteratie,
                        of het verkennen van de wereld van AI-taalmodellen.
                        Ik werk als student assistent bij Stadslab Rotterdam en help ik anderen hun digitale ideeën vorm
                        te geven.
                    </p>
                </div>
            </section>
            <section className="w-full mb-12 justify-self-start gap-4 justify-between text-center">
                <div className="flex flex-col mb-6 ">

                    <div className=" grid md:grid-cols-2 gap-12 justify-items-center mb-12 md:text-end">
                        <div
                            className=" w-64 h-64 object-contain filter-[drop-shadow(6px_6px_0px_#177642)] relative">
                            {["https://vectorseek.com/wp-content/uploads/2025/07/canva-ai-Logo-PNG-SVG-Vector-01-300x300.png", "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg", "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/miro-icon.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Inkscape_Logo.svg/1280px-Inkscape_Logo.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Adobe_Illustrator_CC_icon.svg/500px-Adobe_Illustrator_CC_icon.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/960px-Adobe_Photoshop_CC_icon.svg.png ",

                            ].map((src, i, arr) => {
                                const angle = (360 / arr.length) * i;
                                return (<div
                                    key={i}
                                    className=" absolute w-14 h-14 top-1/2 left-1/2 transition-transform duration-300 hover:scale-125 cursor-pointer"
                                    style={{
                                        transform: `rotate(${angle}deg) translate(90px) rotate(-${angle}deg) translate(-50%, -50%)`,
                                    }}
                                >
                                    <img src={src} alt="Program logo" className="w-full h-full object-contain"/>
                                </div>);
                            })}
                        </div>
                        <div>
                            <h1 className="mb-6 md:text-end ">Design</h1>
                            <p className="bg-[#56a843] p-2 rounded-2xl">
                                Design is iets waar ik in op ga en ik mijn fysieke creativiteit
                                kan combineren met mijn digitale vaardigheden.
                                Van het eerste onderzoek en de vroege schetsen tot aan werkende prototypes.
                                Daarbij kom ik als student assistant bij Stadslab Rotterdam wekelijks in aanraking de
                                wereld van design. Daar help ik anderen om hetzelfde proces te doorlopen en hun ideeën
                                visueel tot leven te brengen.

                            </p>
                        </div>

                    </div>
                </div>
                <div className="flex flex-col mb-6 ">

                    <div className="grid md:grid-cols-2 gap-12 justify-items-center mb-6 md:text-end">
                        <div
                            className=" w-48 h-48 object-contain filter-[drop-shadow(6px_6px_0px_#177642)] relative">
                            {["https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/FileZilla_logo.svg/500px-FileZilla_logo.svg.png", "https://code.visualstudio.com/assets/branding/code-stable.png", "https://framerusercontent.com/images/Aiz6UFs2GjtwZCywBWIHZnRAiXY.png?width=200&height=200", "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/postman-icon.png", "https://resources.jetbrains.com/storage/products/company/brand/logos/PhpStorm_icon.svg", "https://dbngin.com/resources/images/apps/dbngin.png", "https://cdn.worldvectorlogo.com/logos/git-bash.svg", "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vitejs-logo.svg/1280px-Vitejs-logo.svg.png", "https://cdn-icons-png.flaticon.com/512/5968/5968875.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/3840px-React-icon.svg.png", "https://cdn.iconscout.com/icon/free/png-256/free-node-js-icon-svg-download-png-1174935.png"
                            ].map((src, i, arr) => {
                                const angle = (360 / arr.length) * i;
                                return (<div
                                    key={i}
                                    className="absolute w-10 h-10 top-1/2 left-1/2 transition-transform duration-300 hover:scale-125 cursor-pointer"
                                    style={{
                                        transform: `rotate(${angle}deg) translate(90px) rotate(-${angle}deg) translate(-50%, -50%)`,
                                    }}
                                >
                                    <img src={src} alt="Program logo" className="w-full h-full object-contain"/>
                                </div>);
                            })}
                        </div>
                        <div>
                            <h1 className="mb-6 md:text-end text-sm">Development</h1>
                            <p className="bg-[#56a843] p-2 rounded-2xl">Op dit moment ben ik volop bezig mezelf te ontwikkelen
                                als fullstack developer, hierdoor ben ik vaardig in front- en backend.
                                Het leukste is om uitdagingen aan te gaan en hierbij creatief en oplossingsgericht te
                                denken.

                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="mb-16 ">
                <h2>Skills</h2>
                <div className="max-w-2xl text-left">
                <p className="bg-[#56a843] p-2 rounded-2xl">JavaScript, PHP, HTML, CSS en TypeScript zijn mijn dagelijkse tools
                    waarbij ik me thuis in voel en graag mee aan de slag ga. Ook zorg ik ervoor dat mijn projecten
                    slagen door goed vooruit te plannen, hierdoor ben ik ook vaardig in Scrum en Agile.
                    Hierdoor ben ik ook goed in het plannen van mijn projecten en het werken in een team
                </p>
        </div>
            </section>

        </div>
    </div>);
}

export default About;