export function longestPeak(array: number[]) {
  if (array.length === 0) return 0;
  let streakLength: number = 1;
  let lengths: number[] = [];
  let weHavePeak = false;

  for (let i = 0; i < array.length; i++) {
    let current = array[i];
    let next = array[i + 1];
    const prev = array[i - 1];

    if (next === undefined) {
      if (weHavePeak) {
        if (prev === current) {
          streakLength--;
        }
        lengths.push(streakLength);
      }
      break;
    }
    if (next > current) {
      if (weHavePeak) {
        weHavePeak = false;
        lengths.push(streakLength);
        streakLength = 2;
      } else {
        streakLength++;
      }
    } else if (next < current) {
      if (weHavePeak) {
        streakLength++;
      } else {
        if (streakLength > 1 && current > prev) {
          weHavePeak = true;
          streakLength++;
        }
      }
    } else if (next === current) {
      if (weHavePeak) lengths.push(streakLength);
      streakLength = 1;
    }
  }

  const maxStreak = lengths.length > 0 ? Math.max(...lengths) : 0;
  return maxStreak;
}

export default longestPeak;
