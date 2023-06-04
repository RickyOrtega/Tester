<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ page import="com.example.tester.Usuario" %>
<%@ page import="com.example.tester.UserDAO" %>
<%@ page import="org.apache.commons.codec.digest.DigestUtils" %>

<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Inicia Sesión en The Way</title>
    <link rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,700,1,0"/>
    <link rel="stylesheet" href="./styles/tester.css">
</head>

<body>
<div class="container">
    <header id="header">
        <nav class="navbar-custom">
            <div class="container">
                <a class="navbar-brand" href="index.html">The Way</a>
            </div>
        </nav>
    </header>
</div>
<div class="container">
    <main class="main-login">
        <form action="login.jsp" id="formulario-crear-cuenta" method="POST">

            <%

                /*
                * Primero controlaremos el login
                * */

            %>

            <% if (request.getMethod().equalsIgnoreCase("POST")) {

                //Obtenemos las credenciales de acceso enviadas desde el formulario
                String email = request.getParameter("email");
                String contrasena = request.getParameter("contrasena");

                //Encriptamos la contraseña
                String hashedPassword = DigestUtils.sha256Hex(contrasena);

                //Creamos un objeto de tipo Usuario
                UserDAO userDAO = new UserDAO();
                Usuario usuario = userDAO.login(email, hashedPassword);

                //Verificamos si el inicio de sesión fue exitoso
                if (usuario != null) {
                    session.setAttribute("usuario", usuario);
                    response.sendRedirect("logged.html");
                } else {
                    request.setAttribute("error", "Usuario o contraseña incorrectos");
                }
            %>
            <% } %>

            <%
                String error = (String) request.getAttribute("error");
                if (error != null) {
            %>
            <div class='error'><%= error %>
            </div>
            <% } %>

            <section id="form-cambiante">
                <label for="email">Email</label>
                <input type="email" name="email" id="email" placeholder="Correo Electrónico" required>

                <label for="contrasena">Contraseña</label>
                <input type="password" name="contrasena" id="contrasena" placeholder="Contraseña" required>

                <input type="submit" value="Iniciar Sesión" class="btn-inicio-sesion">
            </section>
            <div id="red-registrar">¿No tienes cuenta? Regístrate</div>
        </form>
    </main>
</div>
<script src="./scripts/font-awesome.min.js"></script>
<script src="./scripts/cambiar-formulario.js"></script>
</body>

</html>