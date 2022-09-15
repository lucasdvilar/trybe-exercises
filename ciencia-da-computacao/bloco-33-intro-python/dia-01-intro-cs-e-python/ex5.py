import math

def tinta(area):
  cobertura = area / 3
  latas = math.ceil(cobertura / 18)
  preco = latas * 80
  return (latas, preco)

print(tinta(5))