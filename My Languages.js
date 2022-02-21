function myLanguages(results) {
    return Object.keys(results).filter(acc => results[acc] >= 60).sort((a, b) => results[b] - results[a])
  }s