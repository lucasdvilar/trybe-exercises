# O(1)
def battleship(line, column):
  grid = [[0, 0, 0, 0, 1], [0, 0, 0, 1, 0]]
  return grid[line][column] == 1

print(battleship(1, 1))