import Header from "./Header.jsx";

function About() {
    return (
        <div className="">

            <div className="container mx-auto px-4 ">
                <div className="text-center mb-12">
                    <Header>
                        Over Mij
                    </Header>
                </div>
                <div className="bg-blue-700 p-4 rounded-2xl m-6">
                    <div className="grid md:grid-cols-2 gap-4">
                        <div
                            className="transition-transform duration-300 ease-out hover:scale-104 hover:bg-blue-700 bg-blue-600 text-white bg-opacity-80 border-gray-800 rounded-2xl overflow-hidden p-6">
                            <h2 className=" p-4 text-3xl font-semibold mb-4">
                                Mijn naam is Madya
                            </h2>
                            <p className="leading-relaxed mb-4">
                                Ik ben een ... type developer, skills en voorkeuren
                            </p>
                            <p className="leading-relaxed">
                                Hobbies ...
                            </p>
                        </div>

                        <div
                            className="transition-transform duration-300 ease-out hover:scale-104 hover:bg-blue-700 bg-blue-600 text-white bg-opacity-80 border-gray-800 rounded-2xl overflow-hidden  p-6">
                            <h2 className="text-2xl font-bold mb-6">
                                Technische Vaardigheden
                            </h2>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h3 className="font-semibold mb-3 text-gray-800">Frontend</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {['React', 'Tailwind CSS', 'JavaScript', 'TypeScript', 'HTML', 'CSS'].map(skill => (
                                            <span key={skill}
                                                  className="bg-red-800 border border-red-700 px-3 py-1 rounded-full text-sm">
              {skill}
            </span>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <h3 className="font-semibold mb-3 text-gray-800">Backend & Tools</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {['Node.js', 'Express', 'MongoDB', 'MySQL', 'Git'].map(skill => (
                                            <span key={skill}
                                                  className="bg-blue-800 border border-blue-700 px-3 py-1 rounded-full text-sm">
              {skill}
            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div
                        className="transition-transform duration-300 ease-out hover:scale-102 hover:bg-blue-700 bg-blue-600 text-white  border-gray-800 rounded-2xl overflow-hidden mt-4 p-6">
                        <h2 className="text-2xl font-bold  mb-6 flex items-center">
                            <span className="text-3xl mr-3">🎓</span>
                            Opleiding
                        </h2>
                        <div className="space-y-6">
                            <div>
                                <h3 className="font-semibold text-lg ">
                                    Creative Media and Game Technologies
                                </h3>
                                <p className="text-gray-800 mb-2">2024 - Heden</p>
                                <p className=" text-sm">
                                    Hogeschool Rotterdam
                                </p>
                            </div>

                            <div>
                                <h3 className="font-semibold text-lg ">
                                    Bezig
                                </h3>
                                <p className="text-gray-900 mb-2">Fullstack developing</p>
                                <p className=" text-sm">
                                    Momenteel ben ik bezig met het leren van fullstack developing, hierdoor ben ik
                                    vaardig in front -en back-end
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;