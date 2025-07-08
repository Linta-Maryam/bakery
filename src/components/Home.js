import React, { useRef } from 'react';
import Hero from './Hero';
import Menu from './Menu';
import About from './About';
import Contact from './Contact';

function Home({ scrollRefs }) {
  return (
    <>
      <div ref={scrollRefs.hero}><Hero /></div>
      <div ref={scrollRefs.menu}><Menu /></div>
      <div ref={scrollRefs.about}><About /></div>
      <div ref={scrollRefs.contact}><Contact /></div>
    </>
  );
}

export default Home;
