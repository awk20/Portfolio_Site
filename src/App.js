import React from 'react';
import NavBar from './NavBar';
import About from './About';
import LanguagesAndFrameworks from './LanguagesAndFrameworks';
import Contact from './Contact';
import Projects from './Projects';

function App() {
  return (
    <div className="main-content">
      <NavBar></NavBar>
      <h1 className="main-title">Hi, I'm Anthony.</h1>
      <p className="main-desc">I have a passion for learing and innovation in software devlopment.</p>
      <About></About>
      <LanguagesAndFrameworks></LanguagesAndFrameworks>
      <Projects></Projects>
      <Contact></Contact>
    </div>
  );
}

export default App;
