// Business Logic
function coin(value){
  return function(money){
    return Math.floor (money / value);
  }
}

function remains(value){
  return function (money){
    return money % value;
  }
}

const usaCoins = [
  [.25, 'quarter'],
  [.1, 'dime'],
  [.05, 'nickel'],
  [.01,'penny']
];

function MoneyFunction(counter){
  return function (currency){
    return function (money){
      if (isNaN(money)){
        return "Not valid money";
      }
      if (money < 0){
        return "Thank you, goodbye";
      } else {
        console.log(currency[counter][1] + "s: " + coin(currency[counter][0])(money));
      }
    }
  }
}

MoneyFunction(0)(usaCoins)(10.72);

const countMoney = MoneyFunction(0);
const usaChange = countMoney(usaCoins);

module.exports = {coin, remains, usaCoins, MoneyFunction, countMoney, usaChange};
