export default function ButtonLink({ href, children }) {
    return (
        <a
            href={href}
            className="text-white backdrop-blur-sm bg-opacity-80 border border-gray-800 rounded-full overflow-hidden shadow-md hover:bg-blue-700 hover:border-blue-600 p-2 pl-5 pr-5 flex flex-col justify-between mb-2"
        >
            {children}
        </a>
    )
}
