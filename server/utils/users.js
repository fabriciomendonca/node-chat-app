class Users {
  constructor () {
    this.users = [];
  }

  addUser (id, name, room) {
    var user = {id, name, room};
    this.users.push(user);

    return user;
  }

  getUser (id) {
    return this.users.find(user => user.id === id) || null;
  }

  removeUser (id) {
    var user = this.getUser(id) || null;

    if (user) {
      this.users = [
        ...this.users.slice(0, this.users.indexOf(user)),
        ...this.users.slice(this.users.indexOf(user) + 1)
      ];
    }

    return user;
  }

  getUserList (room) {
    return this.users
      .filter(user => user.room === room)
      .map(user => user.name);
  }
}

module.exports = {Users};
