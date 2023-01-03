class Address {
  constructor(
    public address: string,
    public readonly zipcode: string,
    public number?: number
  ){}
};


const address1 = new Address('Avenida Mato Grosso', '78878-000', 356);
console.log(address1.zipcode)
address1.zipcode = '85477-895'; //dará erro pois o atributo é somente de leitura
console.log(address1.zipcode) 
