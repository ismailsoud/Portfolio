import React from "react";
// components
import Banner from "./components/Banner";
import Header from "./components/Header";
import Nav from "./components/Nav";
import About from "./components/About";
import Services from "./components/Services";
import Work from "./components/Work";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="bg-[#000000] overflow-hidden lg:space-y-32">
      <Banner />
      <Nav />
      <About />
      <div className="flex lg:hidden">
        <Services/>
      </div>
      <div className="pt-52">
        <Work />
      </div>
      <div className="my-40">
        <Contact />
      </div>
    </div>
  );
};

export default App;
