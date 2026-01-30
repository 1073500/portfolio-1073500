import AButton from "../components/AButton";
import Heart from "/moshi-heart.png";

function Home() {
    return (
        <div className="min-h-screen">
            <section className="text-white py-20 m-6 md:m-24">
                <div className="g flex items-center">
                <div className="items-center">
                    <div className="flex flex-col items-start container mx-auto px-2 md:px-4 text-left">
                        <h1 className="text-5xl sm:text-6xl md:text-9xl mb-4 md:mb-6">
                            MADYA
                        </h1>

                        <h2 className="text-3xl sm:text-4xl md:text-6xl mb-4 md:mb-6">
                            DA SILVA
                        </h2>

                        <h3 className="italic text-base sm:text-lg md:text-2xl mb-6 md:mb-8 text-gray-700">
                            Student Creative Media and Game Technologies
                        </h3>

                        <div className="flex flex-wrap gap-4">
                            <AButton href="/projects">Projecten</AButton>
                            <AButton href="/about">Over Mij</AButton>
                        </div>
                    </div>
                </div>
                <div> <img src={Heart} className="w-98 h-98 object-contain z-0 object-center " alt="Heart logo"/> </div>
        </div>
            </section>
        </div>
    );
}

export default Home;
