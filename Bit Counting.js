var countBits = function(n) {
    byte = n.toString(2)
    count = 0
    for (i in byte) {
        if (byte[i] === '1') {
            count++
        }
    }
    return count
}