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
  
 var prefix1 = cardNumber.slice(0, 1);
 var prefix2 = cardNumber.slice(0, 2);
 var prefix3 = cardNumber.slice(0, 3);
 var prefix4 = cardNumber.slice(0, 4);
 var length = cardNumber.length;
 
  switch (true) {
  //Diner's Club
  case (prefix2 === '38' || prefix2 === '39'):
    if (length === 14) {
      return "Diner\'s Club";
    }
    break;
  //American Express
  case (prefix2 === '34' || prefix2 === '37'):
    if(length === 15) {
      return "American Express";
    }
    break;
  // MasterCard
  case (Number(prefix2) >= 51 && Number(prefix2) <= 55):
    if (length === 16) {
      return "MasterCard";
    }
    break;
  //Visa
  case(prefix1 === '4'):
     if (length === 13 || length === 16 || length === 19) {
       return "Visa";
     }
     break;
  //Discover
  case (prefix4 === '6011' || Number(prefix3) >= 644 && Number(prefix3) <= 649 || prefix2 === '65'):
     if (length === 16 || length === 19) {
       return "Discover";
     }
     break;
    
  //Maestro
  case (prefix4 === '5018' || prefix4 === '5020' || prefix4 === '5038' || prefix4 === '6304'):
    if (length >= 12 && length <= 19) {
      return "Maestro";
    } 
 }
}; 



