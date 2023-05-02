import './App.css';
import { Fragment } from 'react';
import { NavBar } from './components/NavBar/NavBar';
import { Hero } from './components/Hero/Hero';
import { AboutMe } from './components/AboutMe/AboutMe';
import { Tracker } from './components/Tracker/Tracker';
import { Skills } from './components/Skills/Skills';
import { Experience } from './components/Experience/Experience';
import { Projects } from './components/Projects/Projects';
import { Footer } from './components/Footer/Footer';


function App() {
  return (
    <Fragment>
      <NavBar />
      <Hero />
      <section id="about-me">
      <AboutMe />
      <Tracker />
      </section>
      <Skills />
      <Experience />
      <Projects />
      <Footer />
    </Fragment>
  );
}

export default App;
