import React, { useContext, useState } from "react";
import { useSwipeable } from "react-swipeable";
import speechBubble from "../images/speech-bubble.png";
import LanguageContext from "../contexts/LanguageContext";

function Carousel({ animals, index, setIndex }) {
  let animalAudio = animals[index].audioSound;
  let audio = new Audio(animalAudio);

  const start = () => {
    audio.play();
    setTimeout(() => {
      audio.pause();
    }, 3000);
  };

  const [talk, setTalk] = useState(false);
  const [touch, setTouch] = useState(false);
  const [language, setLanguage] = useContext(LanguageContext);

  const handleTalk = function () {
    setTalk(true);
    start();
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

  const handleMouseEnter = function (e, animal) {
    //console.log(e.target.alt);
    if (e.target.alt === "duck") {
      alert(`Don't touch Ms. Duckling! She might get scared and attack.`);
    }
    if (e.target.alt === "frog") {
      alert(
        `We advise not to touch Mr. Froggy. Frogs are usually a bit slimy. Also, we are not sure, if they really like it.`
      );
    }
    if (e.target.alt === "cockerel") {
      alert(`Don't touch Mr. Cockerel! He might get scared and attack.`);
    }
    if (e.target.alt === "bee") {
      alert(`Don't touch Little Bee! She might get scared and sting.`);
    }
    start();
    setTouch(true);
  };

  const handleMouseOut = function () {
    setTouch(false);
  };

  let slideWidth = 40;

  if (window.innerWidth < 1200) {
    slideWidth = 50;
  }

  if (window.innerWidth < 900) {
    slideWidth = 70;
  }

  if (window.innerWidth < 600) {
    slideWidth = 75;
  }

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      if (index === 8) {
        return setIndex(8);
      } else {
        return setIndex(index + 1);
      }
    },
    //console.log(animals.length - 1);
    //setIndex(8): not good to have the value hardcoded here. Not sure, why passing in (animals.length -1)  didn't work here. Come back and make it work later.
    onSwipedRight: () => {
      if (index === 0) {
        return setIndex(0);
      } else {
        return setIndex(index - 1);
      }
    },
  });

  return (
    <div {...handlers} className="carousel">
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
          style={{
            left: `-${index * slideWidth}vw`,
            transition: "left 0.3s ease-out",
          }}
        >
          {animals.map((animal) => (
            <li
              key={animal.id}
              className="carousel__slide"
              style={{ left: `${animal.id * slideWidth}vw` }}
            >
              <div className="animal-box">
                <img
                  src={animal.img}
                  alt={animal.type}
                  id={animal.id} // just a feeling, that this might come in handy
                  className="animal-img"
                  onMouseEnter={handleMouseEnter}
                  onMouseOut={handleMouseOut}
                />
                <div className="bubble-and-button-box">
                  {!talk && !touch && (
                    <div className={"bubble"}>
                      <img
                        src={speechBubble}
                        alt="speech bubble"
                        className="bubble-img"
                      />
                      <p className="bubble-text bubble-text-talk">
                        {animals[index].sounds[language]} !
                      </p>
                    </div>
                  )}
                  {talk && (
                    <div className={talk ? "bubble talk" : "bubble"}>
                      <img
                        src={speechBubble}
                        alt="speech bubble"
                        className="bubble-img"
                        style={{ transform: "scale(1.2)" }}
                      />
                      <p
                        className="bubble-text bubble-text-talk"
                        style={{ transform: "scale(0.8)" }}
                      >
                        {animals[index].sounds[language]} !
                      </p>
                    </div>
                  )}

                  {touch && (
                    <div className={touch ? "bubble talk" : "bubble"}>
                      <img
                        src={speechBubble}
                        alt="speech bubble"
                        className="bubble-img"
                        style={{ transform: "scale(2)" }}
                      />
                      <p
                        className="bubble-text bubble-text-touch"
                        style={{ transform: "scale(0.7)" }}
                      >
                        {animals[index].sounds[language]} ! {animal.nickname}{" "}
                        likes pets!
                      </p>
                    </div>
                  )}
                  <div className="only-button-box">
                    <button className="talk-button" onClick={handleTalk}>
                      TALK
                    </button>
                  </div>
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
