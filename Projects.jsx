import Header from "./src/components/Header.jsx";

function Projects() {

    const projects = [
        {
            id: 1,
            title: 'Portfolio',
            description: 'Front-end',
            tags: ['Javascript', 'React', 'Tailwind CSS', 'Vite'],
            image: '/portfolio.png',
            link: 'https://github.com/1073500/portfolio-1073500.git'
        },
        {
            id: 2,
            title: 'Connectar',
            description: 'UI/UX Design',
            tags: ['Figma'],
            image: '/connectar-sg.png',
            link: 'https://www.figma.com/design/8uhNI8DSbxQbWwb7q642mF/Connectar-styleguide?node-id=0-1&p=f&t=XuSAwetUoZPecttG-0'
        },
        {
            id: 3,
            title: 'RockSQL',
            description: 'Fullstack project',
            tags: ['Laravel', 'Herd', 'Tailwind CSS', 'PHP', 'MySQL', 'Blade'],
            image: '/rocksql-thumb.png',
            link: 'https://github.com/1073500/rocksql.git'
        },
        {
            id: 4,
            title: 'Gemeente Rotterdam',
            description: 'UI/UX Design',
            tags: ['Figma'],
            image: '/gr-wireframe.png',
            link: 'https://www.figma.com/design/536mbq0rJ068NJ8WUB3hRC/Style-guide-gemeente-Rotterdam?node-id=0-1&t=fJr3z67SFNG53lLM-1'
        },
        {
            id: 5,
            title: 'Cyberspot',
            description: 'UI/UX Design, fullstack coming soon...',
            tags: ['Figma'],
            image: '/cyberspot.png',
            link: 'https://www.figma.com/design/XiU7tpR3axPAj33bRdFhpF/CyberSpot?m=auto&t=35skklVR3TFMyet4-6'
        },


        {
            id: 6,
            title: 'WandelWild',
            description: 'Back-end',
            tags: ['Laravel', 'Herd', 'Tailwind CSS'],
            image: '/wandelwild.png',
            link: 'https://github.com/qixel2003/TLE2.git'
        },
        {
            id: 7,
            title: 'DrawingPrompts',
            description: 'Back-end',
            tags: ['React', 'Tailwind CSS', 'Vite', 'Express', 'Node.js', 'MongoDB'],
            image: '/drawingprompts.png',
            link: 'https://github.com/1073500/prg06-eindopdracht-back-end.git'
        },
        {
            id: 8,
            title: 'Portfolio Wireframes',
            description: 'UI/UX Design',
            tags: ['Figma'],
            image: '/portfolio-thumbnail.png',
            link: 'https://www.figma.com/design/UYgu8QZCacQA6I0ZOqCmiz/Portfolio-26?m=auto&t=35skklVR3TFMyet4-6'
        },

    ];


    return (
        <div className="min-h-screen py-12 px-8">
            <div className="container mx-auto px-4">
                <div id="projects" className="text-center mb-12">
                    <Header>
                        PROJECTS
                    </Header>
                    <p className="  text-gray-800 mb-8">
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
                                            className="text-black hover:border hover:hover:text-[#177642] px-2 py-0.5 rounded-full text-xs font-medium"
                                        >
                            {tag}
                        </span>
                                    ))}

                                </div>
                                <a href={project.link} target="_blank" rel="noopener noreferrer"
                                   className="block mt-2 hover:text-[#177642] text-gray-800 text-xs">
                                    Bekijk project →
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