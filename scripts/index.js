const initialCards = [
  [
    'Vale de Yosemite',
    'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg',
  ],
  [
    'Lago Louise',
    'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg',
  ],
  [
    'Montanhas Carecas',
    'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg',
  ],
  [
    'Latemar',
    'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg',
  ],
  [
    'Parque Nacional de Vanoise',
    'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg',
  ],
  [
    'Lago di Braies',
    'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago-di-braies.jpg',
  ],
];

initialCards.forEach((card, name) => {
  console.log(`Name ${name}: ${card[0]} - ${card[1]}`);
});
