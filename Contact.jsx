import Header from "./src/components/Header.jsx";


function Contact() {


    return (
        <div className="min-h-screen py-12">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <Header>
                        CONTACT
                    </Header>
                </div>

                <div className="max-w-6xl mx-auto">
                    <div className="">
                        <div className="space-y-8">
                            <div
                                className="text-white  m-4 p-6">
                                <div className="relative z-0 justify-center grid md:grid-cols-2 gap-8 space-y-6 bg-[#56a843] p-4 rounded-2xl">
                                    <div className="flex items-start">
                                        <div>
                                            <h3 className="font-semibold  mb-1">Persoonlijk mail</h3>
                                            <a href="mailto:madyadasilva@gmail.com" className="contact hover:text-[#56a843]">
                                                madyadasilva@gmail.com
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <div>
                                            <h3 className="font-semibold  mb-1">School Mail</h3>
                                            <a href="mailto:1073500@hr.nl" className="contact hover:text-[#56a843]">
                                                1073500@hr.nl
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <div>
                                            <h3 className="font-semibold  mb-1">Github</h3>
                                            <a href="https://github.com/1073500" className="contact hover:text-[#56a843]">
                                                1073500
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="  p-8 text-white ">
                                <h2 className="text-2xl font-bold mb-4">
                                    Op zoek naar stage!
                                </h2>
                                <p className="text-gray-100">
                                    Ik ben op zoek naar een stageplek waar ik mezelf kan bewijzen
                                    als een echte creative developer, waar ik kan groeien en iets kan bijdragen.
                                    Voor de stageperiode ben ik beschikbaar van september tot februari of februari
                                    tot juli 2026-2027. Afwijkende datums zou ik kunnen overwegen.
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