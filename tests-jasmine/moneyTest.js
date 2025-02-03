import {formatCurrency}  from '../scripts/utils/money.js'

describe('test suite: formatCurrency', () => {
  it('converts cents into dollars', () => {
   expect(formatCurrency(2095)).toEqual('20.95');
  });


  it('works with 0', () => {
    expect(formatCurrency(0)).toEqual('0.00');
  });
});

describe('test suite: Rounding off', () => {
  it('check if the code rounds to the nearest cent', () => {
    expect(formatCurrency(2000.5)).toEqual('20.01')
  });

  it('checks to see if rounds off properly even in tricky situations', () => {
    expect(formatCurrency('2000.4')).toEqual('20.00')
  });
  
});