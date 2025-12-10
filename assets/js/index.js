// Detectar el click en el botón
document.getElementById("btn-generar").addEventListener("click", function () {
  // Mostrar en el cuadrado

  // Captura de datos
  let nombre = prompt("Ingresa tu nombre:");
  let apellido = prompt("Ingresa tu apellido:");

  // Procesamiento del texto
  let inicial = nombre.slice(0, 1).toLowerCase();
  let tresLetrasApellido = apellido.slice(0, 3).toLowerCase();

  // Generación de número aleatorio entre 10 y 99
  let numeroAleatorio = Math.floor(Math.random() * 90) + 10;

  // Ensamblaje final
  let nombreDeUsuario = inicial + tresLetrasApellido + numeroAleatorio;

  // Salida en consola
  console.log("Tu nuevo nombre de usuario es: " + nombreDeUsuario);

  // Mostrar en alerta
  alert("Tu nuevo nombre de usuario es: " + nombreDeUsuario);
});
