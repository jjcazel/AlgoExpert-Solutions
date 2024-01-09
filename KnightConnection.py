''' You are given the positions of two knights on an infinite chessboard. Knights move in an "L" shape — two squares in any direction vertically followed by one square horizontally or two squares in any direction horizontally followed by one square vertically. Knights can move in any direction on the board without any boundary constraints.

Write a function knightConnection(knightA, knightB) that takes two lists representing the coordinates of two knights, knightA and knightB, and returns the minimum number of moves needed for one knight to capture the other.

'''

from collections import deque
import math

#O(n*m) time and O(n) space
def knightConnection(knightA, knightB):
    possible_moves = [[-2, 1], [-1, 2], [1, 2], [2, 1], [2, -1], [1, -2], [-1, -2], [-2, -1]]
    
    queue = deque([(knightA[0], knightA[1], 0)])
    visited = {position_to_string(knightA)}

    while True:
        current_pos = queue.popleft()
        if current_pos[0] == knightB[0] and current_pos[1] == knightB[1]:
            return math.ceil(current_pos[2] / 2)

        for possible_move in possible_moves:
            position = [current_pos[0] + possible_move[0], current_pos[1] + possible_move[1]]
            position_string = position_to_string(position)
            if position_string not in visited:
                position.append(current_pos[2] + 1)
                queue.append(position)
                visited.add(position_string)

def position_to_string(position):
    return ",".join(map(str, position))
