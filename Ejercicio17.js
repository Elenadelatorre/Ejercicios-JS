const alien = {
  name: 'Wormuck',
  race: 'Cucusumusu',
  planet: 'Eden',
  weight: '259kg'
};

for (date in alien) {
  console.log(`${date}: ${alien[date]}`);
}
