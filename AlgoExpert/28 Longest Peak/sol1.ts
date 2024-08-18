export function longestPeak(array: number[]) {
  console.log("array", array);
  if (array.length === 0) return 0;
  let streakLength: number = 1;
  let lengths: number[] = [];
  let weHavePeak = false;

  for (let i = 0; i < array.length; i++) {
    let current = array[i];
    let next = array[i + 1];
    const prev = array[i - 1];

    console.log("current: ", current);
    console.log("next: ", next);
    console.log("prev", prev);

    if (next === undefined) {
      console.log("End of array. Closing count");
      if (!weHavePeak) {
        console.log("We had no peak before. Closing as it is");
      } else if (weHavePeak) {
        console.log("We had a peak before");
        if (prev === current) {
          console.log("Closing without extending the count");
          streakLength--;
        } else {
          console.log("Closing extending the count");
        }
        lengths.push(streakLength);
        console.log("streakLength", streakLength);
      } else {
        console.log("Unknown case at the end of the array");
      }
      break;
    }
    if (next > current) {
      console.log("Ascending");
      if (weHavePeak) {
        console.log("We had a peak before, closing the streak");
        weHavePeak = false;
        lengths.push(streakLength);
        streakLength = 2;
      } else {
        console.log("We had no peak before, continuing");
        streakLength++;
      }
    } else if (next < current) {
      console.log("Descending");
      if (weHavePeak) {
        console.log("We had a peak before, continuing");
        streakLength++;
      } else {
        if (streakLength > 1 && current > prev) {
          console.log("We had discovered a peak. Transitioning");
          weHavePeak = true;
          streakLength++;
        }
      }
    } else if (next === current) {
      console.log("Stalling. Reseting count.");
      if (weHavePeak) lengths.push(streakLength);
      streakLength = 1;
    } else {
      console.log("Unknown case in the middle of the array");
      break;
    }
    console.log("streakLength", streakLength);
    console.log("lengths", lengths);

    console.log("----");
  }

  console.log("Lengths: ", lengths);
  const maxStreak = lengths.length > 0 ? Math.max(...lengths) : 0;
  console.log("maxStreak: ", maxStreak);
  return maxStreak;
}

export default longestPeak;
