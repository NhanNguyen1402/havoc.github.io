import Header from './components/header';
import Hero from './components/hero';
import About from './components/aboutUs';
import Feature from './components/features';
import Works from './components/work';
import Contact from './components/contact';
import Pricing from './components/pricing';
import Footer from './components/footer';
import './styles/main.css';
import 'antd/dist/antd.css';


function App() {
  return (
  <>
    <Header />
    <Hero />
    <About />
    <Feature />
    <Works />
    <Pricing />
    <Contact />
    <Footer />
  </>  
   
  );
}

export default App;
