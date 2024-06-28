const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')

class Translator {
  translate(text, atb) {
    let translation = text;
    if (atb) {
      for (const [american, british] of Object.entries(americanOnly)) {
        translation = this.donotmutateasshole(american, british, translation, atb);
      }
    }
    if (!atb) {
      for (const [british, american] of Object.entries(britishOnly)) {
        translation = this.donotmutateasshole(american, british, translation, atb);
      }
    }
    for (const [american, british] of Object.entries(americanToBritishTitles)) {
      translation = this.donotmutateasshole(american, british, translation, atb);
    }
    for (const [american, british] of Object.entries(americanToBritishSpelling)) {
      translation = this.donotmutateasshole(american, british, translation, atb);
    }

    const timeRegex = new RegExp(`([0-9]+)${atb ? ':' : '.'}([0-9]+)`, 'g');
    for (const match of [...translation.matchAll(timeRegex)]){
      const replacement = `${match[1]}${atb ? '.' : ':'}${match[2]}`;
      translation = translation.replace(timeRegex, `<span class="highlight">${replacement}</span>`);
    };


    if (translation === text) return 'Everything looks good to me!';
    else return translation;
  }

  //I'm too scared to change the name of this function as node broke with an identical version of the function with a different name...
  //Sorry to whoever is reading this.
  donotmutateasshole(american, british, translationString, atb) {
    const replacement = atb ? british : american;
    const word = atb ? american : british;
    const regex = new RegExp(word, 'gi');
    if (!translationString.match(regex)) return translationString;

    // console.log('----MATCHES----');
    // console.log('matching word:', word);
    // console.log('replacement', replacement);
    for (const { index } of [...translationString.matchAll(regex)]) {
      const edgeChars = translationString.charAt(index - 1) + translationString.charAt(index + word.length);
      // console.log('edge chars:', '"', edgeChars, '"');
      if (edgeChars.match(/[a-z\-]/)) continue;
      // console.log('REPLACING!');
      translationString = translationString.replace(regex, `<span class="highlight">${replacement}</span>`);
    }
    
    return translationString;
  }
}

module.exports = Translator;