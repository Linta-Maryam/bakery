import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Login from './components/Login';
import Home from './components/Home';
import { useRef } from 'react';


function App() {
  const heroRef = useRef(null);
  const menuRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const scrollRefs = {
    hero: heroRef,
    menu: menuRef,
    about: aboutRef,
    contact: contactRef,
  };
  return (
    <div className="App">
      {/* This header will always show on all pages */}
      <Header  scrollRefs={scrollRefs}  />

      <Routes>
         <Route path="/" element={<Home scrollRefs={scrollRefs} />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
