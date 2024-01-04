// O(n) time | O(1) space where n is the length of the array
type Range = [number, number];

export function subarraySort(array: number[]): Range {
  let firstUnsortedIdx = -1; // 6
  let lastUnsortedIdx = -1; // 9

  for (let i = 0; i < array.length - 1; i++) { // 5
    if (array[i] > array[i + 1]) {
      firstUnsortedIdx = i;
      break;
    }
  }
  
  if (firstUnsortedIdx === -1) {
    return [-1, -1];
  }

  for (let j = array.length - 1; j >= 0; j--) { //j = 9
    if (array[j] < array[firstUnsortedIdx]) {
      lastUnsortedIdx = j;
      break;
    }
  }

  // const unsortedPortion = array.slice(firstUnsortedIdx, lastUnsortedIdx + 1);
  let minNumInUnsorted = Math.min(array[firstUnsortedIdx], array[lastUnsortedIdx]); // 6
  let maxNumInUnsorted = Math.max(array[firstUnsortedIdx], array[lastUnsortedIdx]); // 12

  for (let i = firstUnsortedIdx + 1; i < lastUnsortedIdx; i++) {
    minNumInUnsorted = Math.min(minNumInUnsorted, array[i]);
    maxNumInUnsorted = Math.max(maxNumInUnsorted, array[i]);
  }
  
  while (firstUnsortedIdx > 0 && array[firstUnsortedIdx - 1] > minNumInUnsorted) {
    firstUnsortedIdx--;
  }

  while (lastUnsortedIdx < array.length - 1 && array[lastUnsortedIdx + 1] < maxNumInUnsorted) {
    lastUnsortedIdx++;
  }
  
  return [firstUnsortedIdx, lastUnsortedIdx];
}
