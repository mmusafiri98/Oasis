// App.js
import React, { useEffect } from 'react';
import styled from 'styled-components';
import scrollreveal from 'scrollreveal';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Services from './Components/Services';
import Recommend from './Components/Recommend';
import Testimonials from './Components/Testimonials';
import Footer from './Components/Footer';
import './App.css'; // Correction de l'import
import RepublicaDominicanaPage from "./RepublicaDominicanaPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  useEffect(() => {
    const sr = scrollreveal({
      origin: 'top',
      distance: '80px',
      duration: 2000,
      reset: true,
    });

    sr.reveal(
      '#nav',  // Correct the selectors
      '#hero',
      '#services',
      '#recommend',
      '#testimonials',
      'footer',
      { interval: 300 }
    );
  }, []);

  return (
    <Main>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/Republica-DominicanaPage" element={<RepublicaDominicanaPage />} />

          {/* Add other routes as needed */}
        </Routes>
      </Router>
      <Services />
      <Recommend />
      <Testimonials />
      <Footer />
    </Main>
  );
}

const Main = styled.main`
  // your styling here
`;
