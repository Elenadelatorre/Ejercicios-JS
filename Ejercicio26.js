const products = [
  { name: 'Funko Dr. Strange', sellCount: 10 },
  { name: 'Mochila de protones: Ghostbusters', sellCount: 302 },
  { name: 'Sable laser FX', sellCount: 23 },
  { name: 'Varita de Voldemort', sellCount: 6 }
];

const goodProducts = [];
const badProducts = [];

for (i = 0; i < products.length; i++) {
  if (products[i].sellCount > 20) {
    goodProducts.push(products[i]);
  } else {
    badProducts.push(products[i]);
  }
}

console.log('Buenos productos:', goodProducts);
console.log('Malos productos:', badProducts);
