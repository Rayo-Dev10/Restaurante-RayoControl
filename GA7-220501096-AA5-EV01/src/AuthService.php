<?php
declare(strict_types=1);

/**
 * Servicio de autenticación reutilizable para registro e inicio de sesión.
 */
class AuthService
{
    private UserRepository $userRepository;

    public function __construct(UserRepository $userRepository)
    {
        $this->userRepository = $userRepository;
    }

    public function register(string $username, string $password): array
    {
        if ($this->userRepository->findByUsername($username) !== null) {
            return [
                'success' => false,
                'message' => 'El usuario ya existe.',
            ];
        }

        $user = [
            'username' => $username,
            'password_hash' => password_hash($password, PASSWORD_DEFAULT),
            'created_at' => date('Y-m-d H:i:s'),
        ];

        $this->userRepository->save($user);

        return [
            'success' => true,
            'message' => 'Usuario registrado correctamente.',
        ];
    }

    public function login(string $username, string $password): array
    {
        $user = $this->userRepository->findByUsername($username);

        if ($user === null) {
            return [
                'success' => false,
                'message' => 'Error en la autenticación.',
            ];
        }

        $storedHash = $user['password_hash'] ?? '';

        if (!password_verify($password, $storedHash)) {
            return [
                'success' => false,
                'message' => 'Error en la autenticación.',
            ];
        }

        return [
            'success' => true,
            'message' => 'Autenticación satisfactoria.',
            'data' => [
                'username' => $username,
                'authenticated_at' => date('Y-m-d H:i:s'),
            ],
        ];
    }
}
