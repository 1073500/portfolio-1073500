export default function Header({ children }) {
    return (
        <h1 className="text-9xl md:text-6xl font-bold mb-6 text-white">
            {children}
        </h1>
    )
}