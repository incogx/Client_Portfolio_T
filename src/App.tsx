import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Achievements from './pages/Achievements';
import TalentFC from './pages/TalentFC';
import FootballCamp from './pages/FootballCamp';
import Press from './pages/Press';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-ivory flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/talent-fc" element={<TalentFC />} />
            <Route path="/talent-fc/camp" element={<FootballCamp />} />
            <Route path="/press" element={<Press />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
