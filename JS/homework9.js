const logItems = function(arr) {
  for (let i = 0; i < arr.length; i += 1) {
     console.log(`${(i + 1)} - ${arr[i]}`)
  }
}

logItems('Mango', 'Poly', 'Ajax')


const calculateEngravingPrice = function (message, pricePerWord) {
  messageSplit = message.split(' ')
  price = messageSplit.length * pricePerWord
  return price
}
console.log(calculateEngravingPrice('Hello', 5))

