// const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];
// let string = '';
// for (let i = 0; i < friends.length; i += 1) {
//   string += friends[i];
// }
// console.log(string)
// console.log(friends.join(''));


const cards = [
	'Карточка-1',
	'Карточка-2',
	'Карточка-3',
	'Карточка-4',
	'Карточка-5',
]
const cardToRemove = 'Карточка-3';
const index = cards.splice(cards.indexOf(cardToRemove), 1)
console.log(cards);

const cardToInsert = "Карточка-6";
const index1 = cards.splice(cards.length, 0,  cardToInsert)
console.log(cards);

const cardToUpdate = 'Карточка-4';
const index2 = cards.splice(cards.indexOf(cardToUpdate), 0)
console.log(cards);


