class User {
  name: string
  email: string
  active: boolean

  constructor(name: string, email: string, active: boolean = false) {
    this.name = name,
    this.email = email,
    this.active = active
  }

};

const user = new User('Maria', 'maria@email.com');
console.log(user);
const user2 = new User('joão', 'joao@email.com', true);
console.log(user2);
