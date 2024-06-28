const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
const server = require('../server.js');

chai.use(chaiHttp);

let Translator = require('../components/translator.js');

suite('Functional Tests', () => {
  test('Translation with text and local fields', done => {
    chai.request(server).keepOpen()
      .post('/api/translate')
      .send({
        text: 'My favorite food to eat in a parking lot is corn.',
        locale: 'american-to-british'
      })
      .end((err, res) => {
        assert.equal(res.status, 200);
        assert.property(res.body, 'translation');
        done();
      });
  });
  test('Translation with text and invalid locale field', done => {
    chai.request(server).keepOpen()
      .post('/api/translate')
      .send({
        text: 'My favorite food to eat in a parking lot is corn.',
        locale: 'canadian-to-american'
      })
      .end((err, res) => {
        assert.equal(res.status, 200);
        assert.equal(res.body.error, 'Invalid value for locale field');
        done();
      });
  });
  test('Translation with missing text field', done => {
    chai.request(server).keepOpen()
      .post('/api/translate')
      .send({
        locale: 'british-to-american'
      })
      .end((err, res) => {
        assert.equal(res.status, 200);
        assert.equal(res.body.error, 'Required field(s) missing');
        done();
      });
  });
  test('Translation with missing locale field', done => {
    chai.request(server).keepOpen()
      .post('/api/translate')
      .send({
        text: 'Oopsie daisy I dropped my croissant!'
      })
      .end((err, res) => {
        assert.equal(res.status, 200);
        assert.equal(res.body.error, 'Required field(s) missing');
        done();
      });
  });
  test('Translation with empty text', done => {
    chai.request(server).keepOpen()
      .post('/api/translate')
      .send({
        text: "",
        locale: 'british-to-american'
      })
      .end((err, res) => {
        assert.equal(res.status, 200);
        assert.equal(res.body.error, 'No text to translate');
        done();
      });
  });
  test('Translation with text that needs no translation', done => {
    chai.request(server).keepOpen()
      .post('/api/translate')
      .send({
        text: 'Hello!',
        locale: 'british-to-american'
      })
      .end((err, res) => {
        assert.equal(res.status, 200);
        assert.equal(res.body.translation, 'Everything looks good to me!');
        done();
      });
  });
});
