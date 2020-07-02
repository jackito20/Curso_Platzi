#1.- Comenzar a hacer comparaciones de elementos adyacentes
#2.- Repetir hasta tener una pasada completa sin ningun swap
from datetime import datetime

def bubbleSort(array):
	n = len(array)

	for i in range(n):
		#print(array)
        
		for j in range(0, n-i-1):
			if array[j] > array[j+1] :
				array[j], array[j+1] = array[j+1], array[j]
				


array = [190, 1200, 1, 2, 4, 55, 1000, 6, 800]

tiempoInicial = datetime.now()
bubbleSort(array)

print ("El arreglo ordenado de forma Ascendete es:")
for i in range(len(array)):
	print("%d"%array[i]),
	
print (datetime.now() - tiempoInicial),