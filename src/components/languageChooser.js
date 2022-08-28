import React, { useState, useContext } from "react";
import LanguageContext from "../contexts/LanguageContext";
import getFlag from "../data/data-flags";

const LanguageChooser = ({ animals, index, setIndex }) => {
  const [displayMenu, setDisplayMenu] = useState(false);

  const [language, setLanguage] = useContext(LanguageContext); // KEEP language; Deleting it will cause bug (menu will not work anymore)

  const handleClick = function () {
    setDisplayMenu(!displayMenu);
  };

  let listItemUnit = "em";

  if (window.innerWidth > 2000) {
    listItemUnit = "vmax";
  }

  return (
    <div className="language-chooser">
      <button id="button" onClick={handleClick} className="menu-button">
        Select a language
        <i className="fa fa-caret-down"></i>
      </button>
      <div
        className={
          displayMenu === false
            ? "dropdown-content"
            : "dropdown-content is-open"
        }
        style={
          displayMenu === false
            ? { height: "0" }
            : {
                height: `${
                  animals[index].availableLanguages.length * 2.7
                }${listItemUnit}`,
                transition: "height 1s ease, opacity 1s ease",
              }
        }
      >
        <ul className="menu-list">
          {animals[index].availableLanguages.map((language) => {
            return (
              <li
                key={language}
                className="menu-item"
                onClick={(e) => {
                  setLanguage(`${language}`);
                  setDisplayMenu(false);
                }}
              >
                {" "}
                <img
                  src={getFlag(language)}
                  alt="flag for language"
                  className="menu-flag"
                />
                {`${language}`}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default LanguageChooser;
