import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Import Pages
import Home from './pages/Home';
import About from './pages/About';
import AppShowcase from './pages/AppShowcase';
import Donate from './pages/Donate';
import Terms from './pages/Terms';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-50 text-dark-bg">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/app-showcase" element={<AppShowcase />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="*" element={<main id="main-content" className="flex-grow w-full"><div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center"><h1 className="text-5xl font-bold text-dark-bg mb-4">404</h1><p className="text-2xl text-dark-bg mb-8">Page Not Found</p><a href="/" className="inline-block bg-primary-dark text-white font-bold py-3 px-8 rounded-lg hover:bg-primary">Go Home</a></div></main>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
