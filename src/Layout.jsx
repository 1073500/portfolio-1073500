import { Outlet } from 'react-router-dom';
import Nav from './components/Nav.jsx';

function Layout() {
    return (
        <div className="min-h-screen flex flex-col ">
            <Nav />

            <main className="flex-grow">
                <Outlet />
            </main>

        </div>
    );
}

export default Layout;