const iconos = document.getElementsByClassName('icono-profesion');
const colores = ['#15A5A7', '#B80E65', '#BFFFC7', '#E415FF', '#92B8FF', '#74B0FF', '#F6F0F0'];
let indiceColor = 0;

console.log(iconos);

function generarNumero(min, max) {
  const random = Math.random();

  const numero = Math.floor(random * (max - min + 1)) + min;

  return numero;
}

function cambiarColor() {
  for (let i = 0; i < iconos.length; i++) {
    iconos[i].style.transition = 'all 0.5s';
    const rnd = generarNumero(0, colores.length - 1);
    iconos[i].style.color = colores[rnd];
  }
}

setInterval(cambiarColor, 1000); // Cambiar cada 2 segundos