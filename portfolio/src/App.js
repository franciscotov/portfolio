import './App.css';
import { useState } from 'react';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Experience from './components/Experience';
// import Dropbox from './components/Dropbox';
import Navbar from './components/Navbar';
import styles from './App.module.scss'
import Footer from './components/Footer';


function App() {
  const [state, setState] = useState(true);
  return (
    <div className={styles.App}>
      <Navbar state={state} setState = {setState}/>
      <Home state={state}/>
      <About state={state}/> 
      <Experience state={state}/> 
      <Portfolio state={state}/>
      <Skills state={state}/>
      <Contact state={state}/>
      <Footer state={state}/>
    </div>
  );
}

export default App;
