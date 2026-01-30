export default function ButtonLink({ href, children }) {
    return (
        <a
            href={href}
            className="transition-transform duration-300 ease-out hover:scale-105 text-white bg-red-800 border border-red-600 rounded-full overflow-hidden shadow-md hover:bg-blue-700 hover:border-blue-600 p-2 pl-5 pr-5 flex flex-col justify-between mb-2"
        >
            {children}
        </a>
    )
}
