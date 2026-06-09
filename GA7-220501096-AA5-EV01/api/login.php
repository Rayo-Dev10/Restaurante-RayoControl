<?php
declare(strict_types=1);

require_once __DIR__ . '/../src/JsonResponse.php';
require_once __DIR__ . '/../src/RequestValidator.php';
require_once __DIR__ . '/../src/UserRepository.php';
require_once __DIR__ . '/../src/AuthService.php';

JsonResponse::handleOptionsRequest();
RequestValidator::requirePost();

$data = RequestValidator::getJsonBody();
$credentials = RequestValidator::validateCredentials($data);

$userRepository = new UserRepository(__DIR__ . '/../data/users.json');
$authService = new AuthService($userRepository);

$result = $authService->login($credentials['username'], $credentials['password']);

if (!$result['success']) {
    JsonResponse::send(401, false, $result['message']);
}

JsonResponse::send(200, true, $result['message'], $result['data'] ?? []);
