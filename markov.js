/** Textual markov chain generator */

class MarkovMachine {
  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter((c) => c !== '');
    this.makeChains();
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    // TODO
    let chains = new Map();
    for (let i = 0; i < this.words.length; i++) {
      let word = this.words[i];
      let next = this.words[i + 1] || null;
      if (!chains.get(word)) {
        chains.set(word, [next]);
      } else {
        chains.get(word).push(next);
      }
    }

    this.chains = chains;
  }

  /** return random text from chains */

  makeText(numWords = 100) {
    // TODO
    let textArr = [];

    // FINISH THIS!
    for (let i = 0; i < numWords; i++) {}
    //

    return textArr.join(' ');
  }
}

module.exports = {
  MarkovMachine,
};
