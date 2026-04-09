import { Link } from 'react-router-dom';

function NavLink({ to, children }) {
    return (
        <Link
            to={to}
            id="navlink" className="hover:text-[var(--recess-green)]"
        >
            {children}
        </Link>
    );
}

export default NavLink;