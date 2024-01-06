/* "Imagine you're a teacher, and you're going to reward your students based on their performance in a set of exams. The students are arranged in a line, and you want to give each student at least one reward. However, 
there are certain rules for rewarding:

- A student must receive more rewards than their adjacent students (to the left or right) if their performance is better.
- All students must receive at least one reward.
Write a function minRewards(scores: number[]): number that takes an array of exam scores, where each score represents a student's performance. The function should calculate and return the minimum number of 
rewards needed to satisfy the given rules while ensuring every student receives at least one reward.

For example, given the array, scores = [8, 4, 2, 1, 3, 6, 7, 9, 5] you would calculate the following rewards [4, 3, 2, 1, 2, 3, 4, 5, 1] and return 25 total rewards, your function should return the minimum number of rewards needed to 
distribute rewards fairly, following the specified rules. Feel free to implement any additional helper functions you may need."*/

// O(n) time | O(n) space where n is the number of scores
export function minRewards(scores: number[]) {
  let rewardCounts: number[] = new Array(scores.length).fill(1); // [1, 1]

  for (let i = 1; i < scores.length; i++) {
    if (scores[i] > scores[i - 1]) {
      rewardCounts[i] = rewardCounts[i - 1] + 1;
    }
  }

  for (let j = scores.length - 1; j >= 0; j--) {
    if (scores[j] > scores[j + 1]) {
      rewardCounts[j] = Math.max(rewardCounts[j], rewardCounts[j + 1] + 1);
    }
  }
  
  return rewardCounts.reduce((a, b) => a + b);
}
