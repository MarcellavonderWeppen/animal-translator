import { NavLink } from "react-router-dom";
import { getAnimal } from "../data/data-animals";
import speechBubble from "../images/speech-bubble.png";
import { useState } from "react";
import cat2 from "../images/cartoon-cat-light.png";
import dog2 from "../images/cartoon-dog-light.png";

function Intro() {
  const cat = getAnimal(0);
  const dog = getAnimal(1);
  const pig = getAnimal(2);

  const [talking, setTalking] = useState(false);
  const [darkTheme, setDarkTheme] = useState(true);

  setInterval(() => {
    if (talking === false) {
      setTalking(true);
    } else {
      setTalking(false);
    }
  }, 3000);

  const handleBulb = function () {
    setDarkTheme(!darkTheme);
  };

  return (
    <div className={darkTheme ? "main-container dark-theme" : "main-container"}>
      <div className="main-container intro">
        <h3>Psst...</h3>
        <h1>... hey there, Animal Lover!</h1>
        <h3>Yes, we are talking to you.</h3>
        <h4> May we ask you...</h4>
        <ul>
          <li>
            Have you ever walked down a street, when suddenly a dog came running
            towards you barking <b>Blaf Blaf</b> ? Were you confused and didn't
            know what to do?
          </li>
          <li>
            Have you ever been to Sweden and approached a pig with a warm
            <b> Oink Oink</b>? But the pig just stared back at you with a vacant
            expression?
          </li>
          <li>
            Or have you ever befriended a German cat? You thought the two of you
            clicked and talked the same language (quite literally). But when you
            sent letters to your furry friend, all you got was cold silence?
          </li>
        </ul>
        <div className="intro-animal-container">
          <div className="intro-animal-box">
            <img
              src={darkTheme ? cat2 : cat.img}
              alt="cat"
              className="intro-animal-img"
            />
            <div
              className={
                talking
                  ? "intro-bubble-box"
                  : "intro-bubble-box intro-bubble-box-hide"
              }
            >
              <img
                src={speechBubble}
                alt="speech-bubble"
                className="intro-speech-bubble"
              />
              <p className="intro-sound">{cat.sounds["German"]} !</p>
            </div>
          </div>
          <div className="intro-animal-box">
            <img
              src={darkTheme ? dog2 : dog.img}
              alt="cat"
              className="intro-animal-img"
            />
            <div
              className={
                talking
                  ? "intro-bubble-box intro-bubble-box-hide"
                  : "intro-bubble-box"
              }
            >
              <img
                src={speechBubble}
                alt="speech-bubble"
                className="intro-speech-bubble"
              />
              <p className="intro-sound">{dog.sounds["Dutch"]} !</p>
            </div>
          </div>
        </div>
        <h4>If this sounds familiar, you need Awesome Animal Translator!</h4>
        <ul>
          <li>
            Let us explain the cause of your struggles: You have been to the
            Netherlands and the dogs <b>Blaf Blaf</b> is just Dutch for{" "}
            <b>Woof Woof</b> ! All the dog wanted to do, is happily greet you.
            But you didn't understand, because you lacked the intercultural
            animal-competence.
          </li>
          <li>
            Swedish pigs say <b>Nöff Nöff</b>. The poor animal simply didn't
            understand what you were trying to say. <b>Oink Oink</b> are just
            some meaningless phrases for it.
          </li>
          <li>
            As for the cat, German cats say <b>Miau</b>. It is pronounced
            exactly like <b>Meow</b>. That's why you were able to connect with
            the cat so well, when the two of you were talking. Felines with
            higher education can probably read English Cat-ish, but your
            companion was probably a simple country-bred cat. Most working class
            cats can hardly read and write, let alone in English. You probably
            bewildered the poor animal, to say the least!
          </li>
        </ul>
        <div className="intro-animal-container">
          <div className="intro-animal-box">
            <img src={pig.img} alt="cat" className="intro-animal-img" />
            <div
              className={
                talking
                  ? "intro-bubble-box"
                  : "intro-bubble-box intro-bubble-box-hide"
              }
            >
              <img
                src={speechBubble}
                alt="speech bubble"
                className="intro-speech-bubble"
              />
              <p className="intro-sound">{pig.sounds["Swedish"]} !</p>
            </div>
          </div>
        </div>
        <ul>
          <li>
            {" "}
            All these awkward situations wouldn't have occurred in the first
            place if you had worked on your intercultural animal-competence with
            Awesome Animal Translator!
          </li>
          <li>It's never too late.</li>
        </ul>

        <h4>Let's dive into cultural animal-diversity, shall we?</h4>
        <div className="intro-button-box">
          <button className="talk-button intro-button">
            <NavLink to="app">Yes, let's go!</NavLink>
          </button>
          <button className="talk-button intro-button">
            <NavLink to="no">No, thanks</NavLink>
          </button>
        </div>
      </div>
      <button className="light-dark" onClick={handleBulb}>
        💡
      </button>
    </div>
  );
}

export default Intro;
