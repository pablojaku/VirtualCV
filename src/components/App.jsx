import React, { useState, useEffect } from 'react';
import Hero from './Hero/Hero';
import About from './About/About';
import Works from './Work/Work';
import Research from './Research/Research';
import Education from './Education/Education';
import Technology from './Technology/Technology';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

import { PortfolioProvider } from '../context/context';

import {
  heroData,
  aboutData,
  worksData,
  researchData,
  educationData,
  technologyData,
  contactData,
  footerData,
} from '../live/data';

function App() {
  const [hero, setHero] = useState({});
  const [about, setAbout] = useState({});
  const [works, setWorks] = useState([]);
  const [research, setResearch] = useState({});
  const [education, setEducation] = useState({});
  const [technology, setTechnology] = useState({});
  const [contact, setContact] = useState({});
  const [footer, setFooter] = useState({});

  useEffect(() => {
    setHero({ ...heroData });
    setAbout({ ...aboutData });
    setWorks([...worksData]);
    setResearch({ ...researchData });
    setEducation({ ...educationData });
    setTechnology({ ...technologyData });
    setContact({ ...contactData });
    setFooter({ ...footerData });
  }, []);

  return (
    <PortfolioProvider
      value={{ hero, about, works, research, education, technology, contact, footer }}
    >
      <Hero />
      <About />
      <Works />
      <Research />
      <Education />
      <Technology />
      <Contact />
      <Footer />
    </PortfolioProvider>
  );
}

export default App;
