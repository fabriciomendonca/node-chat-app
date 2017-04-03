const expect = require('expect'),
      {isRealString} = require('./validation');

describe('isRealString', () => {
  it('should validate a real string', () => {
    var str = 'test';
    expect(isRealString(str)).toBe(true);
  });

  it('should validate a trimmed string', () => {
    var str = ' test ';
    expect(isRealString(str)).toBe(true);
  });

  it('should invalidate non string value', () => {
    expect(isRealString(21)).toBe(false);
  });

  it('should invalidate an empty string', () => {
    expect(isRealString('')).toBe(false);
  });

  it('should trim and invalidate a space only string', () => {
    var str = '     ';
    expect(isRealString(str)).toBe(false);
  });
});