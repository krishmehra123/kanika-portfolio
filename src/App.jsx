import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Showcase from './components/Showcase';
import Certifications from './components/Certifications';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F8F5EF] text-[#35251F] font-sans antialiased overflow-x-hidden">
      {/* Sticky Navigation Bar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Showcase />
        <Certifications />
        <Education />
        <Contact />
      </main>

      {/* Editorial Footer */}
      <Footer />
    </div>
  );
}
