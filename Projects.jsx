
import Header from "./src/components/Header.jsx";

function Projects() {

    const projects = [
        {
            id: 1,
            title: 'RockSQL',
            description: 'Fullstack',
            tags: ['Laravel', 'Herd', 'Tailwind CSS'],
            image: 'https://via.placeholder.com/400x300/3B82F6/FFFFFF?text=E-commerce',
            link: '#'
        },
        {
            id: 2,
            title: 'DrawingPrompts',
            description: 'Fullstack',
            tags: ['React', 'Tailwind CSS', 'Vite', 'Express', 'Node.js', 'MongoDB'],
            image: 'https://via.placeholder.com/400x300/8B5CF6/FFFFFF?text=Portfolio',
            link: '#'
        },
        {
            id: 3,
            title: 'Portfolio',
            description: 'Front-end',
            tags: ['React', 'Tailwind CSS', 'Vite'],
            image: 'https://via.placeholder.com/400x300/10B981/FFFFFF?text=Task+Manager',
            link: '#'
        },
        {
            id: 4,
            title: 'WandelWild',
            description: 'Back-end',
            tags: ['Laravel', 'Herd', 'Tailwind CSS'],
            image: 'https://via.placeholder.com/400x300/F59E0B/FFFFFF?text=Blog',
            link: '#'
        },
        {
            id: 5,
            title: 'Hocus Focus',
            description: 'UI/UX Design',
            tags: ['Figma'],
            image: 'https://via.placeholder.com/400x300/EF4444/FFFFFF?text=Weather',
            link: '#nkkjn'
        },
        {
            id: 6,
            title: 'Persoonlijk Project',
            description: 'Fullstack',
            tags: ['...'],
            image: 'https://via.placeholder.com/400x300/6366F1/FFFFFF?text=Dashboard',
            link: '#'
        }
    ];


    return (
        <div className="min-h-screen py-12 px-8">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <Header>
                        PROJECTS
                    </Header>
                    <p className="text-xl  text-gray-800 mb-8">
                        Een aantal projecten waaraan ik heb gewerkt
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="bg-white filter-[drop-shadow(8px_8px_0px_#177642)] transition-transform duration-300 ease-out p-2 hover:scale-105 overflow-hidden "
                        >
                            <div className="relative overflow-hidden bg-gray-200 m-2">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-36 object-cover transition-transform duration-300"
                                />
                            </div>
                            <div className="m-2 p-3">
                                <h3 className="text-sm font-bold mb-1">
                                    {project.title}
                                </h3>
                                <a className="text-gray-800 text-xs mb-2">
                                    {project.description}
                                </a>
                                <div className="flex flex-wrap gap-1">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="text-black hover:border hover:text-blue-500 px-2 py-0.5 rounded-full text-xs font-medium"
                                        >
                            {tag}
                        </span>
                                    ))}
                                </div>
                                <a href="" className="text-gray-800 text-xs">
                                    {project.link}
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}

export default Projects;