import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Preloader from './components/Preloader';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Preloader />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            {/* We'll add other routes later */}
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;