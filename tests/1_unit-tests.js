const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');
const translator = new Translator();
const spanOpen = '<span class="highlight">';
const spanClose = '</span>';

suite('Unit Tests', () => {
  test('American-to-British: Mangoes are my favorite fruit', () => {
    assert.equal(translator.translate('Mangoes are my favorite fruit.', true), 'Mangoes are my <span class="highlight">favourite</span> fruit.');
  });
  test('American-to-British: I ate yogurt for breakfast.', () => {
    assert.equal(translator.translate('I ate yogurt for breakfast.', true), `I ate ${spanOpen}yoghurt${spanClose} for breakfast.`);
  });
  test('American-to-British: We had a party at my friend\'s condo.', () => {
    assert.equal(translator.translate('We had a party at my friend\'s condo.', true), `We had a party at my friend's ${spanOpen}flat${spanClose}.`);
  });
  test('American-to-British: Can you toss this in the trashcan for me?', () => {
    assert.equal(translator.translate('Can you toss this in the trashcan for me?', true), `Can you toss this in the ${spanOpen}bin${spanClose} for me?`);
  });
  test('American-to-British: The parking lot was full.', () => {
    assert.equal(translator.translate('The parking lot was full.', true), `The ${spanOpen}car park${spanClose} was full.`);
  });
  test('American-to-British: Like a high tech Rube Goldberg machine.', () => {
    assert.equal(translator.translate('Like a high tech Rube Goldberg machine.', true), `Like a high tech ${spanOpen}Heath Robinson device${spanClose}.`);
  });
  test('American-to-British: To play hooky means to skip class or work.', () => {
    assert.equal(translator.translate('To play hooky means to skip class or work.', true), `To ${spanOpen}bunk off${spanClose} means to skip class or work.`);
  });
  test('American-to-British: No Mr. Bond, I expect you to die.', () => {
    assert.equal(translator.translate('No Mr. Bond, I expect you to die.', true), `No ${spanOpen}Mr${spanClose} Bond, I expect you to die.`);
  });
  test('American-to-British: Dr. Grosh will see you now.', () => {
    assert.equal(translator.translate('Dr. Grosh will see you now.', true), `${spanOpen}Dr${spanClose} Grosh will see you now.`);
  });
  test('American-to-British: Lunch is at 12:15 today.', () => {
    assert.equal(translator.translate('Lunch is at 12:15 today.', true), `Lunch is at ${spanOpen}12.15${spanClose} today.`);
  });
  test('British-to-American: We watched the footie match for a while.', () => {
    assert.equal(translator.translate('We watched the footie match for a while.', false), `We watched the ${spanOpen}soccer${spanClose} match for a while.`);
  });
  test('British-to-American: Paracetamol takes up to an hour to work.', () => {
    assert.equal(translator.translate('Paracetamol takes up to an hour to work.', false), `${spanOpen}Tylenol${spanClose} takes up to an hour to work.`);
  });
  test('British-to-American: First, caramelise the onions.', () => {
    assert.equal(translator.translate('First, caramelise the onions.', false), `First, ${spanOpen}caramelize${spanClose} the onions.`);
  });
  test('British-to-American: I spent the bank holiday at the funfair.', () => {
    assert.equal(translator.translate('I spent the bank holiday at the funfair.', false), `I spent the ${spanOpen}public holiday${spanClose} at the ${spanOpen}carnival${spanClose}.`);
  });
  test('British-to-American: I had a bicky then went to the chippy.', () => {
    assert.equal(translator.translate('I had a bicky then went to the chippy.', false), `I had a ${spanOpen}cookie${spanClose} then went to the ${spanOpen}fish-and-chip shop${spanClose}.`);
  });
  test('British-to-American: I\'ve just got bits and bobs in my bum bag.', () => {
    assert.equal(translator.translate('I\'ve just got bits and bobs in my bum bag.', false), `I've just got ${spanOpen}odds and ends${spanClose} in my ${spanOpen}fanny pack${spanClose}.`);
  });
  test('British-to-American: The car boot sale at Boxted Airfield was called off.', () => {
    assert.equal(translator.translate('The car boot sale at Boxted Airfield was called off.', false), `The ${spanOpen}swap meet${spanClose} at Boxted Airfield was called off.`);
  });
  test('British-to-American: Have you met Mrs Kalyani?', () => {
    assert.equal(translator.translate('Have you met Mrs Kalyani?', false), `Have you met ${spanOpen}Mrs.${spanClose} Kalyani?`);
  });
  test('British-to-American: Prof Joyner of King\'s College, London.', () => {
    assert.equal(translator.translate('Prof Joyner of King\'s College, London.', false), `${spanOpen}Prof.${spanClose} Joyner of King's College, London.`);
  });
  test('British-to-American: Tea time is usually around 4 or 4.30.', () => {
    assert.equal(translator.translate('Tea time is usually around 4 or 4.30.', false), `Tea time is usually around 4 or ${spanOpen}4:30${spanClose}.`);
  });

  test('Highlight the translation in: Mangoes are my favorite fruit', () => {
    assert.equal(translator.translate('Mangoes are my favorite fruit.', true), 'Mangoes are my <span class="highlight">favourite</span> fruit.');
  });
  test('Highlight the translation in: I ate yogurt for breakfast.', () => {
    assert.equal(translator.translate('I ate yogurt for breakfast.', true), `I ate ${spanOpen}yoghurt${spanClose} for breakfast.`);
  });
  test('Highlight the translation in: We watched the footie match for a while.', () => {
    assert.equal(translator.translate('We watched the footie match for a while.', false), `We watched the ${spanOpen}soccer${spanClose} match for a while.`);
  });
  test('Highlight the translation in: Paracetamol takes up to an hour to work.', () => {
    assert.equal(translator.translate('Paracetamol takes up to an hour to work.', false), `${spanOpen}Tylenol${spanClose} takes up to an hour to work.`);
  });
});
