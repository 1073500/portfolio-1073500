import AButton from "../components/AButton";
import Heart from "/moshi-heart.png";

function Home() {
    return (
        <div className="">
            <section className="py-20 m-6 md:m-24">
                <div className="flex items-center justify-around">
                    <div className="flex flex-col  px-2 md:px-4 ">
                        <h1 className="text-note-yellow  text-5xl sm:text-6xl md:text-9xl mb-4 md:mb-6">
                            MADYA
                        </h1>

                        <h2 className="text-3xl sm:text-4xl md:text-6xl mb-4 md:mb-6">
                            DA SILVA
                        </h2>
                        <p>
                            Student Creative Media and Game Technologies
                        </p>
                    </div>
                    <div>
                        <img src="/public/picture.svg" alt="logo" className="w-64 h-64"/>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;
