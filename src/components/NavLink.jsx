import { Link } from 'react-router-dom';

function NavLink({ to, children }) {
    return (
        <Link
            to={to}
            className="text-sm text-[#B8DD58] hover:text-white transition"
        >
            {children}
        </Link>
    );
}

export default NavLink;