/*Given a 2D matrix matrix of integers, implement a function zigzagTraverse(matrix) to perform a zigzag traversal. In zigzag traversal, you should visit the elements of the matrix in a zigzag pattern, 
starting by moving down, then alternating between moving up and down at each column. 
The result should be a 1D array containing the values of the elements in the order they were visited.*/

//O(n) time | O(n) space where n is the number of elements in the matrix
export function zigzagTraverse(array: number[][]) {
  const height = array.length - 1;
  const width = array[0].length - 1;
  const zigzagOrder: number[] = []; // [1, 2,3]
  let row = 0; // 1
  let col = 0; // 0
  let movingDown = true; // true
  
  while (row <= height && col <= width) {
    zigzagOrder.push(array[row][col]); // 3
    if (movingDown) {
      if (col === 0 || row === height) {
        movingDown = false;
        if (row === height) {
          col++;
        } else {
          row++;
        }
      } else {
        row++;
        col--;
      }
    } else {
      if (row === 0 || col === width) {
        movingDown = true;
        if (col === width) {
          row++;
        } else {
          col++;
        } 
      } else {
        row--;
        col++;
      }
    }
  }
  
  return zigzagOrder;
}
