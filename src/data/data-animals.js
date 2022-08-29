import cat from "../images/cartoon-cat.png";
import dog from "../images/cartoon-dog.png";
import pig from "../images/cartoon-pig.png";
import horse from "../images/cartoon-horse.png";
import mouse from "../images/cartoon-mouse.png";
import duck from "../images/cartoon-duck-1.png";
import frog from "../images/cartoon-frog-1.png";
import cockerel from "../images/cartoon-cockerel.png";
import bee from "../images/cartoon-bee.png";
import bird from "../images/cartoon-bird.png";

const animals = [
  {
    id: 0,
    type: "house cat",
    img: cat,
    nickname: "Kitty",
    sounds: {
      English: "Meow",
      Spanish: "Miau",
      German: "Miau",
      Polish: "Miauk",
      Estonian: "Näu",
      Vietnamese: "Meo",
      Japanese: "Nyan",
      Korean: "Yaong",
    },
    audioSound: "/sounds/Sound-of-cat-meowing.mp3",
    availableLanguages: [
      "English",
      "Spanish",
      "German",
      "Polish",
      "Estonian",
      "Vietnamese",
      "Japanese",
      "Korean",
    ],
  },
  {
    id: 1,
    type: "dog",
    img: dog,
    nickname: "Doggy",
    sounds: {
      English: "Woff",
      Spanish: "Guau",
      French: "Waouh",
      Italian: "Bau",
      German: "Wau",
      Dutch: "Blaf",
      Icelandic: "Voff",
      Turkish: "Hev",
      Japanese: "Wan",
      Chinese: "Wang", //Cantonese
    },
    audioSound: "/sounds/large-dog-bark-once-sound-effect.mp3",
    availableLanguages: [
      "English",
      "Spanish",
      "French",
      "Italian",
      "German",
      "Dutch",
      "Icelandic",
      "Turkish",
      "Japanese",
      "Chinese",
    ],
  },
  {
    id: 2,
    type: "pig",
    img: pig,
    nickname: "Piggy",
    sounds: {
      English: "Oink",
      German: "Grunz",
      Dutch: "Knor",
      Swedish: "Nöff",
      Albanian: "Hunk",
      Japanese: "Buu",
    },
    audioSound: "/sounds/pig-sound-effect.mp3",
    availableLanguages: [
      "English",
      "German",
      "Dutch",
      "Swedish",
      "Albanian",
      "Japanese",
    ],
  },
  {
    id: 3,
    type: "horse",
    img: horse,
    nickname: "Horsy",

    sounds: {
      English: "Neigh",
      Danish: "Vrinsk",
      Swedish: "Gnägg",
      Polish: "I-haaa",
      Hungarian: "Nyihaha",
      Russian: "I-go-go",
      Japanese: "Hihiin",
    },
    audioSound: "/sounds/horse-neigh-sound-effect.mp3",
    availableLanguages: [
      "English",
      "Danish",
      "Swedish",
      "Polish",
      "Hungarian",
      "Russian",
      "Japanese",
    ],
  },
  {
    id: 4,
    type: "mouse",
    img: mouse,
    nickname: "Mousie",
    sounds: {
      English: "Squeak",
      Italian: "Squitt",
      Dutch: "Piep",
      Swedish: "Pip-pip",
      Hungarian: "Cin",
      Japanese: "Chuu",
      Korean: "Jjik",
      Chinese: "Zi", //Mandarin
    },
    audioSound: "/sounds/mouse-squeaking-noise.mp3",
    availableLanguages: [
      "English",
      "Italian",
      "Dutch",
      "Swedish",
      "Hungarian",
      "Japanese",
      "Korean",
      "Chinese",
    ],
  },
  {
    id: 5,
    type: "duck",
    img: duck,
    nickname: "Duckling",
    sounds: {
      English: "Quack",
      French: "Coin",
      Danish: "Rap",
      Hungarian: "Hap",
      Romanian: "Mac",
      Estonian: "Prääks",
      Turkish: "Vak",
    },
    audioSound: "/sounds/Duck-quack.mp3",
    availableLanguages: [
      "English",
      "French",
      "Danish",
      "Hungarian",
      "Romanian",
      "Estonian",
      "Turkish",
    ],
  },
  {
    id: 6,
    type: "frog",
    img: frog,
    nickname: "Froggy",
    sounds: {
      English: "Ribbit",
      Italian: "Cra Cra",
      German: "Quak",
      Hungarian: "Brekeke",
      Turkish: "Vrak",
      Polish: "Kum Kum",
      Thai: "Op Op",
      Japanese: "Kerokero",
      Korean: "Gae-Gool",
      Chinese: "Guo Guo",
    },
    audioSound: "/sounds/frog-noises.mp3",
    availableLanguages: [
      "English",
      "Italian",
      "German",
      "Hungarian",
      "Turkish",
      "Polish",
      "Thai",
      "Japanese",
      "Korean",
      "Chinese",
    ],
  },
  {
    id: 7,
    type: "cockerel",
    img: cockerel,
    nickname: "Mr Cockerel",
    sounds: {
      English: "Cock-A-Doodle-Doo",
      French: "Cocorico",
      Spanish: "Kikiriki",
      Japanese: "Kok-E-Kok-Ko",
      Korean: "Ko-Ko-Oh",
    },
    audioSound: "/sounds/cockerel-crowing-sound.mp3",
    availableLanguages: ["English", "French", "Spanish", "Japanese", "Korean"],
  },
  {
    id: 8,
    type: "bee",
    img: bee,
    nickname: "Little Bee",
    sounds: {
      English: "Bzzz",
      German: "Sum",
      Turkish: "Vzzz",
      Japanese: "Bun",
      Korean: "Boong",
    },
    audioSound: "/sounds/bumblebee-sound.mp3",
    availableLanguages: ["English", "German", "Turkish", "Japanese", "Korean"],
  },
  {
    id: 9,
    type: "bird",
    img: bird,
    nickname: "Birdie",
    sounds: {
      English: "Tweet",
      French: "Cui cui",
      Spanish: "Pio Pio",
      Italian: "Chip",
      Dutch: "Tjiep",
      Swedish: "Pip Pip",
      Greek: "Tsiou-Tsiou",
      Turkish: "Jick-Jick",
      Japanese: "Chun-Chun",
    },
    audioSound: "sounds/birds-song-in-forest.mp3",
    availableLanguages: [
      "English",
      "French",
      "Spanish",
      "Italian",
      "Dutch",
      "Swedish",
      "Greek",
      "Turkish",
      "Japanese",
    ],
  },
];

const getAnimals = function () {
  return animals;
};

const getAnimal = function (id) {
  return animals.find((animal) => animal.id === id);
};

export { getAnimals, getAnimal };
