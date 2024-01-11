'''Prompt: You are given a list of Cartesian coordinates representing points in a 2D plane. Your task is to determine how many squares can be 
formed using these points. A square is defined as a quadrilateral with all sides of equal length and all interior angles measuring 90 degrees. '''

# O(n^2) time and O(n) space n is the number of points in the input array
def countSquares(points):
    points_set = set()
    for point in points:
        points_set.add(point_to_string(point))

    count = 0
    for point_a in points:
        for point_b in points:
            if point_a == point_b:
                continue

            midpoint = [(point_a[0] + point_b[0]) / 2, (point_a[1] + point_b[1]) / 2] # [0.5, 0.5]
            x_dist_from_mid = point_a[0] - midpoint[0] # 0.5
            y_dist_from_mid = point_a[1] - midpoint[1] # 0.5

            point_c = [midpoint[0] + y_dist_from_mid, midpoint[1] - x_dist_from_mid] # [1, 0]
            point_d = [midpoint[0] - y_dist_from_mid, midpoint[1] + x_dist_from_mid] # [0, 1]

            if point_to_string(point_c) in points_set and point_to_string(point_d) in points_set:
                count += 1
    
    return count / 4

def point_to_string(point):
    if point[0] % 1 == 0 and point[1] % 1 == 0:
        point = [int(coordinate) for coordinate in point]
    return ",".join([str(coordinate) for coordinate in point])
