const products = [
  'Camiseta de Pokemon',
  'Pantalón coquinero',
  'Gorra de gansta',
  'Camiseta de Basket',
  'Cinrurón de Orión',
  'AC/DC Camiseta'
];

let newArray = [];
for (i = 0; i < products.length; i++) {
  if (products[i].includes('Camiseta')) {
    newArray.push(products[i]);
  }
}

console.log(newArray);
