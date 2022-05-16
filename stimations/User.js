import { faker } from '@faker-js/faker';
import PRODUCTS from './Products.js';
export default class User {
  constructor() {
    this.gender = faker.name.gender(true);
    this.name = faker.name.findName(undefined, undefined, this.gender);
    this.countOfClients = faker.mersenne.rand(1, 35);
    this.age = faker.mersenne.rand(18, 60); // edades limites que pueden llegar a utilizar folouit
    this.probabilityOfHiring = this.getProbabilityOfHiring() // que proabilidades existen de que se vuelva un usuario de pago
  }

  getProbabilityOfHiring() {
    return (randomNumber(1, randomNumber(1, 9))*0.1)//+ (this.getAgeModifiers()*0.1) + (this.getModifiersByClients()*0.1)
  }

  get goingToHire() {
    return faker.helpers.maybe(() => true, { probability: this.probabilityOfHiring }) ?? false
  }

  get whenGoingToHire() {
    return faker.mersenne.rand(0, maxTimeItWillTakeToContract)
  }

  get whoWillHire() {
    return faker.helpers.arrayElement( PRODUCTS.filter(product => product.maxClient >= this.countOfClients) )
  }

  getAgeModifiers() {
    if (this.age < 45) return 0
    if (this.age < 25) return 5
    if (this.age > 25) return 2
  }

  getModifiersByClients() {
    if (this.countOfClients < 5) return 0
    if (this.countOfClients > 5) return 0.02
    if (this.countOfClients > 10) return 0.05
  }

}

function randomNumber(min, max) { 
  return Math.random() * (max - min) + min;
} 