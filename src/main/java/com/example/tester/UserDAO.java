package com.example.tester;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class UserDAO {
    private String QUERY_INSERTAR_USUARIO = "INSERT INTO Usuarios (nombre, apellido, correo, contrasena) VALUES (?, ?, ?, ?)";
    private String QUERY_LOGIN = "SELECT * FROM Usuarios WHERE correo = ? AND contrasena = ?";

    public UserDAO() {
    }

    public void insertarUsuario(Usuario usuario) {
        try (Connection connection = DataBaseConnection.getConnection();
             PreparedStatement preparedStatement = connection.prepareStatement(QUERY_INSERTAR_USUARIO)) {
            preparedStatement.setString(1, usuario.getNombre());
            preparedStatement.setString(2, usuario.getApellido());
            preparedStatement.setString(3, usuario.getCorreo());
            preparedStatement.setString(4, usuario.getContrasena());
            preparedStatement.executeUpdate();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    public Usuario login(String correo, String contrasena) {
        Usuario usuario = null;
        try (Connection connection = DataBaseConnection.getConnection();
             PreparedStatement preparedStatement = connection.prepareStatement(QUERY_LOGIN)) {
            preparedStatement.setString(1, correo);
            preparedStatement.setString(2, contrasena);

            try (ResultSet resultSet = preparedStatement.executeQuery()) {
                if (resultSet.next()) {
                    usuario = new Usuario();
                    usuario.setNombre(resultSet.getString("nombre"));
                    usuario.setApellido(resultSet.getString("apellido"));
                    usuario.setCorreo(resultSet.getString("correo"));
                }
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return usuario;
    }
}
