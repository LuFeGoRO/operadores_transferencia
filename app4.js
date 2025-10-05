// Ejercicio 4: Estadísticas de calificaciones
// Un aprendiz obtuvo las siguientes 4 notas: 4.5, 3.8, 2.9 y 4.0.
// Se debe calcular:
// • La suma de las 4 notas.
// • El promedio.
// • El resultado de la siguiente operación:
// (nota1 + nota2) * (nota3 + nota4) / 2;
// Requerimiento:
// • Declara cada nota como constante.
// • Usa variables para la suma, el promedio y el resultado de la expresión.

alert("estadistica de calificaciones")
// declaro las contantes
const N_NOTAS=4,NOTA1=4.5, NOTA2=3.8, NOTA3=2.9, NOTA4=4.0;
// declaro las variables
let suma, promedio,resultado_de_la_expresion
// sumo las notas
suma= NOTA1+NOTA2+NOTA3+NOTA4;
// calcilo el promedio
promedio= suma/N_NOTAS;
// calculo la expresion y obtengo el resultado, ya que se suman las notas, se multiplican y luego se dividen entre 2
resultado_de_la_expresion= (NOTA1+NOTA2) * (NOTA3+NOTA4) /2;
resultado_de_la_expresion=(NOTA1+NOTA2)*(NOTA3+NOTA4);
resultado_de_la_expresion= resultado_de_la_expresion/2;
// emito el la informacion requerida
alert(`la suma de las notas es: ${suma}
el promedio de sus notas es: ${promedio}
el resultado de la expresion es: ${resultado_de_la_expresion}    
    `)
