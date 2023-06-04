<%@ page import="java.sql.*" %>
<%@ page import="com.example.tester.DataBaseConnection" %>
<%@ page import="org.apache.commons.codec.digest.DigestUtils" %>

<%
    String nombre = request.getParameter("nombre");
    String apellido = request.getParameter("apellido");
    String email = request.getParameter("email");
    String password = request.getParameter("contrasena");

    // Encriptar la contraseña utilizando SHA-256
    String hashedPassword = DigestUtils.sha256Hex(password);

    try {
        Connection conn = DataBaseConnection.getConnection();

        // Verificar si el correo electrónico ya existe en la base de datos
        String checkQuery = "SELECT COUNT(*) AS count FROM usuarios WHERE correo = ?";
        PreparedStatement checkStmt = conn.prepareStatement(checkQuery);
        checkStmt.setString(1, email);
        ResultSet checkResult = checkStmt.executeQuery();
        checkResult.next();
        int count = checkResult.getInt("count");

        if (count > 0) {
            // El correo electrónico ya existe, mostrar mensaje de error o realizar alguna acción adecuada
            out.println("El correo electrónico ya está registrado");
        } else {
            // El correo electrónico no existe, realizar el registro
            String insertQuery = "INSERT INTO usuarios (nombre, apellido, correo, contrasena) VALUES (?, ?, ?, ?)";
            PreparedStatement pstmt = conn.prepareStatement(insertQuery);
            pstmt.setString(1, nombre);
            pstmt.setString(2, apellido);
            pstmt.setString(3, email);
            pstmt.setString(4, hashedPassword);
            pstmt.executeUpdate();

            out.println("Registro exitoso");
            pstmt.close();
        }

        // Cerrar la conexión y los statements
        checkStmt.close();
        conn.close();
    } catch (SQLException e) {
        out.println("Error en el registro: " + e.getMessage());
    }
%>