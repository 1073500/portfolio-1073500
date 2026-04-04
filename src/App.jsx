import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from '../Home.jsx';
import About from './components/About.jsx';
import Projects from '../Projects.jsx';
import Contact from '../Contact.jsx';
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="home" element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="projects" element={<Projects />} />
                    <Route path="contact" element={<Contact />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;