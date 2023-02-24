import React from 'react';
import Allevents from './Components/Allevents';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import Speakers from './Components/Speakers';
import Subscribe from './Components/Subscribe';


function App() {
  return (
    <div className="">
      <Navbar  />
      <Hero />
      <Speakers />
      <Allevents />
      <Subscribe />
    </div>
  );
}

export default App;
