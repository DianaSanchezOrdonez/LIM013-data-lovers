import filterLegend from '../src/data.js';


describe('example', () => {
  it('is a function', () => {
    expect(typeof filterLegend).toBe('function');
  });

  it('returns `example`', () => {
    expect(filterLegend('Aatrox','Mage')).toBe(true);
  });
});


/* describe('anotherExample', () => {
  it.skip('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it.skip('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});
 */