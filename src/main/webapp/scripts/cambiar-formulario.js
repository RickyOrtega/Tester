const formulario = document.getElementById('form-cambiante');
const form = document.getElementById('formulario-crear-cuenta');
const boton_cambiar_formulario = document.getElementById('red-registrar');

let formulario_actual = 0;

boton_cambiar_formulario.addEventListener('click', () => {

    if (formulario_actual === 0) {
        formulario.innerHTML = `
            <label for="nombre">Nombre</label>
            <input type="text" name="nombre" id="nombre" placeholder="Nombre" required>
    
            <label for="apellido">Apellido</label>
            <input type="text" name="apellido" id="apellido" placeholder="Apellido" required>
    
            <label for="correo">Email</label>
            <input type="email" name="email" id="email" placeholder="Correo Electrónico" required>
    
            <label for="contrasena">Contraseña</label>
            <input type="password" name="contrasena" id="contrasena" placeholder="Contraseña" required>
    
            <label for="confirmar-contrasena">Confirmar Contraseña</label>
            <input type="password" name="confirmar-contrasena" id="confirmar-contrasena"
                placeholder="Confirmar Contraseña" required>
            
            <input type="submit" value="Crear Cuenta" class="btn-inicio-sesion">`

        boton_cambiar_formulario.innerText = '¿Ya tienes una cuenta? Inicia Sesión';
        form.setAttribute('action', 'crear-cuenta.jsp');

        formulario_actual = 1;
    } else {
        formulario.innerHTML = `
            <label for="correo">Email</label>
            <input type="email" name="email" id="email" placeholder="Correo Electrónico" required>
    
            <label for="contrasena">Contraseña</label>
            <input type="password" name="contrasena" id="contrasena" placeholder="Contraseña" required>
    
            <input type="submit" value="Iniciar Sesión" class="btn-inicio-sesion">`

        boton_cambiar_formulario.innerText = '¿No tienes una cuenta? Regístrate';
        form.setAttribute('action', 'login.jsp');
        
        formulario_actual = 0;
    }
});

console.log(formulario_actual);