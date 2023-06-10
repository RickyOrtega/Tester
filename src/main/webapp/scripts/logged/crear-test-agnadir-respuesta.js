let zona_resultados = document.getElementById("zona-resultados");
let boton_añadir_posible_resultado = document.getElementById("boton-añadir-posible-resultado");

let contador_resultados = 1;

boton_añadir_posible_resultado.addEventListener("click", function () {

    //Creamos el nuevo elemento
    let nuevo_elemento = document.createElement("div");
    nuevo_elemento.setAttribute("class", "tarjeta-resultado");
    nuevo_elemento.setAttribute("id", "tarjeta-resultado-" + contador_resultados);

    //Ahora creamos la cabecera de la tarjeta
    let cabecera = document.createElement("div");
    cabecera.setAttribute("class", "cabecera-nombre-resultado");
    
    let label_nombre_resultado = document.createElement("label");
    label_nombre_resultado.setAttribute("for", "nombre-resultado-" + contador_resultados);
    label_nombre_resultado.innerHTML = "Nombre: ";

    let input_nombre_resultado = document.createElement("input");
    input_nombre_resultado.setAttribute("type", "text");
    input_nombre_resultado.setAttribute("id", "nombre-resultado-" + contador_resultados);
    input_nombre_resultado.setAttribute("name", "nombre-resultado-" + contador_resultados);
    input_nombre_resultado.setAttribute("placeholder", "Nombre del resultado");
    input_nombre_resultado.setAttribute("class", "nombre-resultado");

    cabecera.appendChild(label_nombre_resultado);
    cabecera.appendChild(input_nombre_resultado);

    //Ahora creamos el body de la tarjeta

    let body = document.createElement("div");
    body.setAttribute("class", "descripcion-resultado");

    let label_descripcion_resultado = document.createElement("label");
    label_descripcion_resultado.setAttribute("for", "descripcion-resultado-" + contador_resultados);
    label_descripcion_resultado.innerHTML = "Descripción: ";

    let textarea_descripcion_resultado = document.createElement("textarea");
    textarea_descripcion_resultado.setAttribute("id", "descripcion-resultado-" + contador_resultados);
    textarea_descripcion_resultado.setAttribute("name", "descripcion-resultado-" + contador_resultados);
    textarea_descripcion_resultado.setAttribute("placeholder", "Descripción del resultado");

    body.appendChild(label_descripcion_resultado);
    body.appendChild(textarea_descripcion_resultado);

    //Ahora agregamos los elementos a la tarjeta

    nuevo_elemento.appendChild(cabecera);
    nuevo_elemento.appendChild(body);

    //Ahora agregamos la tarjeta a la zona de resultados
    zona_resultados.insertBefore(nuevo_elemento, boton_añadir_posible_resultado);

    contador_resultados++;
});