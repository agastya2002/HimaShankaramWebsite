import NavigationBar from './Components/NavigationBar.js';
import Footer from './Components/Footer.js';
import Home from './Components/Home.js';
import Gallery from './Components/Gallery.js';
import Vision from './Components/Vision.js';
import Trustees from './Components/Trustees.js';
import Contact from './Components/Contact.js';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <NavigationBar />
      <main className="app-shell">
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/vision' element={<Vision />} />
          <Route path='/trustees' element={<Trustees />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<Navigate to='/home' />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
