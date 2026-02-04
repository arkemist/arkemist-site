import React, { useEffect } from "react";
import "./App.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Bio from "./components/Bio";
import VinylScroll from "./components/VinylScroll";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AudioVisualizer from "./components/AudioVisualizer";

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // Smooth scrolling
    const smoothScroll = (e) => {
      e.preventDefault();
      const target = document.querySelector(e.target.getAttribute('href'));
      if (target) {
        gsap.to(window, {
          duration: 1.2,
          scrollTo: { y: target, offsetY: 80 },
          ease: "power3.inOut"
        });
      }
    };

    // Add smooth scroll to all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', smoothScroll);
    });

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', smoothScroll);
      });
    };
  }, []);

  return (
    <div className="App bg-black text-white min-h-screen">
      <Header />
      <Hero />
      <Bio />
      <VinylScroll />
      <Services />
      <Contact />
      <Footer />
      <AudioVisualizer />
    </div>
  );
}

export default App;
