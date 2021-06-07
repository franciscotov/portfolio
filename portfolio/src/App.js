import './App.css';
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
  console.log(process.env.REACT_APP_URLAPI,'atstastats')  
  return (
    <div className={styles.App}>
      {/* Apppppppppp */}
      <Navbar/>
      <Home/>
      <About/> 
      <Experience/> 
      <Portfolio/>
      <Skills/>
      <Contact/>
      <Footer/>
    
    </div>
  );
}

export default App;
