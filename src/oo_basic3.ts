class Address {
  constructor(
    public address: string,
    public zipcode: string,
    public number?: number
  ){}
};

export class User {
  name: string
  email: string
  address: Address[] = []
  active: boolean

  constructor(name: string, email: string, address: Address, active: boolean = false) {
    this.name = name,
    this.email = email,
    this.address.push(address),
    this.active = active
  }

  addAddress(newAddress: Address): void {
    this.address.push(newAddress)
  };

  getAddress(): Address[] {
    return this.address;
  }

};


const address2 = new Address('Avenida Brasil', '78258-000', 25);
const user2 = new User('Ana', 'ana@email.com', address2);
console.log(user2);
user2.addAddress(address2);
console.log(user2);

