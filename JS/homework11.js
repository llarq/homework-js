const bankAccount = {
	ownerName: "Alex",
	accountNumber: 1,
  balance: 3000,
  deposit(addBalance) {
    this.balance += addBalance
    return `Price added to ${this.balance}`
  },
  withdraw(minBalance) {
    this.balance -= minBalance
    return `Price minus to ${this.balance}`
  }
}


bankAccount.deposit(5000)
bankAccount.withdraw(2000)


// console.log(bankAccount);

// const temperature = prompt("Введіть температуру")

// const weather = {
//   temperature,
//   humidity: 40,
//   windSpeed: 200,
//   isTemperatureZero() {
//     if (this.temperature < 0) {
//       return true
//     }
//     else {
//       return false
//     }
//   },
//   temperatureZeroMessage() {
//     if (this.temperature < 0) {
//       return "температура нижче 0 градусів Цельсія"
//     }
//   }
// }

// console.log(weather);
// console.log(weather.isTemperatureZero());
// console.log(weather.temperatureZeroMessage())


const user = {
	name: "Vova",
	email: "123321@gmail.com",
  password: 123321,
  login(email, password) {
    if (email === this.email && password === this.password) {
      return true
    }
    else {
      return false
    }
  }
}

console.log(user.login('123321@gmail.com', 123321))


const movie = {
	title: "random",
	director: "alex",
  year: "2019",
  rating: 4,
  isRatingGood() {
    if (this.rating > 8) {
      return true
    }
    else {
      return false
    }
  }
}


// console.log(movie);
// console.log(movie.isRatingGood())