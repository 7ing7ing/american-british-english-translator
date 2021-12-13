const res = require("express/lib/response");
const americanOnly = require("./american-only.js");
const americanToBritishSpelling = require("./american-to-british-spelling.js");
const americanToBritishTitles = require("./american-to-british-titles.js");
const britishOnly = require("./british-only.js");

class Translator {
  britishToAmerican(text) {
    let translatedText = [];

    let textArray = text.split(" ");

    for (let i = 0; i < textArray.length; i++) {
      let translatedWord = Object.keys(americanToBritishSpelling).find(
        (key) => americanToBritishSpelling[key] === textArray[i]
      );

      if (translatedWord === undefined) {
        translatedWord = Object.keys(americanToBritishTitles).find(
          (key) => americanToBritishTitles[key] === textArray[i]
        );
        if (translatedWord === undefined) {
          translatedWord = britishOnly[textArray[i]];
        }
      }

      if (translatedWord === undefined) {
        translatedText.push(textArray[i]);
      } else {
        translatedText.push(
          "<span class = 'highlight'> " + translatedWord + "</span>"
        );
      }
    }

    translatedText = translatedText.join(" ");

    let regex = /([0-2][0-9])\.([0-5][0-9])/g;
    translatedText = translatedText.replace(
      regex,
      '<span class = "highlight">$1:$2</span>'
    );

    return translatedText;
  }

  americanToBritish(text) {
    let translatedText = [];

    let textArray = text.split(" ");

    for (let i = 0; i < textArray.length; i++) {
      let translatedWord = americanOnly[textArray[i]];

      if (translatedWord === undefined) {
        translatedWord = americanToBritishSpelling[textArray[i]];

        if (translatedWord === undefined) {
          translatedWord = americanToBritishTitles[textArray[i]];
        }
      }

      if (translatedWord === undefined) {
        translatedText.push(textArray[i]);
      } else {
        translatedText.push(
          "<span class = 'highlight'> " + translatedWord + "</span>"
        );
      }
    }

    translatedText = translatedText.join(" ");

    let regex = /([0-2][0-9]):([0-5][0-9])/g;
    translatedText = translatedText.replace(
      regex,
      '<span class = "highlight">$1.$2</span>'
    );

    return translatedText;
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
