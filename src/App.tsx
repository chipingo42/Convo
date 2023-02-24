import React from 'react';
import Allevents from './Components/Allevents';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import Speakers from './Components/Speakers';
import Subscribe from './Components/Subscribe';
import Footer from './Components/Footer';


function App() {
  return (
    <div className="">
      <Navbar  />
      <Hero />
      <Speakers />
      <Allevents />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
