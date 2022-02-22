function minMax(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }
  
  function res(letter, start, end, len = 5){
   let number = new Set();
   while(number.size < len){
   number.add(letter + minMax(start, end));
   } 
  return Array.from(number)
  }

  function getCard() {
      card = []
     return card.concat(res("B", 1, 15), res("I", 16, 30), res("N", 31, 45, 4), res("G", 46, 60), res("O", 61, 75))
  }