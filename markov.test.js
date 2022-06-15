const { MarkovMachine } = require('./markov');

describe('test markov machine', function () {
  test('test chains', () => {
    const text =
      'do you like green eggs and ham. I do. I do like green eggs and ham, Sam I am.';
    const mm = new MarkovMachine(text);
    mm.makeChains();

    expect(mm.chains.get('you')).toEqual(['like']);
    expect(mm.chains.get('do')).toContain('you');
    expect(mm.chains.get('do')).toContain('like');
    expect(mm.chains.get('am.')).toContain(null);
  });
});
