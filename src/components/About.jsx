import Header from "./Header.jsx";

function About() {
    return (
        <div className="p-12 ">

            <div className="container mx-auto px-4 ">
                <section className="p-12 mb-12">
                    <div className="flex justify-around">
                        <div>
                            <Header className="">
                                ABOUT
                            </Header>
                            <h1>
                                ME
                            </h1>
                        </div>
                        <div>
                            <img src="/public/picture.svg" alt="logo" className="w-64 h-64"/>
                        </div>
                    </div>
                </section>
                <section className="mb-12 flex text-center gap-4 justify-between">
                    <div className="flex flex-col items-center">
                        <h2>Design</h2>
                        <div className="relative w-64 h-64">
                            {[
                                "https://resources.jetbrains.com/storage/products/company/brand/logos/PhpStorm_icon.svg",
                                "https://resources.jetbrains.com/storage/products/company/brand/logos/PhpStorm_icon.svg",
                                "https://resources.jetbrains.com/storage/products/company/brand/logos/PhpStorm_icon.svg",
                                "https://resources.jetbrains.com/storage/products/company/brand/logos/PhpStorm_icon.svg",
                                "https://resources.jetbrains.com/storage/products/company/brand/logos/PhpStorm_icon.svg"
                                // voeg hier meer URLs toe
                            ].map((src, i, arr) => {
                                const angle = (360 / arr.length) * i;
                                return (
                                    <div
                                        key={i}
                                        className="absolute w-16 h-16 top-1/2 left-1/2 transition-transform duration-300 hover:scale-125 cursor-pointer"
                                        style={{
                                            transform: `rotate(${angle}deg) translate(90px) rotate(-${angle}deg) translate(-50%, -50%)`,
                                        }}
                                    >
                                        <img src={src} alt="Program logo" className="w-full h-full object-contain"/>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className="flex flex-col items-center ">
                        <h2>Development</h2>
                        <div
                            className="w-full h-full object-contain filter-[drop-shadow(6px_6px_0px_#177642)] relative">
                            {[
                                "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/FileZilla_logo.svg/500px-FileZilla_logo.svg.png",
                                "https://code.visualstudio.com/assets/branding/code-stable.png",
                                "https://framerusercontent.com/images/Aiz6UFs2GjtwZCywBWIHZnRAiXY.png?width=200&height=200",
                                "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/postman-icon.png",
                                "https://resources.jetbrains.com/storage/products/company/brand/logos/PhpStorm_icon.svg",
                                "https://dbngin.com/resources/images/apps/dbngin.png",
                                "https://cdn.worldvectorlogo.com/logos/git-bash.svg"
                                // voeg hier meer URLs toe
                            ].map((src, i, arr) => {
                                const angle = (360 / arr.length) * i;
                                return (
                                    <div
                                        key={i}
                                        className="absolute w-16 h-16 top-1/2 left-1/2 transition-transform duration-300 hover:scale-125 cursor-pointer"
                                        style={{
                                            transform: `rotate(${angle}deg) translate(90px) rotate(-${angle}deg) translate(-50%, -50%)`,
                                        }}
                                    >
                                        <img src={src} alt="Program logo" className="w-full h-full object-contain"/>
                                    </div>
                                );
                            })}
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
        </div>
    );
}

export default About;