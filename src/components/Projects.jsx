import { useState } from 'react';
import Header from "./Header.jsx";

function Projects() {
    const [filter, setFilter] = useState('all');

    const projects = [
        {
            id: 1,
            title: 'E-commerce Platform',
            description: 'Een moderne e-commerce website met React en Node.js',
            category: 'web',
            tags: ['React', 'Node.js', 'MongoDB'],
            image: 'https://via.placeholder.com/400x300/3B82F6/FFFFFF?text=E-commerce',
            link: '#'
        },
        {
            id: 2,
            title: 'Portfolio Website',
            description: 'Persoonlijke portfolio website met animaties',
            category: 'web',
            tags: ['React', 'Tailwind CSS', 'Vite'],
            image: 'https://via.placeholder.com/400x300/8B5CF6/FFFFFF?text=Portfolio',
            link: '#'
        },
        {
            id: 3,
            title: 'Task Manager App',
            description: 'Productiviteitsapp voor taakbeheer',
            category: 'app',
            tags: ['React', 'Firebase', 'Material-UI'],
            image: 'https://via.placeholder.com/400x300/10B981/FFFFFF?text=Task+Manager',
            link: '#'
        },
        {
            id: 4,
            title: 'Blog Platform',
            description: 'CMS voor bloggers met markdown support',
            category: 'web',
            tags: ['Next.js', 'PostgreSQL', 'Prisma'],
            image: 'https://via.placeholder.com/400x300/F59E0B/FFFFFF?text=Blog',
            link: '#'
        },
        {
            id: 5,
            title: 'Weather Dashboard',
            description: 'Weerapp met real-time data en grafieken',
            category: 'app',
            tags: ['React', 'API', 'Chart.js'],
            image: 'https://via.placeholder.com/400x300/EF4444/FFFFFF?text=Weather',
            link: '#'
        },
        {
            id: 6,
            title: 'Social Media Dashboard',
            description: 'Analytics dashboard voor social media',
            category: 'web',
            tags: ['Vue.js', 'Express', 'D3.js'],
            image: 'https://via.placeholder.com/400x300/6366F1/FFFFFF?text=Dashboard',
            link: '#'
        }
    ];

    const filteredProjects = filter === 'all'
        ? projects
        : projects.filter(project => project.category === filter);

    return (
        <div className="min-h-screen  py-12">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <Header>
                        Projecten
                    </Header>
                    <p className="text-xl text-gray-600 mb-8">
                        Een aantal projecten waaraan ik heb gewerkt
                    </p>
                </div>

                {/* Filter Buttons */}
                <div className="flex justify-center gap-4 mb-12">
                    <button
                        onClick={() => setFilter('all')}
                        className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
                            filter === 'all'
                                ? 'bg-blue-600 text-white'
                                : 'bg-white text-gray-700 hover:bg-gray-100'
                        }`}
                    >
                        Alle
                    </button>
                    <button
                        onClick={() => setFilter('web')}
                        className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
                            filter === 'web'
                                ? 'bg-blue-600 text-white'
                                : 'bg-white text-gray-700 hover:bg-gray-100'
                        }`}
                    >
                        Websites
                    </button>
                    <button
                        onClick={() => setFilter('app')}
                        className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
                            filter === 'app'
                                ? 'bg-blue-600 text-white'
                                : 'bg-white text-gray-700 hover:bg-gray-100'
                        }`}
                    >
                        Apps
                    </button>
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project) => (
                        <div
                            key={project.id}
                            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow group"
                        >
                            <div className="relative overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-800 mb-2">
                                    {project.title}
                                </h3>
                                <p className="text-gray-600 mb-4">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
                                        >
                      {tag}
                    </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* No Results */}
                {filteredProjects.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-xl text-gray-600">
                            Geen projecten gevonden in deze categorie.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Projects;