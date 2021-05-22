import logo from './logo.svg';
import './App.css';
// import styles from './App.module.css';
import { BrowserRouter, Route } from 'react-router-dom';
// import Form from './components/Form/Form';
// import Countries from './components/Countries/Countries';
// import Pages from './components/Pages/Pages';
// import CountryDetails from './components/CountryDetails/CountryDetails';
// import CreateActivity from './components/CreateActivity/CreateActivity';
// import Home from './components/Home/Home';
// import Filters from './components/Filters/Filters'; 
import Nav from './components/Nav/Nav';
import About from './components/About';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import Education from './components/Education';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Home from './components/Home';
import Photo from './components/Photo';
import Dropbox from './components/Dropbox';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Dropbox />
        <Nav />
        <Photo />
        <Home />
        <About />
        <Experience />
        <Portfolio />
        <Education />
        <Skills />
        <Contact />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
