// Ejercico 1: Calculadora de gastos de viaje
// Un grupo de amigos realiza un viaje con los siguientes costos fijos:
// • Transporte: $120.000
// • Alojamiento: $200.000
// • Alimentación: $150.000
// El total debe dividirse en partes iguales entre 4 personas. 
// Además, cada persona
//  entregará $130.000 y se debe calcular el sobrante.
//  Requerimiento:
// • Usa constantes para los costos y la cantidad de personas.
//  • Usa variables para el total, el aporte individual y el sobrante.
// emito una alerta
alert("calculadora de gastos: ");
// declaro las constantes
const TRANSPORTE=120000;
const  ALOJAMIENTO=200000;
const ALIMENTACION=150000;
const CANTIDAD_DE_PERSONAS= 4;
// declaro las varianles
let total_costos, aporte_individual, aporte_base_recogido, sobrante, gastos_por_persona, aporte_base;
// le asigno un valor a la avariable aporte_base
aporte_base=130000;
// calculo el total de los gastos
total_costos= TRANSPORTE+ALOJAMIENTO+ALIMENTACION;
// calculo el aporte base recogido
aporte_base_recogido= CANTIDAD_DE_PERSONAS*aporte_base;
// calculo el gasto por persona
gastos_por_persona= total_costos/CANTIDAD_DE_PERSONAS;
// calculo el sobrante
sobrante= aporte_base_recogido-total_costos;
// emito un alert con la informacion requerida
alert(`el total de los costos es: ${total_costos}
el aporte base recogido es: ${aporte_base_recogido}
el gasto por persona es: ${gastos_por_persona}
dividiendolo entre cuatro le toca a cada uno de a ${gastos_por_persona}
el sobrante final es: ${sobrante}`);







