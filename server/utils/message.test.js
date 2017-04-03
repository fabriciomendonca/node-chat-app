const expect = require('expect'),
      {generateMessage, generateLocationMessage} = require('./message');


describe('generateMessage', () => {
  it('should generate correct message object', () => {
    const from = 'Andrew',
          text = 'Test message',
          messageObject = generateMessage(from, text);

    expect(messageObject.createdAt).toBeA('number');
    expect(messageObject).toInclude({
      from,
      text
    });
  });
});

describe('generateLocationMessage', () => {
  it('should generate correct location message object', () => {
    const from = 'Admin',
          latitude = -30.457,
          longitude = 40.29876,
          message = generateLocationMessage(from, latitude, longitude);

    expect(message.from).toBe(from);
    expect(message.url).toBe(`https://google.com/maps?q=${latitude},${longitude}`);
    expect(message.createdAt).toBeA('number');
  });
});