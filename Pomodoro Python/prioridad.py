# pedir prioridad
prioridad = 0
while prioridad < 1 or prioridad > 5:
    prioridad = int(input("Ingresa la prioridad de la tarea: donde" +
                          "\n1 es prioridad Alta y 5 prioridad muy baja\n"))
    if prioridad <= 5 and prioridad >= 1:
        print("prioridad agignada correctamente")
    else:
        print("Error la prioridad debe ir de 1 a 5 ")
