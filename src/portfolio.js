import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import Header from './components/portfolio-components/header';
import Contact from './components/portfolio-components/contact-card';
import ContactLinks from './components/portfolio-components/contact-links';
import Skills from './components/portfolio-components/skills';
import Projects from './components/portfolio-components/projects';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Contact />
        <ContactLinks />
        <Skills />
        <Projects />
      </div>
    );
  }
}

export default App;
