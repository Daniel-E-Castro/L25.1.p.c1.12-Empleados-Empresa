/*
12. EMPLEADOS EMPRESA

Una empresa conoce de sus empleados los siguientes datos: 
nombre, sexo ((M)asculino (F)emenino). Se desea que realice un algoritmo que permite determinar e imprimir: 
Cantidadde hombres que trabajan en la empresa y porcentaje de mujeres que trabajan en la empresa.

Se dispone de los siguientes datos de varios empleados: (nombre, sexo) 
(Mary, ‘F’),
(José, ‘M’), 
(Carlos, ‘M’), 
(Pedro, ‘M’)

SALIDA:
Cantidad de hombres que trabajan en la empresa: 3
Porcentaje de mujeres que trabajan en la empresa: 25% 
*/

import Cl_Empleados from "./Cl_Empleados.js";
import Cl_Empresa from "./Cl_Empresa.js";

let Empleado1 = new Cl_Empleados("Mary", "F")
let Empleado2 = new Cl_Empleados("Jose", "M")
let Empleado3 = new Cl_Empleados("Carlos", "M")
let Empleado4 = new Cl_Empleados("Pedro", "M")

let empresa = new Cl_Empresa()

empresa.procesar(Empleado1)
empresa.procesar(Empleado2)
empresa.procesar(Empleado3)
empresa.procesar(Empleado4)

let salida = document.getElementById("salida");
salida.innerHTML = `
Cantidad de hombres que trabajan en la empresa: ${empresa.cantidadHombresEmpresa()}
<br> Porcentaje de mujeres que trabajan en la empresa: ${empresa.porcentaje()}%
`