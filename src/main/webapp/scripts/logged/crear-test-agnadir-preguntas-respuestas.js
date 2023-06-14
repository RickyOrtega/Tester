//Añadir preguntas y respuestas a un test

let zona_preguntas = document.getElementById("zona-preguntas");
let boton_agnadir_pregunta = document.getElementById("boton-añadir-pregunta");

let contador_preguntas = 1;

boton_agnadir_pregunta.addEventListener("click", function () {

    let tarjeta_pregunta = document.createElement("div");
    tarjeta_pregunta.classList.add("tarjeta-pregunta");

    let cabecera_pregunta = document.createElement("div");
    cabecera_pregunta.classList.add("cabecera-pregunta");

    let pregunta = document.createElement("div");
    pregunta.classList.add("pregunta");
    pregunta.setAttribute("id", "contenedor-pregunta-" + contador_preguntas);

    let numero_pregunta = document.createElement("span");
    numero_pregunta.classList.add("numero-pregunta");
    numero_pregunta.textContent = contador_preguntas;

    let texto_pregunta = document.createElement("input");
    texto_pregunta.setAttribute("type", "text");
    texto_pregunta.setAttribute("name", "pregunta-" + contador_preguntas);
    texto_pregunta.setAttribute("id", "pregunta-" + contador_preguntas);
    texto_pregunta.setAttribute("placeholder", "Pregunta");

    pregunta.appendChild(numero_pregunta);
    pregunta.appendChild(texto_pregunta);

    let boton_añadir_respuesta = document.createElement("div");
    boton_añadir_respuesta.classList.add("boton-añadir-respuesta");
    boton_añadir_respuesta.setAttribute("id", "boton-añadir-respuesta-" + contador_preguntas);

    let cuerpo_pregunta = document.createElement("div");
    cuerpo_pregunta.classList.add("cuerpo-pregunta");

    let tabla_respuestas = document.createElement("table");

    let cabecera_tabla_respuestas = document.createElement("thead");

    let fila_cabecera_tabla_respuestas = document.createElement("tr");

    let cabecera_respuesta = document.createElement("th");
    cabecera_respuesta.textContent = "Respuesta";

    let cabecera_resultado = document.createElement("th");
    cabecera_resultado.textContent = "Afinidad";

    let cabecera_eliminar = document.createElement("th");
    cabecera_eliminar.textContent = "Eliminar";

    fila_cabecera_tabla_respuestas.appendChild(cabecera_respuesta);
    fila_cabecera_tabla_respuestas.appendChild(cabecera_resultado);
    fila_cabecera_tabla_respuestas.appendChild(cabecera_eliminar);

    cabecera_tabla_respuestas.appendChild(fila_cabecera_tabla_respuestas);

    let cuerpo_tabla_respuestas = document.createElement("tbody");

    tabla_respuestas.appendChild(cabecera_tabla_respuestas);

    tabla_respuestas.appendChild(cuerpo_tabla_respuestas);

    cuerpo_pregunta.appendChild(tabla_respuestas);

    boton_añadir_respuesta.addEventListener("click", function () {

        let contador_respuestas = 1;

        let fila_respuesta = document.createElement("tr");

        let respuesta = document.createElement("td");

        let texto_respuesta = document.createElement("input");
        texto_respuesta.setAttribute("type", "text");
        texto_respuesta.setAttribute("name", "respuesta-" + contador_preguntas + "-" + contador_respuestas);
        texto_respuesta.setAttribute("id", "respuesta-" + contador_preguntas + "-" + contador_respuestas);
        texto_respuesta.setAttribute("placeholder", "Respuesta");

        respuesta.appendChild(texto_respuesta);

        let resultado = document.createElement("td");

        let select_resultado = document.createElement("select");

        let opciones_a_mostrar = getResultados();

        for (let i = 0; i < opciones_a_mostrar.length; i++) {
            let opcion = document.createElement("option");
            opcion.textContent = opciones_a_mostrar[i].nombre;
            select_resultado.appendChild(opcion);
        }

        resultado.appendChild(select_resultado);

        let eliminar = document.createElement("td");

        let boton_eliminar = document.createElement("div");
        boton_eliminar.classList.add("boton-eliminar-respuesta");

        let icono_boton_eliminar = document.createElement("i");
        icono_boton_eliminar.classList.add("fa-solid", "fa-trash");

        boton_eliminar.appendChild(icono_boton_eliminar);

        boton_eliminar.addEventListener("click", function () {
            fila_respuesta.remove();
        });

        eliminar.appendChild(boton_eliminar);

        fila_respuesta.appendChild(respuesta);

        fila_respuesta.appendChild(resultado);

        fila_respuesta.appendChild(eliminar);

        cuerpo_tabla_respuestas.appendChild(fila_respuesta);

        contador_respuestas++;
    });

    let icono_boton_añadir_respuesta = document.createElement("i");
    icono_boton_añadir_respuesta.classList.add("fa-solid", "fa-plus");

    let mostrar_respuestas = document.createElement("div");
    mostrar_respuestas.classList.add("mostrar-respuestas", "mostrar");
    mostrar_respuestas.setAttribute("id", "mostrar-respuestas-" + contador_preguntas);

    mostrar_respuestas.addEventListener("click", function () {
        cuerpo_pregunta.classList.toggle("non-visible");
        icono_mostrar_respuestas.classList.remove("fa-chevron-up");
        icono_mostrar_respuestas.classList.remove("fa-chevron-down");
        mostrar_respuestas.classList.toggle("mostrar");
    });

    let icono_mostrar_respuestas = document.createElement("i");
    icono_mostrar_respuestas.classList.add("fa-solid", "fa-chevron-up");

    mostrar_respuestas.appendChild(icono_mostrar_respuestas);

    boton_añadir_respuesta.appendChild(icono_boton_añadir_respuesta);

    cabecera_pregunta.appendChild(pregunta);
    cabecera_pregunta.appendChild(boton_añadir_respuesta);

    tarjeta_pregunta.appendChild(cabecera_pregunta);

    tarjeta_pregunta.appendChild(cuerpo_pregunta);

    tarjeta_pregunta.appendChild(mostrar_respuestas);

    zona_preguntas.insertBefore(tarjeta_pregunta, boton_agnadir_pregunta);

    contador_preguntas++;
});

function getResultados(){
    let posibles_resultados_todos = document.getElementsByClassName("tarjeta-resultado");

    let posibles_resultados = [];

    //Obtenedremos los posibles resultados

    for (let i = 0; i < posibles_resultados_todos.length; i++) {

        //Se saca lo nombres de los posibles resultados
        let nombre_resultado = posibles_resultados_todos[i].getElementsByClassName("nombre-resultado")[0].value;

        if(nombre_resultado == "" || nombre_resultado == null || nombre_resultado == undefined || nombre_resultado == " "){
            console.log(`No se pudo obtener el nombre del resultado ${i}` );
        } else {
            posibles_resultados.push({
                nombre: nombre_resultado,
                descripcion: posibles_resultados_todos[i].getElementsByClassName("descripcion-resultado")[0].value
            });

            console.log(`Se obtuvo el nombre del resultado ${i}` );
        }
    }

    return posibles_resultados;
}