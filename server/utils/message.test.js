const expect = require('expect'),
      {generateMessage} = require('./message');


describe('generateMessage', () => {
  it('should generate correct message object', () => {
    const messageObject = generateMessage('Andrew', 'Test message');

    expect(messageObject.createdAt).toBeA('number');
    
    expect(messageObject).toInclude({
      from: 'Andrew',
      text: 'Test message'
    });
  });
});