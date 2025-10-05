// Ejercicio 2: Conversor de tiempo
// Un aprendiz registró 7.200 segundos de actividad física. Necesita expresarlos en:
// • Minutos.
// • Horas.
// • Días.
// Requerimiento:
// • Usa una constante para los segundos.
// • Declara variables para almacenar las conversiones.

alert("conversor de tiempo")
// declaro como contante el valor a convertir
const SEGUNDOS=7200;
// declaro como variables las medidas a las que debo convertir la constante
let Minutos, Horas, dias;
// convierti de segundos a minutos
Minutos= SEGUNDOS/60;
// convierti de minutos a horas
Horas= Minutos/60;
// convierti de horas a dias
dias= Horas/24;
// emito una alerta con la informacion solicitada
alert(`los 7200 segundos son 
    ${Minutos} minutos 
    ${Horas} horas
    ${dias} dias`)