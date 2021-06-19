import React from "react";
import Comman from './Comman';
import web from "../src/img/I.png";
function Home() {
  return (
    <>
<Comman
        name="Grow your business"
        imgsrc={web}
        visit="/service"
        btname="Get Started"
/>
    </>
  );
}

export default Home;
