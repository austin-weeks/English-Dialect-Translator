'use strict';

const Translator = require('../components/translator.js');

module.exports = function (app) {
  
  const translator = new Translator();

  app.route('/api/translate')
    .post((req, res) => {
      const {text, locale} = req.body;
      console.log(text, locale);
      if (text === undefined || !locale) {
        res.json({error: 'Required field(s) missing'});
        return;
      }
      if (!text) {
        res.json({error: 'No text to translate'});
        return;
      }
      let translation;
      switch (locale) {
        case 'american-to-british':
          translation = translator.translate(text, true);
          break;
        case 'british-to-american':
          translation = translator.translate(text, false);
          break;
        default:
          res.json({error: 'Invalid value for locale field'});
          return;
      }
      console.log(translation);
      res.json({
        text,
        translation
      });
    });
};
