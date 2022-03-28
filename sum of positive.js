function positiveSum(arr) {
    var res = 0;
    for (i in arr) {
      if (arr[i] > 0) {
       res += arr[i];
     }
    }
   return res;
   }
