let zona_resultados = document.getElementById("zona-resultados");
let boton_añadir_posible_resultado = document.getElementById("boton-añadir-posible-resultado");
let contador_resultados = 0;

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
    label_nombre_resultado.setAttribute("class", "label-nombre-resultado");
    label_nombre_resultado.setAttribute("id", "label-nombre-resultado-" + contador_resultados);
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
    label_descripcion_resultado.setAttribute("class", "label-descripcion-resultado");
    label_descripcion_resultado.setAttribute("id", "label-descripcion-resultado-" + contador_resultados);
    label_descripcion_resultado.innerHTML = "Descripción: ";

    let textarea_descripcion_resultado = document.createElement("textarea");
    textarea_descripcion_resultado.setAttribute("id", "descripcion-resultado-" + contador_resultados);
    textarea_descripcion_resultado.setAttribute("name", "descripcion-resultado-" + contador_resultados);
    textarea_descripcion_resultado.setAttribute("placeholder", "Descripción del resultado");

    let boton_eliminar_tarjeta = document.createElement("div");
    boton_eliminar_tarjeta.setAttribute("class", "eliminar-tarjeta");
    boton_eliminar_tarjeta.setAttribute("id", "eliminar-tarjeta-" + contador_resultados);

    let icono_eliminar_tarjeta = document.createElement("i");
    icono_eliminar_tarjeta.setAttribute("class", "fa-solid fa-trash");

    boton_eliminar_tarjeta.appendChild(icono_eliminar_tarjeta);

    boton_eliminar_tarjeta.addEventListener("click", function(){
        eliminarTarjeta(this);
    });

    body.appendChild(label_descripcion_resultado);
    body.appendChild(textarea_descripcion_resultado);
    body.appendChild(boton_eliminar_tarjeta);

    //Ahora agregamos los elementos a la tarjeta

    nuevo_elemento.appendChild(cabecera);
    nuevo_elemento.appendChild(body);

    //Ahora agregamos la tarjeta a la zona de resultados
    zona_resultados.insertBefore(nuevo_elemento, boton_añadir_posible_resultado);

    contador_resultados++;
});

function eliminarTarjeta(elemento){
    let tarjeta = elemento.parentNode.parentNode;
    tarjeta.remove();
    reiniciarIdsResultados();
}

function reiniciarIdsResultados(){
    let tarjetas = document.getElementsByClassName("tarjeta-resultado");
    let labels_1 = document.getElementsByClassName("label-nombre-resultado");
    let inputs = document.getElementsByClassName("nombre-resultado");
    let labels_2 = document.getElementsByClassName("label-descripcion-resultado");
    let textareas = document.getElementsByClassName("descripcion-resultado");
    let botones = document.getElementsByClassName("eliminar-tarjeta");

    for(let i = 0; i < tarjetas.length; i++){
        tarjetas[i].setAttribute("id", "tarjeta-resultado-" + i);

        labels_1[i].setAttribute("for", "nombre-resultado-" + i);
        labels_1[i].setAttribute("id", "nombre-resultado-" + i);

        inputs[i].setAttribute("id", "nombre-resultado-" + i);
        inputs[i].setAttribute("name", "nombre-resultado-" + i);

        labels_2[i].setAttribute("for", "momento xD-" + i);
        labels_2[i].setAttribute("id", "descripcion-resultado-" + i);

        textareas[i].setAttribute("id", "descripcion-resultado-" + i);
        textareas[i].setAttribute("name", "descripcion-resultado-" + i);

        botones[i].setAttribute("id", "eliminar-tarjeta-" + i);
    }

    contador_resultados = tarjetas.length;
}