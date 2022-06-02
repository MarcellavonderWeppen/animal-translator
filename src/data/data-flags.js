import englishFlag from "../icons/001-united-kingdom.png";
import frenchFlag from "../icons/002-france.png";
import germanFlag from "../icons/003-germany.png";
import spanishFlag from "../icons/004-spain.png";
import turkishFlag from "../icons/005-turkey.png";
import arabicFlag from "../icons/006-arabic-language.png";
import italianFlag from "../icons/007-italy.png";
import dutchFlag from "../icons/008-netherlands.png";
import koreanFlag from "../icons/009-south-korea.png";
import swedishFlag from "../icons/010-sweden.png";
import japaneseFlag from "../icons/011-japan.png";
import vietnameseFlag from "../icons/012-vietnam.png";
import polishFlag from "../icons/013-poland.png";
import estonianFlag from "../icons/014-estonia.png";
import icelandicFlag from "../icons/015-iceland.png";
import albanianFlag from "../icons/016-albania.png";
import urduFlag from "../icons/017-india.png";
import chineseFlag from "../icons/018-china.png";
import danishFlag from "../icons/019-denmark.png";
import hungarianFlag from "../icons/020-hungary.png";
import russianFlag from "../icons/021-russia.png";
import thaiFlag from "../icons/022-thailand.png";
import greeceFlag from "../icons/023-greece.png";
import romanianFlag from "../icons/024-romania.png";

import worldFlag from "../icons/000-worldwide.png";

function getFlag(language) {
  switch (language) {
    case "English":
      return englishFlag;

    case "French":
      return frenchFlag;

    case "German":
      return germanFlag;

    case "Spanish":
      return spanishFlag;

    case "Turkish":
      return turkishFlag;

    case "Arabic":
      return arabicFlag;

    case "Italian":
      return italianFlag;

    case "Dutch":
      return dutchFlag;

    case "Korean":
      return koreanFlag;

    case "Swedish":
      return swedishFlag;

    case "Japanese":
      return japaneseFlag;

    case "Vietnamese":
      return vietnameseFlag;

    case "Polish":
      return polishFlag;

    case "Estonian":
      return estonianFlag;

    case "Icelandic":
      return icelandicFlag;

    case "Albanian":
      return albanianFlag;

    case "Urdu":
      return urduFlag;

    case "Chinese":
      return chineseFlag;

    case "Danish":
      return danishFlag;

    case "Hungarian":
      return hungarianFlag;

    case "Russian":
      return russianFlag;

    case "Thai":
      return thaiFlag;

    case "Greek":
      return greeceFlag;

    case "Romanian":
      return romanianFlag;

    default:
      return worldFlag;
  }
}

export default getFlag;
