export class User {
  name: string
  email: string
  active: boolean
  address: Address

  constructor(name: string, email: string, address: Address, active: boolean = false) {
    this.name = name,
    this.email = email,
    this.address = address,
    this.active = active
  }

};

export class Address {
  constructor(
    public address: string,
    public zipcode: string,
    public number?: number
  ){}
};


const address1 = new Address('Avenida Brasil', '78258-000', 25);

const user1 = new User('Ana', 'ana@email.com', address1);
console.log(user1);

