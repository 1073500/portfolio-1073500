
import Header from "./Header.jsx";

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
        <div className="min-h-screen  py-12">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <Header>
                        Projecten
                    </Header>
                    <p className="text-xl  text-gray-800 mb-8">
                        Een aantal projecten waaraan ik heb gewerkt
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="bg-blue-700 transition-transform duration-300 ease-out  hover:scale-110 rounded-2xl overflow-hidden "
                        >
                            <div className="relative overflow-hidden bg-gray-200 m-4 rounded-2xl">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                                />
                            </div>
                            <div className="bg-blue-600 m-4 rounded-2xl p-6">
                                <h3 className="text-xl font-bold text-white mb-2">
                                    {project.title}
                                </h3>
                                <p className="text-gray-800 mb-4">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="bg-red-800 text-white hover:border hover:border-red-700 hover:text-red-500 px-3 py-1 rounded-full text-sm font-medium"
                                        >
                      {tag}
                    </span>
                                    ))}
                                </div>
                                <a href="" className="text-gray-800 mb-4">
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