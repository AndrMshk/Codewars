function fakeBin(x){
    y = ''
    for (let i in x) {
        if (x[i] < 5) {
            y = y + 0
        } else if ( x[i] >= 5) {
            y = y + 1
        }
    }
  return y
}