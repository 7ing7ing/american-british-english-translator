"use strict";

const Translator = require("../components/translator.js");

module.exports = function (app) {
  const translator = new Translator();

  app.route("/api/translate").post((req, res) => {
    let validation = translator.validateFields(req.body.text, req.body.locale);

    translator.isTranslationRequired();
    if (validation !== true) {
      return res.json(validation);
    }

    let translatedText;

    if (req.body.locale === "british-to-american") {
      translatedText = translator.britishToAmerican(req.body.text);
    } else if (req.body.locale === "american-to-british") {
      translatedText = translator.americanToBritish(req.body.text);
    }

    if (!translator.isTranslationRequired(req.body.text, translatedText)) {
      translatedText = "Everything looks good to me!";
    }

    return res.json({
      text: req.body.text,
      translation: translatedText,
    });
  });
};
