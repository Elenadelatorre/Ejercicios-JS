const placesToTravel = [
  { id: 5, name: 'Japan' },
  { id: 11, name: 'Venecia' },
  { id: 23, name: 'Murcia' },
  { id: 40, name: 'Santander' },
  { id: 44, name: 'Filipinas' },
  { id: 59, name: 'Madagascar' }
];
let idsExclude = [11, 23];

let newArray = [];
for (i = 0; i < placesToTravel.length; i++) {
  if (!idsExclude.includes(placesToTravel[i].id)) {
    newArray.push(placesToTravel[i]);
  }
}
console.log(newArray);
