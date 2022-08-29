import React, { useState } from "react";
import { getAnimals } from "../data/data-animals.js";

import Header from "../components/header";
import Carousel from "../components/carousel";
import LanguageChooser from "../components/languageChooser";
import Disclaimer from "../components/Disclaimer";

import LanguageContext from "../contexts/LanguageContext";

import { disableBodyScroll } from "body-scroll-lock";

function App() {
  if (window.innerWidth < 600) {
    disableBodyScroll(document);
  }
  if (window.innerWidth > 600) {
    window.scrollTo(0, 0);
  }

  const [language, setLanguage] = useState("English");
  const [index, setIndex] = useState(0);
  const [darkTheme, setDarkTheme] = useState(false);

  const animals = getAnimals();

  const handleBulb = function () {
    setDarkTheme(!darkTheme);
  };

  return (
    <div>
      <div
        className={darkTheme ? "main-container dark-theme" : "main-container"}
      >
        <Header />
        <LanguageContext.Provider value={[language, setLanguage]}>
          <Carousel animals={animals} index={index} setIndex={setIndex} />
          <LanguageChooser
            animals={animals}
            index={index}
            setIndex={setIndex}
          />
        </LanguageContext.Provider>
        <button className="light-dark" onClick={handleBulb}>
          💡
        </button>
        <Disclaimer />
      </div>
    </div>
  );
}

export default App;
