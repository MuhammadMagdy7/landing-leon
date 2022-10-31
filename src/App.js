import {Header, Hero, Features, Servies, Portfolio, About, Contact, Footer} from './components/sections/index'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';


import './App.css';

function App() {
  return (
    <>
    <Header />
    <Hero />
    <Features />
    <Servies />
    <Portfolio />
    <About />
    <Contact />
    <Footer />
    </>
  );
}

export default App;
