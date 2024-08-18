export function longestPeak(array: number[]) {
  let leftLen,
    rigthLen,
    length,
    maxLen = 0;
  for (let i = 1; i < array.length - 1; i++) {
    if (array[i - 1] < array[i] && array[i] > array[i + 1]) {
      leftLen = rigthLen = 1;
      let j;
      for (j = i - 1; j > 0; j--) {
        if (array[j] <= array[j - 1]) break;
        leftLen++;
      }
      for (j = i + 1; j < array.length - 1; j++) {
        if (array[j] <= array[j + 1]) break;
        rigthLen++;
      }
      length = leftLen + 1 + rigthLen;
      if (maxLen < length) maxLen = length;
    }
  }
  return maxLen;
}

export default longestPeak;
