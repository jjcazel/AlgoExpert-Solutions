# O(log(n)) time (average), O(n) (worst) | O(n) space where n is the number of nodes in the BST
def findClosestValueInBst(tree, target):
    min_distance = float("inf") 
    closest_val = tree.value

    while tree is not None: 
        curr_distance = abs(tree.value - target) 
        if tree.value == target:
            return tree.value
        elif curr_distance < min_distance:
            min_distance = curr_distance
            closest_val = tree.value
        if tree.value > target:
            tree = tree.left
        else:
            tree = tree.right

    return closest_val

# This is the class of the input tree. Do not edit.
class BST:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None
