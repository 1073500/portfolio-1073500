import { Link } from 'react-router-dom';

function NavLink({ to, children }) {
    return (
        <Link
            to={to}
            className="text-white hover:text-blue-600 transition font-medium"
        >
            {children}
        </Link>
    );
}

export default NavLink;