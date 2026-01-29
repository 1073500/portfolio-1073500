import AButton from "../components/AButton";

function Home() {
    return (
        <div className="min-h-screen ">
            <section className="m-24 text-white py-20">
                <div className="flex-col flex items-start container mx-auto px-4 text-center">
                    <h1 className=" text-9xl font-bold mb-6">
                        MADYA
                    </h1>
                    <h2 className="text-white text-6xl md:text-6xl font-bold mb-6">
                        DA SILVA
                    </h2>
                    <p className="italic text-xl md:text-2xl mb-8 text-gray-100">
                        Student Creative Media and Game Technologies
                    </p>
                    <div className="flex gap-4 justify-center">
                        <AButton href="/projects">
                            Projecten
                        </AButton>
                        <AButton href="/about">
                            Over Mij
                        </AButton>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;