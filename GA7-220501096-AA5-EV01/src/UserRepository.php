<?php
declare(strict_types=1);

/**
 * Repositorio simple para almacenar usuarios en un archivo JSON local.
 * En una versión futura puede reemplazarse por una base de datos.
 */
class UserRepository
{
    private string $filePath;

    public function __construct(string $filePath)
    {
        $this->filePath = $filePath;
        $this->ensureStorageExists();
    }

    public function findByUsername(string $username): ?array
    {
        foreach ($this->getAllUsers() as $user) {
            if (($user['username'] ?? '') === $username) {
                return $user;
            }
        }

        return null;
    }

    public function save(array $user): void
    {
        $users = $this->getAllUsers();
        $users[] = $user;
        $this->writeUsers($users);
    }

    public function getAllUsers(): array
    {
        $content = file_get_contents($this->filePath);

        if ($content === false || trim($content) === '') {
            return [];
        }

        $users = json_decode($content, true);

        if (json_last_error() !== JSON_ERROR_NONE || !is_array($users)) {
            return [];
        }

        return $users;
    }

    private function writeUsers(array $users): void
    {
        $encodedUsers = json_encode($users, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);

        if ($encodedUsers === false) {
            JsonResponse::send(500, false, 'No fue posible codificar los usuarios.');
        }

        $result = file_put_contents($this->filePath, $encodedUsers . PHP_EOL, LOCK_EX);

        if ($result === false) {
            JsonResponse::send(500, false, 'No fue posible guardar la información del usuario.');
        }
    }

    private function ensureStorageExists(): void
    {
        $directory = dirname($this->filePath);

        if (!is_dir($directory)) {
            mkdir($directory, 0777, true);
        }

        if (!file_exists($this->filePath)) {
            file_put_contents($this->filePath, '[]' . PHP_EOL, LOCK_EX);
        }
    }
}
