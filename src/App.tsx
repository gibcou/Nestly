import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Stays from './pages/Stays';
import Experiences from './pages/Experiences';
import Host from './pages/Host';
import Support from './pages/Support';
import About from './pages/About';
import Careers from './pages/Careers';
import Press from './pages/Press';
import Blog from './pages/Blog';
import Help from './pages/Help';
import Safety from './pages/Safety';
import CancellationOptions from './pages/CancellationOptions';
import Contact from './pages/Contact';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import Sitemap from './pages/Sitemap';
import ListingDetail from './pages/ListingDetail';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/stays" element={<Stays />} />
      <Route path="/experiences" element={<Experiences />} />
      <Route path="/host" element={<Host />} />
      <Route path="/support" element={<Support />} />
      <Route path="/about" element={<About />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/press" element={<Press />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/help" element={<Help />} />
      <Route path="/safety" element={<Safety />} />
      <Route path="/cancellation-options" element={<CancellationOptions />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/sitemap" element={<Sitemap />} />
      <Route path="/listings/:slug" element={<ListingDetail />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
