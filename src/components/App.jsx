import React, { useState, useEffect } from 'react';
import Hero from './Hero/Hero';
import About from './About/About';
import Features from './Features/Features';
import Links from './Links/Links';
import Footer from './Footer/Footer';
import Team from './Team/Team';
import Demo from './Demo/Demo';

import { DataProvider } from '../context/context';

import { heroData, aboutData, featuresData, teamData } from '../data/data';

function App() {
  const [hero, setHero] = useState({});
  const [about, setAbout] = useState({});
  const [features, setFeatures] = useState([]);
  const [team, setTeam] = useState([]);

  useEffect(() => {
    setHero({ ...heroData });
    setAbout({ ...aboutData });
    setFeatures([...featuresData]);
    setTeam([ ...teamData ]);
  }, []);

  return (
    <DataProvider value={{ hero, about, features, team }}>
      <Hero />
      <About />
      <Features />
      <Demo />
      <Team />
      <Links />
      <Footer />
    </DataProvider>
  );
}

export default App;
