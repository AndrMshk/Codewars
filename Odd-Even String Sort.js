function sortMyString(S) {
    x = ''
    y = ''
    for (let i in S) {
      i % 2 ===0 ? x += S[i] : y += S[i]
    }
      return x + ' ' + y;
  }