function killer(suspectInfo, dead) {
    for (x in suspectInfo) {
      if (suspectInfo[x].some(y => dead.includes(y)))
        return x;
    }
  }