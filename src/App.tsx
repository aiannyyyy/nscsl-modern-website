import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Preloader from './components/Preloader';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Events from './pages/Events';
import Resources from './pages/Resources';
import Announcements from './pages/Announcements';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Preloader />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/events" element={<Events />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/announcements" element={<Announcements />} />
            {/* We'll add other routes later */}
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;