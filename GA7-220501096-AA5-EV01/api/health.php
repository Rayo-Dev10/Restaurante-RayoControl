<?php
declare(strict_types=1);

require_once __DIR__ . '/../src/JsonResponse.php';

JsonResponse::setHeaders();

if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    JsonResponse::send(405, false, 'Método no permitido. Use GET.');
}

JsonResponse::send(200, true, 'Servicio web activo.', [
    'project' => 'Restaurante-RayoControl',
    'evidence' => 'GA7-220501096-AA5-EV01',
    'service' => 'API de registro e inicio de sesión',
]);
