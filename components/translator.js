const res = require("express/lib/response");
const americanOnly = require("./american-only.js");
const americanToBritishSpelling = require("./american-to-british-spelling.js");
const americanToBritishTitles = require("./american-to-british-titles.js");
const britishOnly = require("./british-only.js");

class Translator {
  britishToAmerican(text) {
    let lowerCasedText = text.toLowerCase();
    let americanToBritishSpellingValues = Object.values(
      americanToBritishSpelling
    );
    for (let i = 0; i < americanToBritishSpellingValues.length; i++) {
      if (text.indexOf(americanToBritishSpellingValues[i]) !== -1) {
        //find looks through all the keys till it finds the one with the value we are looking for, then it returns it´s key.
        let translatedWord = Object.keys(americanToBritishSpelling).find(
          (key) =>
            americanToBritishSpelling[key] ===
            americanToBritishSpellingValues[i]
        );

        text = text.replace(
          new RegExp(americanToBritishSpellingValues[i], "g"),
          '<span class="highlight">' + translatedWord + "</span>"
        );
      }
    }

    let americanToBritishTitlesValues = Object.values(americanToBritishTitles);
    for (let i = 0; i < americanToBritishTitlesValues.length; i++) {
      if (text.indexOf(americanToBritishTitlesValues[i]) !== 1) {
        let translatedWord = Object.keys(americanToBritishTitles).find(
          (key) =>
            americanToBritishTitles[key] === americanToBritishTitlesValues[i]
        );

        text = text.replace(
          new RegExp(americanToBritishTitlesValues[i], "g"),
          '<span class="highlight">' + translatedWord + "</span>"
        );
      }
    }

    let britishOnlyKeys = Object.keys(britishOnly);
    for (let i = 0; i < britishOnlyKeys.length; i++) {
      if (lowerCasedText.indexOf(britishOnlyKeys[i]) !== -1) {
        text = text.replace(
          new RegExp(britishOnlyKeys[i], "gi"),
          '<span class="highlight">' +
            britishOnly[britishOnlyKeys[i]] +
            "</span>"
        );
      }
    }

    let regex = /([0-2]?[0-9])\.([0-5][0-9])/g;
    text = text.replace(regex, '<span class = "highlight">$1:$2</span>');

    return text;
  }

  americanToBritish(text) {
    let lowerCasedText = text.toLowerCase();
    let americanOnlyKeys = Object.keys(americanOnly);
    for (let i = 0; i < americanOnlyKeys.length; i++) {
      if (lowerCasedText.indexOf(americanOnlyKeys[i]) !== -1) {
        text = text.replace(
          new RegExp(americanOnlyKeys[i], "gi"),
          '<span class="highlight">' +
            americanOnly[americanOnlyKeys[i]] +
            "</span>"
        );
      }
    }

    let americanToBritishSpellingKeys = Object.keys(americanToBritishSpelling);
    for (let i = 0; i < americanToBritishSpellingKeys.length; i++) {
      if (lowerCasedText.indexOf(americanToBritishSpellingKeys[i]) !== -1) {
        text = text.replace(
          new RegExp(americanToBritishSpellingKeys[i], "gi"),
          '<span class="highlight">' +
            americanToBritishSpelling[americanToBritishSpellingKeys[i]] +
            "</span>"
        );
      }
    }

    let americanToBritishTitlesKeys = Object.keys(americanToBritishTitles);

    for (let i = 0; i < americanToBritishTitlesKeys.length; i++) {
      if (lowerCasedText.indexOf(americanToBritishTitlesKeys[i]) !== -1) {
        text = text.replace(
          new RegExp(americanToBritishTitlesKeys[i], "gi"),
          '<span class="highlight">' +
            americanToBritishTitles[americanToBritishTitlesKeys[i]] +
            "</span>"
        );
      }
    }

    let regex = /([0-2]?[0-9]):([0-5][0-9])/g;
    text = text.replace(regex, '<span class="highlight">$1.$2</span>');

    return text;
  }

  validateFields(textField, localeField) {
    if (textField !== undefined && textField === "") {
      return {
        error: "No text to translate",
      };
    } else if (
      localeField !== undefined &&
      localeField !== "british-to-american" &&
      localeField !== "american-to-british"
    ) {
      return {
        error: "Invalid value for locale field",
      };
    } else if (textField === undefined || localeField === undefined) {
      return {
        error: "Required field(s) missing",
      };
    } else {
      return true;
    }
  }

  isTranslationRequired(textToTranslate, translatedText) {
    if (textToTranslate === translatedText) {
      return false;
    } else {
      return true;
    }
  }
}

module.exports = Translator;
