function maxTriSum(numbers){
    const x = [...new Set(numbers.sort((a, b) => b - a))]
    return x[0]+x[1]+x[2]
  }