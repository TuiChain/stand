import React, { useState, useEffect } from 'react';
import Hero from './Hero/Hero';
import About from './About/About';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import Team from './Team/Team';

import { DataProvider } from '../context/context';

import { heroData, aboutData, projectsData, teamData, contactData, footerData } from '../mock/data';

function App() {
  const [hero, setHero] = useState({});
  const [about, setAbout] = useState({});
  const [projects, setProjects] = useState([]);
  const [team, setTeam] = useState([]);
  const [contact, setContact] = useState({});
  const [footer, setFooter] = useState({});

  useEffect(() => {
    setHero({ ...heroData });
    setAbout({ ...aboutData });
    setProjects([...projectsData]);
    setTeam([ ...teamData ]);
    setContact({ ...contactData });
    setFooter({ ...footerData });
  }, []);

  return (
    <DataProvider value={{ hero, about, projects, team, contact, footer }}>
      <Hero />
      <About />
      <Projects />
      <Team />
      <Contact />
      <Footer />
    </DataProvider>
  );
}

export default App;
