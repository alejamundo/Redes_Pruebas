def relog(timer):
    #ponemos el reloj en marcha
    if (timer>0 and timer<61):
    #empieza a correr conteo de forma desendente
        while (timer>=0):
            #inicia conteo
            print(str(timer) + " minutos")#conteo minutos
            timer=timer -1;  
    else:
        print("tiempo incorrecto")
        
print("¿Deseas configurar el relog? (Responde con número)\n1) SI\n2) NO")
try:
    opc=int(input())
    if(opc==1):#Cambiar timer  
    #evaluamos que el tiempo sea correcto
        timer=int(input("Ingrese el Tiempo en minutos: "))   
        relog(timer)        
    elif(opc==2):#Opción no valida
        #tiempo por defecto
        timer=int(25)
        print("Tiempo por defecto 25 minutos")
        relog(timer)
    else:{
        print("Opción no valida elija (1 ó 2) ")
    }
except:
    print("Error: No ingrese Caracteres")





