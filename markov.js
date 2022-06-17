

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

    return this.chains = chains;
  }

  /** return random text from chains */

  makeText(numWords = 200) {
    // TODO
    
    let textArr = [];
    let keys = Array.from(this.chains.keys())
    let key = MarkovMachine.getRandomFromArr(keys)

    while (textArr.length < numWords && key !== null) {
      textArr.push(key);
      key = MarkovMachine.getRandomFromArr(this.chains.get(key));
    }

    return textArr.join(' ');
  }

  static getRandomFromArr(arr){
    const index = Math.floor(Math.random() * arr.length)
    return arr[index]
  }
  
}


module.exports = {
  MarkovMachine,
};
