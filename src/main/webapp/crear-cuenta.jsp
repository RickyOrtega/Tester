<%@ page import="java.sql.*" %>
<%@ page import="com.example.tester.DataBaseConnection" %>

<%
    String nombre = request.getParameter("nombre");
    String apellido = request.getParameter("apellido");
    String email = request.getParameter("email");
    String password = request.getParameter("contrasena");

    try {
        Connection conn = DataBaseConnection.getConnection();

        String query = "INSERT INTO usuarios (nombre, apellido, correo_electronico, contrasena) VALUES (?, ?, ?, ?, ?)";
        PreparedStatement pstmt = conn.prepareStatement(query);
        pstmt.setString(1, nombre);
        pstmt.setString(2, apellido);
        pstmt.setString(3, email);
        pstmt.setString(4, password);
        pstmt.executeUpdate();

        out.println("Registro exitoso");

        pstmt.close();
        conn.close();
    } catch (SQLException e) {
        out.println("Error en el registro: " + e.getMessage());
    }
%>