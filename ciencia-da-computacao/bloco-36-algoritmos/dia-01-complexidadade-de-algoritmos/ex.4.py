# O(log n)
def kids_with_candies(candies, extra_candies):
  max_candies = max(candies)
  return [candy + extra_candies >= max_candies for candy in candies]

print(kids_with_candies([2, 3, 5, 1, 3], 3))