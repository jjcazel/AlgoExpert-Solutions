//O(n) time and O(n) space where n is the length of the input string
export function longestSubstringWithoutDuplication(string: string) {
  const numbersSeen: {[key: string]: number} = {}; 
  // {"c": 0, "l": 1, "e": 4, "m": 3, "n": 5, "t": 6, "i": 7, "s": 8, "a": 9}
  let startIdx = 0; // startIdx = 3
  let maxSubStrIdxs = [0, 1]; // [3, 9]
  
  for (let endIdx = 0; endIdx < string.length; endIdx++) { // endIdx = 10
    const currChar = string[endIdx]; // a
    if (currChar in numbersSeen) {
      startIdx = Math.max(numbersSeen[currChar] + 1, startIdx);
    }
    if (endIdx + 1 - startIdx > maxSubStrIdxs[1] - maxSubStrIdxs[0]) {
      maxSubStrIdxs = [startIdx, endIdx + 1];
    }

    numbersSeen[currChar] = endIdx;
  }

  const [start, end] = maxSubStrIdxs;
  return string.slice(start, end);
}
