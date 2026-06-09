# Restaurante-RayoControl - GA7-220501096-AA5-EV01

## Evidencia

**Diseño y desarrollo de servicios web - caso GA7-220501096-AA5-EV01**

Programa de formación: Tecnólogo en Análisis y Desarrollo de Software (SENA)  
Proyecto formativo: Construcción de software integrador de tecnologías orientadas a servicios  
Fase: Ejecución  
Resultado de aprendizaje: 220501096-04 - Codificar el software de acuerdo con el diseño establecido.  
Actividad de aprendizaje: GA7-220501096-AA5 - Crear servicios web.  
Aprendiz: Rayo Palatianos  
Ficha: 3134559  
Instructor: David Guillermo Acevedo Cárdenas  

## Descripción

Este proyecto implementa servicios web en PHP para el caso solicitado en la evidencia: registro de usuario e inicio de sesión. Los servicios reciben usuario y contraseña en formato JSON, validan los datos recibidos, registran usuarios y verifican credenciales.

La evidencia conserva continuidad con el proyecto **Restaurante-RayoControl**. En la evidencia anterior GA7-AA4-EV03 se dejó una interfaz visual de acceso en React; esta evidencia implementa el backend mínimo de servicios web que podría ser consumido por esa interfaz en una etapa posterior.

## Servicios incluidos

| Servicio | Método | Ruta | Descripción |
|---|---|---|---|
| Estado del servicio | GET | `/api/health.php` | Verifica que la API está disponible. |
| Registro | POST | `/api/register.php` | Registra usuario y contraseña. |
| Inicio de sesión | POST | `/api/login.php` | Verifica usuario y contraseña. |

## Tecnologías utilizadas

- PHP nativo.
- Servicios web tipo API.
- JSON como formato de entrada y salida.
- `password_hash()` para proteger contraseñas.
- `password_verify()` para validar autenticación.
- Almacenamiento local en `data/users.json`.
- Git y GitHub para versionamiento.

## Estructura del proyecto

```txt
GA7-220501096-AA5-EV01
│   .gitignore
│   enlace_repositorio.txt
│   INSTRUCCIONES_EJECUCION.txt
│   README.md
│
├───api
│       health.php
│       login.php
│       register.php
│
├───data
│       users.json
│
├───docs
│       pruebas_servicios_web.md
│
└───src
        AuthService.php
        JsonResponse.php
        RequestValidator.php
        UserRepository.php
```

## Ejecución local

Desde la raíz del proyecto:

```cmd
php -S localhost:8000
```

Luego probar:

```txt
http://localhost:8000/api/health.php
```

## Prueba de registro con PowerShell

```powershell
Invoke-RestMethod -Uri "http://localhost:8000/api/register.php" -Method POST -ContentType "application/json" -Body '{"username":"rayo","password":"123456"}'
```

## Prueba de inicio de sesión con PowerShell

```powershell
Invoke-RestMethod -Uri "http://localhost:8000/api/login.php" -Method POST -ContentType "application/json" -Body '{"username":"rayo","password":"123456"}'
```

## Relación con la lista de chequeo

1. Realiza un servicio para ser utilizado en un registro: `api/register.php`.
2. Realiza un servicio para ser utilizado en un inicio de sesión: `api/login.php`.
3. Realiza las validaciones de verificación correctamente: `RequestValidator.php`, `AuthService.php` y respuestas JSON.
4. Utiliza herramientas de versionamiento para la creación del proyecto: carpeta preparada para GitHub y `enlace_repositorio.txt`.

## Repositorio

```txt
https://github.com/Rayo-Dev10/Restaurante-RayoControl/tree/main/GA7-220501096-AA5-EV01
```
