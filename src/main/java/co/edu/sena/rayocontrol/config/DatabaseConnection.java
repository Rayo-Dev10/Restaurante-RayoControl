package co.edu.sena.rayocontrol.config;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

/**
 * Provides a reusable JDBC connection for the Restaurante-RayoControl project.
 * Update the constants according to the local PostgreSQL or Supabase database.
 */
public final class DatabaseConnection {

    private static final String DATABASE_URL = "jdbc:postgresql://localhost:5432/rayocontrol_db";
    private static final String DATABASE_USER = "postgres";
    private static final String DATABASE_PASSWORD = "colombia";

    private DatabaseConnection() {
        // Utility class. Instances are not required.
    }

    public static Connection getConnection() throws SQLException {
        return DriverManager.getConnection(DATABASE_URL, DATABASE_USER, DATABASE_PASSWORD);
    }
}
