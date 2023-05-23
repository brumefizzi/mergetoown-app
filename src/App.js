import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./Components/NavBar";
import { Banner } from "./Components/Banner";
import { Partners } from "./Components/Partners";
import { Services } from "./Components/Services";
import { Contact } from "./Components/Contact";
import { Footer } from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Partners />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
