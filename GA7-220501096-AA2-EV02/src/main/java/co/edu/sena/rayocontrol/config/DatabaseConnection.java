package co.edu.sena.rayocontrol.config;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public final class DatabaseConnection {
    private static final String DATABASE_URL = "jdbc:postgresql://localhost:5432/rayocontrol_db";
    private static final String DATABASE_USER = "postgres";
    private static final String DATABASE_PASSWORD = "colombia";

    private DatabaseConnection() {
    }

    public static Connection getConnection() throws SQLException {
        try {
            Class.forName("org.postgresql.Driver");
        } catch (ClassNotFoundException exception) {
            throw new SQLException("PostgreSQL JDBC driver was not found.", exception);
        }
        return DriverManager.getConnection(DATABASE_URL, DATABASE_USER, DATABASE_PASSWORD);
    }
}