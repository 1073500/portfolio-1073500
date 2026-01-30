import { Link } from 'react-router-dom';

function NavLink({ to, children }) {
    return (
        <Link
            to={to}
            className="text-white hover:text-red-700 transition font-normal"
        >
            {children}
        </Link>
    );
}

export default NavLink;