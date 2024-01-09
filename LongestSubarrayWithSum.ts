/* You are given an array of integers and a target sum. Your task is to find the indices of the start and end of the longest subarray within the given array such that the sum of the subarray is equal to the target sum.
If a valid solution exists, return the start and end indices (inclusive) of the longest subarray. If no valid solution is found, return an empty list.*/

// O(n) time | O(1) space
export function longestSubarrayWithSum(array: number[], targetSum: number) {
  let maxSubarrayIdxs: number[] = []; // [4, 8]
  let currSum = 0; // 9
  let startIdx = 0; // 5
  
  for (let endIdx = 0; endIdx < array.length; endIdx++) { // endIdx = 9
    currSum += array[endIdx];
    while (currSum > targetSum && startIdx < endIdx) { // target = 10
      currSum -= array[startIdx];
      startIdx++;
    }
    if (currSum === targetSum) {
      if (maxSubarrayIdxs.length === 0 || maxSubarrayIdxs[1] - maxSubarrayIdxs[0] < endIdx - startIdx) {
        maxSubarrayIdxs = [startIdx, endIdx];
      }
    }
  }
  
  return maxSubarrayIdxs;
}
