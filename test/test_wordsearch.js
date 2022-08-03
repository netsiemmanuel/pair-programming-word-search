const chai = require('chai');
const assert = chai.assert;

const wordSearch = require('../wordsearch.js')

describe("#wordSearch()", function() {
  it("should return false if the word is not present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'Z', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'R', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'A', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'D', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'K', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'FRANK')

    assert.isFalse(result);
  });

  it("should return true if the word is present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'], // false 
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'], //word is here  true  
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],// false 
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'SEINFELD')

    assert.isTrue(result);
  });


  it("should return false is blank input", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'], // false 
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'], //word is here  true  
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],// false 
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], []) // here<----- [] vs '' 

    assert.isFalse(result);
  });


  


  // it("should return does not work if there is a number in input", function() {
  //   const result = wordSearch([
  //     ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'], // false 
  //     ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'], //word is here  true  
  //     ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],// false 
  //     ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
  //     ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
  //     ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
  //     ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
  //     ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
  //     ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
  //   ], 'jeflee') // here<----- [] vs '' 


  //   const assertEqual = function(actual, expected) {
  //     if (actual === expected) {
        
  //       return true
  //     } else {
  //       return false
        
  //     }
  //   };

  //   assertEqual(result, 'does not work')


    
  // });








});

