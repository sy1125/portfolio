import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useFadeIn } from './hooks/useFadeIn';
import './App.css';

function App() {
  const appRef = useFadeIn();

  return (
    <div className="App" ref={appRef}>
      <Header />
      <Hero />
      <div className="fade-in"><About /></div>
      <div className="section-divider" />
      <div className="fade-in"><Experience /></div>
      <div className="section-divider" />
      <div className="fade-in"><Projects /></div>
      <div className="section-divider" />
      <div className="fade-in"><Skills /></div>
      <div className="fade-in"><Contact /></div>
      <Footer />
    </div>
  );
}

export default App;
