# Pruebas de servicios web - GA7-220501096-AA5-EV01

## 1. Servicio de estado

### Solicitud

```txt
GET http://localhost:8000/api/health.php
```

### Respuesta esperada

```json
{
  "success": true,
  "message": "Servicio web activo.",
  "data": {
    "project": "Restaurante-RayoControl",
    "evidence": "GA7-220501096-AA5-EV01",
    "service": "API de registro e inicio de sesión"
  }
}
```

## 2. Registro de usuario

### Solicitud

```powershell
Invoke-RestMethod -Uri "http://localhost:8000/api/register.php" -Method POST -ContentType "application/json" -Body '{"username":"rayo","password":"123456"}'
```

### Respuesta esperada

```json
{
  "success": true,
  "message": "Usuario registrado correctamente."
}
```

## 3. Registro duplicado

### Solicitud

Ejecutar nuevamente el mismo registro:

```powershell
Invoke-RestMethod -Uri "http://localhost:8000/api/register.php" -Method POST -ContentType "application/json" -Body '{"username":"rayo","password":"123456"}'
```

### Respuesta esperada

```json
{
  "success": false,
  "message": "El usuario ya existe."
}
```

## 4. Inicio de sesión correcto

### Solicitud

```powershell
Invoke-RestMethod -Uri "http://localhost:8000/api/login.php" -Method POST -ContentType "application/json" -Body '{"username":"rayo","password":"123456"}'
```

### Respuesta esperada

```json
{
  "success": true,
  "message": "Autenticación satisfactoria."
}
```

## 5. Error de autenticación

### Solicitud

```powershell
Invoke-RestMethod -Uri "http://localhost:8000/api/login.php" -Method POST -ContentType "application/json" -Body '{"username":"rayo","password":"claveIncorrecta"}'
```

### Respuesta esperada

```json
{
  "success": false,
  "message": "Error en la autenticación."
}
```

## 6. Validación de campos obligatorios

### Solicitud

```powershell
Invoke-RestMethod -Uri "http://localhost:8000/api/login.php" -Method POST -ContentType "application/json" -Body '{"username":"","password":""}'
```

### Respuesta esperada

```json
{
  "success": false,
  "message": "El usuario es obligatorio."
}
```

## Relación con la lista de chequeo

- Servicio para registro: `api/register.php`.
- Servicio para inicio de sesión: `api/login.php`.
- Validaciones de verificación: validación de método, JSON, campos, duplicidad, usuario inexistente y contraseña.
- Versionamiento: carpeta lista para GitHub y archivo `enlace_repositorio.txt`.
