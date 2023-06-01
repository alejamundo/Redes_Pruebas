#pedir una tarea 
tam_tarea=0
while tam_tarea<5 or tam_tarea>50:
    tarea=input("Ingresa el nombre de la tarea: ")
    tam_tarea=len(tarea)
    if tam_tarea<=50 and tam_tarea>=5:
        print("Tarea agregada correctamente") 
        
    else:
        print("Error La tarea debe contener entre 5 y 50 caracteres")
