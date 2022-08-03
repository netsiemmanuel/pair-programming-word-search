const wordSearch = (letters, word) => { 
    if (word == '' || word == []) {
      return false
    }
  
    // for (character of word) {
    //   if (!isNaN){
    //     return 'does not work'
    //   }
    // }
  
  
  
      const horizontalJoin = letters.map(ls => ls.join(''))
      //let status = false
      for (l of horizontalJoin) {
          if (l.includes(word)) {
            return true
          } 
      }
  
      //put adjusted transpose here 
  
      const transpose = function (arry) {
        // input is array of nested arrays
        let fullArray = [];
        let length = letters.length // [ ], [], []  < -- length of 3  
      //[1, 2, 3, 4, 5, 6, 7]
        for (let i= 0; i < length; i++) {  // loops through the number of arrays in the matrix and creats a blank aray for each. 
          fullArray.push([])
        }
      
        for (items of letters) {  // loops through matrix - each indiv array 
      
          for (let i= 0; i <  length; i++) { //loops through each indiv item(arry) in matrix
            fullArray[i] += [items[i]] //pushes 
          }
        
        }
        //console.log(letters)
        return fullArray;
      };
  
      let verticalJoin = transpose(letters)
  
      for (l of verticalJoin) {
        if (l.includes(word)) {
          return true
        } 
      }
  
  
      
  
      
      return false
      
      
      
  }
  
  
  console.log(wordSearch([
    ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'], // false 
    ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'], //word is here  true  
    ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],// false 
    ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
    ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
    ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
    ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
    ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
    ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
  ], ''))
  
  
  module.exports = wordSearch
  