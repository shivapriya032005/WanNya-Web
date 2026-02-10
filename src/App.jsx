import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Trust from './components/Trust';
import WhatWeOffer from './components/WhatWeOffer';
import Footer from './components/Footer';
import Contact from './components/Contact';
import About from './pages/About';

function App() {
  const path = window.location.pathname;

  return (
    <div className="App">
      <Header />

      {/* ROUTING LOGIC */}
      {path === "/about" ? (
        <About />
      ) : (
        <>
          <Hero />
          <Trust />
          <WhatWeOffer />
          <Contact />
        </>
      )}

      <Footer />
    </div>
  );
}

export default App;
