import { Outlet } from 'react-router-dom';
import Nav from './components/Nav.jsx';

function Layout() {
    return (
        <div className=" flex flex-col ">
            <Nav />

            <main className="">
                <Outlet />
            </main>

        </div>
    );
}

export default Layout;