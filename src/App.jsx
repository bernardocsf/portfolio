import React, { useRef } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  const contactRef = useRef(null);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView();
  };

  return (
    <>
      <Hero scrollToContact={scrollToContact}/>
      <About />
      <Contact ref={contactRef}/>
    </>
  );
}

export default App;
