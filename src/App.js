import React from "react";
import Contact from "./Components/Contact";
import Intro from "./Components/Intro";
import Aboutme from "./Components/Aboutme";



const App = () => {
  
  return (
    <div>
      <Intro />
      <Aboutme/>
      <Contact/>
       {/* <About />
      <ProductList />
      <Contact />  */}
    </div>
  );
};

export default App;

