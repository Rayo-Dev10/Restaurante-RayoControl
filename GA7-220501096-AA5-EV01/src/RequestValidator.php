<?php
declare(strict_types=1);

/**
 * Valida el método HTTP, el contenido JSON recibido y los campos requeridos.
 */
class RequestValidator
{
    public static function requirePost(): void
    {
        if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
            JsonResponse::send(405, false, 'Método no permitido. Use POST.');
        }
    }

    public static function getJsonBody(): array
    {
        $rawBody = file_get_contents('php://input');

        if ($rawBody === false || trim($rawBody) === '') {
            JsonResponse::send(400, false, 'El cuerpo de la solicitud es obligatorio.');
        }

        $data = json_decode($rawBody, true);

        if (json_last_error() !== JSON_ERROR_NONE || !is_array($data)) {
            JsonResponse::send(400, false, 'El cuerpo de la solicitud debe ser JSON válido.');
        }

        return $data;
    }

    public static function validateCredentials(array $data): array
    {
        $username = isset($data['username']) ? trim((string) $data['username']) : '';
        $password = isset($data['password']) ? (string) $data['password'] : '';

        if ($username === '') {
            JsonResponse::send(422, false, 'El usuario es obligatorio.');
        }

        if ($password === '') {
            JsonResponse::send(422, false, 'La contraseña es obligatoria.');
        }

        if (strlen($username) < 3) {
            JsonResponse::send(422, false, 'El usuario debe tener mínimo 3 caracteres.');
        }

        if (!preg_match('/^[a-zA-Z0-9_.-]+$/', $username)) {
            JsonResponse::send(422, false, 'El usuario solo puede contener letras, números, guion, punto o guion bajo.');
        }

        if (strlen($password) < 6) {
            JsonResponse::send(422, false, 'La contraseña debe tener mínimo 6 caracteres.');
        }

        return [
            'username' => strtolower($username),
            'password' => $password,
        ];
    }
}
