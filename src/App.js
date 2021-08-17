import { useState } from "react";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Navigation from "./components/Navigation/Navigation";

import "./App.css";
import "./custom.scss";
// import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [currentSection, setCurrentSection] = useState("about-me");

  return (
    <div className="App">
      <Header
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
      />
      <Navigation currentSection={currentSection} />
      <Footer />
    </div>
  );
}

export default App;
