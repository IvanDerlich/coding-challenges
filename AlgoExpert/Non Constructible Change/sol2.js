function nonConstructibleChange(coins) {
    let change = 0;
      coins.sort((a,b) => a-b)
      for(let i = 0;
          change + 2 > coins[i];
          i++)
      change += coins[i]	
      return change + 1
  }