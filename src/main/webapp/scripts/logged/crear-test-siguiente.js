let primera_parte = document.getElementById("primera-parte");
let segunda_parte = document.getElementById("segunda-parte");
let boton_siguiente = document.getElementById("boton-siguiente");

let clicked = false;

boton_siguiente.addEventListener("click", function () {
    if (!clicked) {
        primera_parte.style.display = "none";
        segunda_parte.style.display = "block";
        boton_siguiente.style.display = "none";

        clicked = true;
    }

    getResultados();
});