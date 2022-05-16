let clave: string | null = "eureka";
let claveIngresada: string | null;
let contador: number = 0;

while (claveIngresada !== clave && contador < 3) {
  claveIngresada = prompt("Ingrese su clave (sólo tiene 3 intentos)");
  contador = contador + 1;
}
if (claveIngresada === clave) {
  console.log("Usted ha ingresado la contraseña correctamente");
} else {
  console.log("Usted ha agotado todas las oportunidades");
}
