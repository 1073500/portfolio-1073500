import Header from "./Header.jsx";


function Contact() {


    return (
        <div className="min-h-screen py-12">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <Header>
                        Contact
                    </Header>
                </div>

                <div className="max-w-6xl mx-auto">
                    <div className="">
                        <div className="space-y-8">
                            <div
                                className="bg-gray-800 text-white bg-opacity-80  rounded-2xl overflow-hidden shadow-md m-4 p-6">

                                <h2 className="bg-red-800 p-4 rounded-3xl text-2xl font-bold mb-6">
                                    Contact Info
                                </h2>
                                <div className="grid md:grid-cols-2 gap-8 space-y-6">
                                    <div className="flex items-start">
                                        <div>
                                            <h3 className="font-semibold  mb-1">Persoonlijk mail</h3>
                                            <a href="mailto:madyadasilva@gmail.com" className="contact hover:text-blue-600">
                                                madyadasilva@gmail.com
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <div>
                                            <h3 className="font-semibold  mb-1">School Mail</h3>
                                            <a href="mailto:1073500@hr.nl" className="contact hover:text-blue-600">
                                                1073500@hr.nl
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <div>
                                            <h3 className="font-semibold  mb-1">Telefoon</h3>
                                            <a href="tel:+31612345678" className="contact hover:text-blue-600">
                                                +31 6 82 92 35 83
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <div>
                                            <h3 className="font-semibold  mb-1">Github</h3>
                                            <a href="https://github.com/1073500" className="contact hover:text-blue-600">
                                                1073500
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            {/* Availability */}
                            <div className="bg-blue-700 hover:border-red-700 hover:bg-red-800 border border-blue-600 rounded-2xl shadow-lg p-8 text-white transition-transform duration-300 hover:scale-110">
                                <h2 className="text-2xl font-bold mb-4">
                                    Op zoek naar stage!
                                </h2>
                                <p className="text-gray-100">
                                    Ik ben op zoek naar een uitdagende stage vanaf begin september, waar ik mijn (back -en/of front-end )programmeer skills kan verbeteren, nieuwe technologieën kan ontdekken en vooral veel kan leren in de praktijk.
                                </p>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;