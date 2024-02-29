// O(n*m) time and O(n*m) space where n is the horizontal distance between the knights and 
// m is the vertical distance between the knights
export function knightConnection(knightA: number[], knightB: number[]) {
  const possibleMoves: number[][] = [[-2, 1], [-1, 2], [1, 2], [2, 1], [2, -1], [1, -2], [-1, -2], [-2, -1]];

  const queue: number[][] = [[knightA[0], knightA[1], 0]]; // [[0, 0, 0], [-2, 1, 1], ...]
  const visited = new Set(knightA.join(',')); // {[0, 0], [-2, 1, 0]}

  while (queue.length) {
    const currPos = queue.shift()!; // [4, 2, 2]
    
    if (currPos[0] === knightB[0] && currPos[1] === knightB[1]) {
      return Math.ceil(currPos[2] / 2);
    }
    
    for (const possibleMove of possibleMoves) {
      const position = [currPos[0] + possibleMove[0], currPos[1] + possibleMove[1]];
      const positionString = position.join(',');
      if (!visited.has(positionString)) {
        position.push(currPos[2] + 1);
        queue.push(position);
        visited.add(positionString);
      }
    }
  }
}
