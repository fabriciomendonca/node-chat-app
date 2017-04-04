const expect = require('expect');
const {Users} = require('./users');

describe('Users', () => {
  var users;

  beforeEach(() => {
    users = new Users();
    users.users = [
      {id: '1', name: 'Mike', room: 'Node Course'},
      {id: '2', name: 'Joe', room: 'React Course'},
      {id: '3', name: 'Andrew', room: 'Node Course'}
    ];
  });

  it(`shoul add new user`, () => {
    var users = new Users();
    var user = {
      id: '123',
      name: 'Andrew',
      room: 'The Office Fans'
    }
    var resUser = users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);
  });

  it('should get a user by id', () => {
    var id = '1';
    var user = users.getUser(id);
    expect(user.name).toBe(users.users[0].name);
  });

  it('should return null if it did not find user by id', () => {
    expect(users.getUser('5')).toBe(null);
  });

  it('should get a list of users by room name', () => {
    var room = 'Node Course';
    var list = users.getUserList(room);

    expect(list.length).toBe(2);
    expect(list[1]).toBe(users.users[2].name);
  });

  it('should return an empty list if there is no room', () => {
    expect(users.getUserList('Non existing room').length).toBe(0);
  });

  it('should remove a user by id', () => {
    var id = '2';
    var toBeRemoved = users.users[1];
    var removed = users.removeUser(id);

    expect(removed.name).toBe(toBeRemoved.name);
    expect(users.users.length).toBe(2);
  });

  it('should return null if there is no user to remove', () => {
    expect(users.removeUser('5')).toBe(null);
  });
});