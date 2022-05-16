const PRODUCTS = [
  { name: 'Litfolou', price: 18, maxClient: 15 },
  { name: 'Midfolou', price: 39.99, maxClient: 25 },
  { name: 'Upperfolou', price: 59.99, maxClient: 35 },
]

export function getProductByName(name){
  return PRODUCTS.find(product => product.name === name)
}

export default PRODUCTS