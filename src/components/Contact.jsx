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
                            <div className="backdrop-blur-sm border text-white bg-opacity-80 border-gray-800 rounded-2xl overflow-hidden shadow-md m-4 p-6">
                                <h2 className="text-2xl font-bold mb-6">
                                    Contact Info
                                </h2>

                                <div className="space-y-6">
                                    <div className="flex items-start">
                                        <div>
                                            <h3 className="font-semibold  mb-1">Persoonlijk mail</h3>
                                            <a href="mailto:madyadasilva@gmail.com" className=" hover:text-blue-600">
                                                madyadasilva@gmail.com
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <div>
                                            <h3 className="font-semibold  mb-1">School Mail</h3>
                                            <a href="mailto:1073500@hr.nl" className="hover:text-blue-600">
                                                1073500@hr.nl
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <div>
                                            <h3 className="font-semibold  mb-1">Telefoon</h3>
                                            <a href="tel:+31612345678" className=" hover:text-blue-600">
                                                +31 6 82 92 35 83
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <div>
                                            <h3 className="font-semibold  mb-1">Github</h3>
                                            <a href="https://github.com/1073500" className="hover:text-blue-600">
                                                1073500
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <div>
                                            <h3 className="font-semibold mb-1">Locatie</h3>
                                            <p className="">
                                                Capelle aan den IJssel
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>



                            {/* Availability */}
                            <div className="bg-blue-700 border border-blue-600 rounded-lg shadow-lg p-8 text-white">
                                <h2 className="text-2xl font-bold mb-4">
                                    Op zoek naar stage!
                                </h2>
                                <p className="text-gray-100">
                                    Ik ben momenteel opzoek naar stage voor begin september.
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