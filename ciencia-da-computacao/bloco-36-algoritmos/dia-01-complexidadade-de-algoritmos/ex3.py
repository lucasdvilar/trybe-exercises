import random

# O(n)
def randomAverages(n):
  list_of_averages = []

  for _ in range(100): # O(1)
      average = 0
      for _ in range(n): # O(n)
          average += random.randrange(1, n)
      average = average/n
      list_of_averages.append(average)

  return list_of_averages

print(randomAverages(10))