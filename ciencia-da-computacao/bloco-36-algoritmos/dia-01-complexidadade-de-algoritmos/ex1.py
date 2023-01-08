# 0(n log n)
def contains_duplicate(numbers):
  numbers.sort() # O(n log n) pela doc
  print(numbers)
  previous_number = 'not a number';
  for number in numbers: # O(n)
      if (previous_number == number): return True
      previous_number = number

  return False

print(contains_duplicate([1, 4, 3, 4, 2]))