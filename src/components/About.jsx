import Header from "./Header.jsx";

function About() {
    return (
        <div className="">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <Header>
                        Over Mij
                    </Header>
                </div>

                <div className="mx-auto grid md:grid-cols-3 gap-8 mb-8">
                    <div className="backdrop-blur-sm border text-white bg-opacity-80 border-gray-800 rounded-2xl overflow-hidden shadow-md m-4 p-6 ">
                        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 ">
                            <div className="">
                                <h2 className="text-3xl font-semibold mb-4">
                                    Mijn naam is Madya
                                </h2>
                                <p className=" leading-relaxed mb-4">
                                    LOREM Ik ben een gepassioneerde developer met een passie voor het creëren
                                    van mooie en functionele webapplicaties. Met een sterke achtergrond
                                    in zowel frontend als backend development, hou ik ervan om complete
                                    oplossingen te bouwen die gebruikers echt helpen.
                                </p>
                                <p className=" leading-relaxed">
                                    LOREM Mijn reis in de tech begon [aantal] jaar geleden, en sindsdien heb ik
                                    gewerkt aan diverse projecten die variëren van kleine websites tot
                                    grote webapplicaties. Ik ben altijd op zoek naar nieuwe technologieën
                                    om te leren en manieren om mijn vaardigheden te verbeteren.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="">

                        <div className=" backdrop-blur-sm border text-white bg-opacity-80 border-gray-800 rounded-2xl overflow-hidden shadow-md m-4 p-6">
                            <h3 className="text-2xl font-bold  mb-6 flex items-center">
                                <span className="text-3xl mr-3">🎓</span>
                                Opleiding
                            </h3>
                            <div className="space-y-6">
                                <div>
                                    <h4 className="font-semibold text-lg ">
                                        Creative Media and Game Technologies
                                    </h4>
                                    <p className="text-blue-600 mb-2">2024 - Heden</p>
                                    <p className=" text-sm">
                                        Hogeschool Rotterdam
                                    </p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-lg ">
                                        Bezig
                                    </h4>
                                    <p className="text-blue-600 mb-2">Fullstack developing</p>
                                    <p className=" text-sm">
                                        Momenteel ben ik bezig met het leren van fullstack developing, hierdoor ben ik vaardig in front -en back-end
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="backdrop-blur-sm border text-white bg-opacity-80 border-gray-800 rounded-2xl overflow-hidden shadow-md m-4 p-6">
                        <h3 className="text-2xl font-bold  mb-6">
                            Technische Vaardigheden
                        </h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <h4 className="font-semibold  mb-3">Frontend</h4>
                                <div className="flex flex-wrap gap-2">
                                    {['React', 'Tailwind CSS', 'JavaScript', 'TypeScript', 'HTML', 'CSS'].map((skill) => (
                                        <span
                                            key={skill}
                                            className="bg-blue-700 border border-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium"
                                        >
                      {skill}
                    </span>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <h4 className="font-semibold  mb-3">Backend & Tools</h4>
                                <div className="flex flex-wrap gap-2">
                                    {['Node.js', 'Express', 'MongoDB', 'MYSQL', 'Git', 'REST API', 'Postman',  'TablePlus', 'DBEngin',].map((skill) => (
                                        <span
                                            key={skill}
                                            className="bg-blue-800  border border-blue-700 text-white px-3 py-1 rounded-full text-sm font-medium"
                                        >
                      {skill}
                    </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div>
                            <h4 className="font-semibold mt-3 mb-3">Overige Tools en Programma's</h4>
                            <div className="flex flex-wrap gap-2">
                                {['Visual Studio Code', 'PHPStorm', 'Herd', 'FileZilla', ].map((skill) => (
                                    <span
                                        key={skill}
                                        className="bg-blue-950  border border-blue-900 text-white px-3 py-1 rounded-full text-sm font-medium"
                                    >
                      {skill}
                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;