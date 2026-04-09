import {Outlet, useLocation} from 'react-router-dom';
import Nav from './components/Nav.jsx';
import Crawler from './components/Crawler.jsx';

const mieren = [
    {speed: 80, size: 46},
    {speed: 80, size: 46},
    {speed: 80, size: 46},
    {speed: 80, size: 46},
];

function Layout() {
    const {pathname} = useLocation();

    return (
        <div className="flex flex-col">
            {pathname !== '/' && <Nav/>}

            <main>
                <Outlet/>
            </main>
            {mieren.map((mier, i) => (
                <Crawler
                    key={i}
                    speed={mier.speed}
                    size={mier.size}
                    frameA="/mier-A.svg"
                    frameB="/mier-B.svg"
                />
            ))}
        </div>
    );
}

export default Layout;