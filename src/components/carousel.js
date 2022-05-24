import React, { useContext, useState } from "react";
import speechBubble from "../images/speech-bubble.png";
import LanguageContext from "../contexts/LanguageContext";

function Carousel({ animals, index, setIndex }) {
  const [talk, setTalk] = useState(false);
  const [language, setLanguage] = useContext(LanguageContext);

  const handleTalk = function () {
    setTalk(true);
    setTimeout(() => {
      setTalk(false);
    }, 1500);
  };

  const handleNext = function () {
    setIndex(index + 1);
    setLanguage("English");
  };

  const handlePrevious = function () {
    setIndex(index - 1);
    setLanguage("English");
  };

  return (
    <div className="carousel">
      <button
        className="carousel__button previous-button"
        onClick={handlePrevious}
        style={
          index === 0 ? { visibility: "hidden" } : { visibility: "visible" }
        }
      ></button>
      <div className="carousel__contents-container">
        <ul
          className="carousel__contents"
          style={{ left: `-${index * 40}vw`, transition: "left 0.3s ease-out" }}
        >
          {animals.map((animal) => (
            <li
              key={animal.id}
              className="carousel__slide"
              style={{ left: `${animal.id * 40}vw` }}
            >
              <div className="animal-box">
                <img
                  src={animal.img}
                  alt={animal.type}
                  className="animal-img"
                />
                <div className="bubble-and-button-box">
                  <div className={talk ? "bubble talk" : "bubble"}>
                    <img
                      src={speechBubble}
                      alt="speech bubble"
                      className="bubble-img"
                    />
                    <p className="bubble-text">
                      {animals[index].sounds[language]} !
                    </p>
                  </div>
                  <button className="talk-button" onClick={handleTalk}>
                    TALK
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <button
        className="carousel__button next-button"
        onClick={handleNext}
        style={
          index === animals.length - 1
            ? { visibility: "hidden" }
            : { visibility: "visible" }
        }
      ></button>
      <div className="carousel__dots">
        {animals.map((animal) => (
          <button
            className={
              animal.id === index
                ? "carousel__dot is-selected "
                : "carousel__dot"
            }
            onClick={() => {
              setIndex(animal.id);
              setLanguage("English");
            }}
            key={animal.id}
          ></button>
        ))}
      </div>
      <div></div>
      <h3>{`The ${language} ${animals[index].type}`}</h3>
    </div>
  );
}

export default Carousel;
