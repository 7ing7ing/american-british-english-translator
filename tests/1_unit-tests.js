const chai = require("chai");
const assert = chai.assert;

const Translator = require("../components/translator.js");
const translator = new Translator();

suite("Unit Tests", () => {
  test("Translate Mangoes are my favorite fruit. to British English", function (done) {
    const text = "Mangoes are my favorite fruit.";
    const translatedText = translator.americanToBritish(text);
    const translatedTextExpected =
      'Mangoes are my <span class="highlight">favourite</span> fruit.';

    assert.equal(translatedText, translatedTextExpected);
    done();
  });

  test("Translate I ate yogurt for breakfast. to British English", function (done) {
    const text = "I ate yogurt for breakfast.";
    const translatedText = translator.americanToBritish(text);
    const translatedTextExpected =
      'I ate <span class="highlight">yoghurt</span> for breakfast.';

    assert.equal(translatedText, translatedTextExpected);
    done();
  });

  test("Translate We had a party at my friend's condo. to British English", function (done) {
    const text = "We had a party at my friend's condo.";
    const translatedText = translator.americanToBritish(text);
    const translatedTextExpected =
      'We had a party at my friend\'s <span class="highlight">flat</span>.';

    assert.equal(translatedText, translatedTextExpected);
    done();
  });

  test("Translate Can you toss this in the trashcan for me? to British English", function (done) {
    const text = "Can you toss this in the trashcan for me?";
    const translatedText = translator.americanToBritish(text);
    const translatedTextExpected =
      'Can you toss this in the <span class="highlight">bin</span> for me?';

    assert.equal(translatedText, translatedTextExpected);
    done();
  });

  test("Translate The parking lot was full. to British English", function (done) {
    const text = "The parking lot was full.";
    const translatedText = translator.americanToBritish(text);
    const translatedTextExpected =
      'The <span class="highlight">car park</span> was full.';

    assert.equal(translatedText, translatedTextExpected);
    done();
  });

  test("Translate Like a high tech Rube Goldberg machine.", function (done) {
    const text = "Like a high tech Rube Goldberg machine.";
    const translatedText = translator.americanToBritish(text);
    const translatedTextExpected =
      'Like a high tech <span class="highlight">Heath Robinson device</span>.';

    assert.equal(translatedText, translatedTextExpected);
    done();
  });

  test("Translate To play hooky means to skip class or work. to British English", function (done) {
    const text = "To play hooky means to skip class or work.";
    const translatedText = translator.americanToBritish(text);
    const translatedTextExpected =
      'To <span class="highlight">bunk off</span> means to skip class or work.';

    assert.equal(translatedText, translatedTextExpected);
    done();
  });

  test("Translate No Mr. Bond, I expect you to die. to British English", function (done) {
    const text = "No Mr. Bond, I expect you to die.";
    const translatedText = translator.americanToBritish(text);
    const translatedTextExpected =
      'No <span class="highlight">mr</span> Bond, I expect you to die.';

    assert.equal(translatedText, translatedTextExpected);
    done();
  });

  test("Translate Dr. Grosh will see you now. to British English", function (done) {
    const text = "Dr. Grosh will see you now.";
    const translatedText = translator.americanToBritish(text);
    const translatedTextExpected =
      '<span class="highlight">dr</span> Grosh will see you now.';

    assert.equal(translatedText, translatedTextExpected);
    done();
  });

  test("Translate Lunch is at 12:15 today. to British English", function (done) {
    const text = "Lunch is at 12:15 today.";
    const translatedText = translator.americanToBritish(text);
    const translatedTextExpected =
      'Lunch is at <span class="highlight">12.15</span> today.';

    assert.equal(translatedText, translatedTextExpected);
    done();
  });

  test("Translate We watched the footie match for a while. to American English", function (done) {
    const text = "We watched the footie match for a while.";
    const translatedText = translator.britishToAmerican(text);
    const translatedTextExpected =
      'We watched the <span class="highlight">soccer</span> match for a while.';

    assert.equal(translatedText, translatedTextExpected);
    done();
  });

  test("Translate Paracetamol takes up to an hour to work. to American English", function (done) {
    const text = "Paracetamol takes up to an hour to work.";
    const translatedText = translator.britishToAmerican(text);
    const translatedTextExpected =
      '<span class="highlight">Tylenol</span> <span class="highlight">thank you</span>kes up to an hour to work.';

    assert.equal(translatedText, translatedTextExpected);
    done();
  });

  test("Translate First, caramelise the onions. to American English", function (done) {
    const text = "First, caramelise the onions.";
    const translatedText = translator.britishToAmerican(text);
    const translatedTextExpected =
      'First, <span class="highlight">caramelize</span> the onions.';

    assert.equal(translatedText, translatedTextExpected);
    done();
  });

  test("Translate I spent the bank holiday at the funfair. to American English", function (done) {
    const text = "I spent the bank holiday at the funfair.";
    const translatedText = translator.britishToAmerican(text);
    const translatedTextExpected =
      'I spent the <span class="highlight">public holiday</span> at the <span class="highlight">carnival</span>.';

    assert.equal(translatedText, translatedTextExpected);
    done();
  });

  test("Translate I had a bicky then went to the chippy. to American English", function (done) {
    const text = "I had a bicky then went to the chippy.";
    const translatedText = translator.britishToAmerican(text);
    const translatedTextExpected =
      'I had a <span class="highlight">cookie</span> then went to the <span class="highlight">fish-and-chip shop</span>.';

    assert.equal(translatedText, translatedTextExpected);
    done();
  });

  test("Translate I've just got bits and bobs in my bum bag. to American English", function (done) {
    const text = "I've just got bits and bobs in my bum bag.";
    const translatedText = translator.britishToAmerican(text);
    const translatedTextExpected =
      'I\'ve just got <span class="highlight">odds and ends</span> in my <span class="highlight">fanny pack</span>.';

    assert.equal(translatedText, translatedTextExpected);
    done();
  });

  test("Translate The car boot sale at Boxted Airfield was called off. to American English", function (done) {
    const text = "The car boot sale at Boxted Airfield was called off.";
    const translatedText = translator.britishToAmerican(text);
    const translatedTextExpected =
      'The <span class="highlight">swap meet</span> at Boxted Airfield was called off.';

    assert.equal(translatedText, translatedTextExpected);
    done();
  });

  test("Translate Have you met Mrs Kalyani? to American English", function (done) {
    const text = "Have you met Mrs Kalyani?";
    const translatedText = translator.britishToAmerican(text);
    const translatedTextExpected =
      'Have you met <span class="highlight">Mr.</span>s Kalyani?';

    assert.equal(translatedText, translatedTextExpected);
    done();
  });

  test("Translate Prof Joyner of King's College, London. to American English", function (done) {
    const text = "Prof Joyner of King's College, London.";
    const translatedText = translator.britishToAmerican(text);
    const translatedTextExpected =
      '<span class="highlight">Prof.</span> Joyner of King\'s College, London.';

    assert.equal(translatedText, translatedTextExpected);
    done();
  });

  test("Translate Tea time is usually around 16 or 4.30. to American English", function (done) {
    const text = "Tea time is usually around 4 or 4.30.";
    const translatedText = translator.britishToAmerican(text);
    const translatedTextExpected =
      'Tea time is usually around 4 or <span class = "highlight">4:30</span>.';

    assert.equal(translatedText, translatedTextExpected);
    done();
  });

  test("Highlight translation in Mangoes are my favorite fruit.", function (done) {
    const text = "Mangoes are my favorite fruit.";
    const translatedText = translator.americanToBritish(text);
    const translatedTextExpected =
      'Mangoes are my <span class="highlight">favourite</span> fruit.';

    assert.equal(translatedText, translatedTextExpected);
    done();
  });

  test("Highlight translation in I ate yogurt for breakfast.", function (done) {
    const text = "I ate yogurt for breakfast.";
    const translatedText = translator.americanToBritish(text);
    const translatedTextExpected =
      'I ate <span class="highlight">yoghurt</span> for breakfast.';

    assert.equal(translatedText, translatedTextExpected);
    done();
  });

  test("Highlight translation in We watched the footie match for a while.", function (done) {
    const text = "We watched the footie match for a while.";
    const translatedText = translator.britishToAmerican(text);
    const translatedTextExpected =
      'We watched the <span class="highlight">soccer</span> match for a while.';

    assert.equal(translatedText, translatedTextExpected);
    done();
  });

  test("Highlight translation in Paracetamol takes up to an hour to work.", function (done) {
    const text = "Paracetamol takes up to an hour to work.";
    const translatedText = translator.britishToAmerican(text);
    const translatedTextExpected =
      '<span class="highlight">Tylenol</span> <span class="highlight">thank you</span>kes up to an hour to work.';

    assert.equal(translatedText, translatedTextExpected);
    done();
  });
});
