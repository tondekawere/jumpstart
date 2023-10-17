import './App.css';
import Header from "./components/MyHeader.js";
import Hero from './components/Hero';
import About from './components/About';
import Events from './components/Events';
import News from './components/News';
import Blog from './components/Blog';
import Footer from './components/Footer';

function App() {
  return (
      <>
        <Header />
        <Hero />
        <About />
        <Events />
        <News />
        <Blog />
        <Footer />
      </>
  );
}

export default App;
