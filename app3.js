// Ejercicio 3: Producción de una fábrica
// Una máquina produce 250 piezas por hora.
// En 8 horas de trabajo se necesita calcular:
// • El total de piezas fabricadas.
// • Cuántas cajas de 12 piezas se llenan.
// • Cuántas piezas quedan sueltas.
// Requerimiento:
//• Usa constantes para la producción por hora, las horas 
// trabajadas y la capacidad
// de las cajas.
// • Usa variables para el total de piezas, cajas llenas y piezas sobrantes.

alert("produccion de una fabrica");
// declaro las constantes
const PIEZAS_POR_HORA=250, HORAS_TRABAJADAS=8,CAPACIDAD_DE_LAS_CAJAS=12;
// declaro las variables
let total_piezas, cajas_llenas,piezas_sobrantes
// calculo el total de piezas por turno
total_piezas=PIEZAS_POR_HORA*HORAS_TRABAJADAS;
// calculo el total de cajas llenas por turno
cajas_llenas=total_piezas/CAPACIDAD_DE_LAS_CAJAS;
//calculo las piezas sobrantes
piezas_sobrantes= total_piezas % CAPACIDAD_DE_LAS_CAJAS;
//emito un alerta con la informacion requerida
alert(`respuesta
    total piezas fabricadas: ${total_piezas}
    total cajas llenas es: ${cajas_llenas}
    quedan ${piezas_sobrantes} piezas sueltas
    `)