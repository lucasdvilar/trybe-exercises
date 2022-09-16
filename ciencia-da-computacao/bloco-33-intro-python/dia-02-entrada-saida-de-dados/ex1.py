nome = input('Digite o nome: ')

for qtd_de_letras_tiradas in range(len(nome)):
  for i in range(len(nome) - qtd_de_letras_tiradas):
    print(nome[i], end="")
  print()