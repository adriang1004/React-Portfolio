import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import './App.css'
import Header from './components/Header';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Footer from './components/Footer';


function App() {
  return (
      <div className="App d-flex flex-column min-vh-100">
        <Header />
        <main className='flex-fill'>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
        </main>
        <Footer />
    </div>
  );
}

export default App;