export class User {
  protected name: string // public|protected|private
  protected email: string
  protected address: Address[] = []
  protected active: boolean = false

  constructor(name: string, email: string, active: boolean = false) {
    this.name = name
    this.email = email
    this.active = active

    // this.validation()
  }

  public addAddress(newAddress: Address): void {
    this.address.push(newAddress)
  }

  public changeName(newName: string): void {
    if (newName.length < 3) {
      throw new Error('invalid name')
    }
    
    this.name = newName
  }

  public getName(): string {
    return this.name
  }

}


class Manager extends User{ // Manager é uma classe-filha de User

  public getName(): string {
    return `Manager: ${this.name}`;
  }

}

class Admin extends User{
  public getName(): string {
    return `Admin - ${this.name}`;
  }
}

const manager1 = new Manager('Manager1', 'manager1@email.com', true);
console.log(manager1.getName());
