import React from "react";
import Comman from "./Comman";
import web from "../src/img/hero.png";
function About() {
  return (
    <>
      <Comman
        name="welcome to our page"
        imgsrc={web}
        visit="/contact"
        btname="contact now"
      />
    </>
  );
}

export default About;
