export default function Header({ children }) {
    return (
        <h1 className="p-4s text-4xl md:text-6xl font-bold mb-6 text-white">
            {children}
        </h1>
    )
}