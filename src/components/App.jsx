import React, { useState, useEffect } from 'react';
import Hero from './Hero/Hero';
import About from './About/About';
import Projects from './Projects/Projects';
import Links from './Links/Links';
import Footer from './Footer/Footer';
import Team from './Team/Team';

import { DataProvider } from '../context/context';

import { heroData, aboutData, projectsData, teamData } from '../data/data';

function App() {
  const [hero, setHero] = useState({});
  const [about, setAbout] = useState({});
  const [projects, setProjects] = useState([]);
  const [team, setTeam] = useState([]);

  useEffect(() => {
    setHero({ ...heroData });
    setAbout({ ...aboutData });
    setProjects([...projectsData]);
    setTeam([ ...teamData ]);
  }, []);

  return (
    <DataProvider value={{ hero, about, projects, team }}>
      <Hero />
      <About />
      <Projects />
      <Team />
      <Links />
      <Footer />
    </DataProvider>
  );
}

export default App;
