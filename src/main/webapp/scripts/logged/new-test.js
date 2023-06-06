let nuevo_test = document.getElementById("logged-nuevo-test");
let main = document.getElementById("contenido-tests");
let fecha_actual = new Date();
let fecha_formateada = fecha_actual.toISOString().slice(0, 10);
let ultimoId = 0;

nuevo_test.addEventListener("click", function () {
    main.innerHTML = `
    <!--Crear Nuevo Test-->
    <section class="contenido-main scrollable">
        <form action="" method="POST" class="form-logged">
            <div id="form-crear-test-one">
                <h2>Nuevo Test</h2>
                <div class="form-nuevo-test-sup">
                    <label for="nombre-test">Nombre:</label>
                    <input type="text" name="nombre-test" id="nombre-test" placeholder="Nombre del Test">
                    <label for="tipo-test">Tipo: </label>
                    <select name="tipo-test" id="tipo-test">
                        <option value="1" selected>Aptitudes</option>
                        <option value="2">Conocimientos</option>
                        <option value="3">Personalidad</option>
                        <option value="4">Vocacional</option>
                    </select>
                    <label for="descripcion-test">Descripción:</label>
                    <textarea name="descripcion-test" id="descripcion-test" cols="30" rows="10" maxlength="550" placeholder="Descripción del Test"></textarea>
                </div>
                <div id="form-nuevo-test-inf">
                    <div class="posibles-resultados">
                        <div id="cabecera-posibles-resultados">
                            <p class="posible-resultado-label">Posibles Resultados:</p>
                            <div id="agnadir-posible-resultado">
                                <i class="fa-solid fa-plus"></i>
                            </div>
                        </div>
                        <div id="zona-posibles-resultados">
                            <!--Usaré tablas, ya que siento que es más cómodo-->
                            <table id="tabla-posibles-resultados">
                                <thead>
                                    <tr>
                                        <th class="cabecera-tb-posibles-resultados">Nombre</th>
                                        <th class="cabecera-tb-posibles-resultados">Descripción</th>
                                        <th class="cabecera-tb-posibles-resultados">Eliminar</th>
                                    </tr>
                                </thead>
                                <tbody id="scroll-posibles-resultados">
                                    <!--Aquí se añadirán los posibles resultados-->
                                    
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div id="form-crear-test-two" class="non-visible-none">
                <h2>Preguntas</h2>
            </div>
            <div class="boton-siguiente">
                <div class="prev-step non-visible" id="crear-test">Anterior</div>
                <div class="next-step" id="crear-preguntas">Siguiente</div>
            </div>
        </form>
    </section>
    `;
    nuevo_test.classList.add("active");

    let agnadir_posible_resultado = document.getElementById("agnadir-posible-resultado");
    let scroll_posibles_resultados = document.getElementById("scroll-posibles-resultados");

    agnadir_posible_resultado.addEventListener("click", function () {
        scroll_posibles_resultados.innerHTML += plantilla_posible_resultado();

        let tr_posible_resultado = document.getElementsByClassName("tr-posible-resultado");

        for (let i = 0; i < tr_posible_resultado.length; i++) {

            let trash = document.getElementById("trash" + i);
            trash.addEventListener("click", function () {
                trash.parentElement.parentElement.parentElement.remove();
            });
        }

        ultimoId++;
    });

    function plantilla_posible_resultado() {
        return `<tr id="tr` + ultimoId + `" class="tr-posible-resultado">
                <td><input type="text"></td>
                <td><input type="text"></td>
                <td>
                    <div class="eliminar-posible-resultado">
                        <i class="fa-solid fa-trash" id="trash` + ultimoId + `"></i>
                    </div>
                </td>
            </tr>`;
    }

    let crear_preguntas = document.getElementById("crear-preguntas");
    let crear_test = document.getElementById("crear-test");
    let form_crear_test_one = document.getElementById("form-crear-test-one");
    let form_crear_test_two = document.getElementById("form-crear-test-two");

    crear_preguntas.addEventListener("click", function () {
        crear_preguntas.classList.add("non-visible");
        crear_test.classList.remove("non-visible");
        form_crear_test_one.classList.add("non-visible-none");
        form_crear_test_two.classList.remove("non-visible-none");
    });

    crear_test.addEventListener("click", function () {
        crear_preguntas.classList.remove("non-visible");
        crear_test.classList.add("non-visible");
        form_crear_test_one.classList.remove("non-visible-none");
        form_crear_test_two.classList.add("non-visible-none");
    });
});

