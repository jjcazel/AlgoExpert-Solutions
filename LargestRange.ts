//O(n) time | O(n) space where n is the number of unique numbers in the input array
export function largestRange(array: number[]): [number, number] {
  const numsSet = new Set(array);
  let minNum = Math.min(...numsSet); // 0
  let maxNum = Math.max(...numsSet);
  let greatestRangeEdges: [number, number] = [minNum, minNum]; // [0, 0]
  let currentRangeEdges: [number, number] = [minNum, minNum]; // [0, 0]
  let greatestRange = 0; // 0

  for (let num = minNum; num <= maxNum; num++) { // num = 1
    if (!numsSet.has(num)) {
      currentRangeEdges[0] = num + 1;
      continue;
    }
    
    currentRangeEdges[1] = num;
    numsSet.delete(num);

    if (currentRangeEdges[1] - currentRangeEdges[0] > greatestRange) {
      greatestRange = currentRangeEdges[1] - currentRangeEdges[0];
      greatestRangeEdges = [...currentRangeEdges];
    }
  }

  return greatestRangeEdges;
}
