let drink = 'Чай';
switch (drink) {
  case 'Кава':
    console.log('Кава вибрана');
    break;
  case 'Чай':
    console.log('Чай вибраний');
    break;
  case 'Сік':
    console.log('Сік вибраний');
    break;
  default:
    console.log('drink is unknown');
}

let day = 'Monday';
switch (day) {
  case 'Monday':
  case 'Tuesday':
  case 'Wednesday':
  case 'Thursday':
  case 'Friday':
    console.log('Це робочий день');
    break;
  case 'Saturday':
  case 'Sunday':
    console.log('Це вихідний день');
    break;
  default:
    console.log('Invalid answer');
}

let month = 5;
switch (month) {
  case 12:
  case 1:
  case 2:
    console.log('It`s winter');
    break;
  case 3:
  case 4:
  case 5:
    console.log('It`s spring');
    break;
  case 6:
  case 7:
  case 8:
    console.log('It`s summer');
    break;
  case 9:
  case 10:
  case 11:
    console.log('It`s autumn');
    break;
  default:
    console.log('Invalid month');
}

let color = 'Red';
switch (color) {
  case 'Red':
    console.log('стоп');
    break;
  case 'Yellow':
    console.log('чекати');
    break;
  case 'Green':
    console.log('йти');
    break;
  default:
    console.log('Invalid color');
}

const mathematicalOperator = prompt('Enter mathematical operator')
const num1 = prompt('Enter your first number');
const num2 = prompt('Enter your second number');
let result;

switch (mathematicalOperator) {
  case '+':
    result = Number(num1) + Number(num2)
    break;
  case '-':
    result = Number(num1) - Number(num2)
    break;
  case '*':
    result = Number(num1) * Number(num2)
    break;
  case '/':
    if (Number(num1) === 0 || Number(num2) === 0) {
      console.log('Error, division into zero is impossible')
    } else {
      result = Number(num1) / Number(num2)
    }
    break;
	default:
		console.log('Invalid value')
}
console.log(result);

