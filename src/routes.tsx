import { Route, Routes } from 'react-router-dom';
import { About } from './pages/about';
import { Contact } from './pages/contact';
import { Contents } from './pages/contents';
import { Home } from './pages/home';
import { NotFound } from './pages/not-found';
import { Projects } from './pages/projects';
// import { TalkDetails } from './pages/talk-details'; // TODO: reativar quando a página de palestras estiver pronta
// import { Talks } from './pages/talks'; // TODO: reativar quando a página de palestras estiver pronta

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            {/* <Route path="/talks" element={<Talks />} /> TODO: reativar quando a página de palestras estiver pronta */}
            {/* <Route path="/talks/:id" element={<TalkDetails />} /> TODO: reativar quando a página de palestras estiver pronta */}
            <Route path="/contents" element={<Contents />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}
