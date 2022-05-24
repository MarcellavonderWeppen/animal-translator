import "./App.css";
import React, { useState } from "react";
import { getAnimals } from "./data-animals.js";

import Header from "./components/header";
import Carousel from "./components/carousel";
import LanguageChooser from "./components/languageChooser";
import Disclaimer from "./components/Disclaimer";

import LanguageContext from "./contexts/LanguageContext";

function App() {
  const [language, setLanguage] = useState("English");
  const [index, setIndex] = useState(0);

  const animals = getAnimals();

  return (
    <div>
      <div className="main-container">
        <Header />
        <LanguageContext.Provider value={[language, setLanguage]}>
          <Carousel animals={animals} index={index} setIndex={setIndex} />
          <LanguageChooser
            animals={animals}
            index={index}
            setIndex={setIndex}
          />
        </LanguageContext.Provider>
      </div>
      <Disclaimer />
    </div>
  );
}

export default App;
