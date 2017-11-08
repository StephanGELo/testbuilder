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
  
 var prefix = cardNumber.slice(0, 2);
 var length = cardNumber.length;
 
 switch (true) {
  case (prefix === '38' || prefix === '39'):
  case (length === 14):
    return "Diner\'s Club";
 
  case (prefix === '34' || prefix === '37'):
  case (length === 15):
    return "American Express";
  
  case (Number(prefix) >= 51 && prefix <= 55):
    if (length === 16) {
      return "MasterCard";
    }
    break;
  case(prefix[0] === '4'):
     if (length === 13 || length === 16 || length === 19) {
       return "Visa";
     }
 }
};


