def soma_recursiva(num):
  if num == 1:
    return 1
  else:
    return num + soma_recursiva(num - 1)

print(soma_recursiva(4))