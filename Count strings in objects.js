function strCount(obj){
    let res = 0;
    for (key in obj) {
      if (typeof obj[key] == 'string') res++;
      if (typeof obj[key] == 'object') res += strCount(obj[key]);
    }
    return res;
  }