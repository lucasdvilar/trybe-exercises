class TV:
  def __init__(self, tam):
    self.__volume = 50
    self.__canal = 1
    self.__tamanho = tam
    self.__ligada = False

  def aumentar_volume(self):
    if self.__volume < 99:
      self.__volume += 1

  def diminuir_volume(self):
    if self.__volume > 0:
      self.__volume -= 1

  def modificar_canal(self, canal):
    if canal < 1 or canal > 99:
      raise ValueError("Fora do range")
    self.__canal = canal

  def ligar_desligar(self):
    self.__ligada = not self.__ligada

  @property
  def volume(self):
    return self.__volume

tv29 = TV(29)
tv29.aumentar_volume()
print(tv29.volume)