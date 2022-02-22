function vowelOne(s){
    res = ''
    for (let i in s) {
        if (s[i] === 'a' || 
            s[i] === 'e' || 
            s[i] === 'u' || 
            s[i] === 'i' || 
            s[i] === 'o' ||
            s[i] === 'A' || 
            s[i] === 'E' || 
            s[i] === 'U' || 
            s[i] === 'I' || 
            s[i] === 'O') {
                res += 1
            } else {
                res += 0
            }
    } return res
  }