def conta_pares(n):
  qtd = 0
  for num in range(n + 1):
    if num % 2 == 0 and num != 0:
      qtd += 1
  return qtd

print(conta_pares(10))
  