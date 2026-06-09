<?php
declare(strict_types=1);

/**
 * Clase auxiliar para enviar respuestas JSON uniformes en los servicios web.
 */
class JsonResponse
{
    public static function send(int $statusCode, bool $success, string $message, array $data = []): void
    {
        http_response_code($statusCode);
        self::setHeaders();

        $response = [
            'success' => $success,
            'message' => $message,
        ];

        if (!empty($data)) {
            $response['data'] = $data;
        }

        echo json_encode($response, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
        exit;
    }

    public static function handleOptionsRequest(): void
    {
        if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
            http_response_code(204);
            self::setHeaders();
            exit;
        }
    }

    public static function setHeaders(): void
    {
        header('Content-Type: application/json; charset=utf-8');
        header('Access-Control-Allow-Origin: *');
        header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
        header('Access-Control-Allow-Headers: Content-Type');
    }
}
