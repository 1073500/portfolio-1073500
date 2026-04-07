import { Outlet, useLocation } from 'react-router-dom';
import Nav from './components/Nav.jsx';

function Layout() {
    const { pathname } = useLocation();

    return (
        <div className="flex flex-col">
            {pathname !== '/' && <Nav />}

            <main>
                <Outlet />
            </main>
        </div>
    );
}

export default Layout;