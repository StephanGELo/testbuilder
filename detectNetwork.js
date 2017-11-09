// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)
var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.
  
 var length = cardNumber.length;
 
  switch (true) {
  //China UnionPay
  case (
          getRange(622126, 622925).includes(Number(getPrefix(cardNumber, 0, 6))) ||
          getRange(6282, 6288).includes(Number(getPrefix(cardNumber, 0, 4))) ||
          getRange(624, 626).includes(Number(getPrefix(cardNumber, 0, 3)))
        ):
          if(getRange(16, 19).includes(length)) {
            return "China UnionPay";
          }
          break;
  //Switch
  case (
          getPrefix(cardNumber, 0, 6) === '564182' || 
          getPrefix(cardNumber, 0, 6) === '633110' ||
          getPrefix(cardNumber, 0, 4) === '6333' ||
          getPrefix(cardNumber, 0, 4) === '6759' ||
          getPrefix(cardNumber, 0, 4) === '4903' ||
          getPrefix(cardNumber, 0, 4) === '4905' ||
          getPrefix(cardNumber, 0, 4) === '4911' ||
          getPrefix(cardNumber, 0, 4) === '4936' 
        ):
          if(length === 16 || length === 18 || length === 19) {
            return "Switch";
          }
          break;
  //Discover
  case (
          getPrefix(cardNumber, 0, 4) === '6011' || 
          getRange(644, 649).includes(Number(getPrefix(cardNumber, 0, 3))) || 
          getPrefix(cardNumber, 0, 2) === '65'
        ):
          if (length === 16 || length === 19) {
            return "Discover";
          }
          break;
  //Maestro
  case (
          getPrefix(cardNumber, 0, 4) === '5018' || 
          getPrefix(cardNumber, 0, 4) === '5020' || 
          getPrefix(cardNumber, 0, 4) === '5038' || 
          getPrefix(cardNumber, 0, 4) === '6304'
        ):
          if (getRange(12, 19).includes(length)) {
            return "Maestro";
          } 
          break;
  // MasterCard
  case (
          getRange(51, 55).includes(Number(getPrefix(cardNumber, 0, 2)))
        ):
          if (length === 16) {
            return "MasterCard";
          }
          break;
  // //Diner's Club
  case (
          getPrefix(cardNumber, 0, 2) === '38' || 
          getPrefix(cardNumber, 0, 2) === '39'
        ):
          if (length === 14) {
            return "Diner\'s Club";
          }
          break;
  //American Express
  case (
          getPrefix(cardNumber, 0, 2) === '34' || 
          getPrefix(cardNumber, 0, 2) === '37'
        ):
          if(length === 15) {
            return "American Express";
          }
          break;
  //Visa
  case (
          getPrefix(cardNumber, 0, 1) === '4'
        ):
          if (length === 13 || length === 16 || length === 19) {
            return "Visa";
          }
 }
}; 

function getRange(start, end) {
  var indices = Array.from(Array(end + 1 - start).keys()); // create an array of indices from low to high value
  return indices.map(function(range, index) {
    return range += start;
  }, []);
}

function getPrefix(number, start, end) {
  return number.slice(start, end); 
}



