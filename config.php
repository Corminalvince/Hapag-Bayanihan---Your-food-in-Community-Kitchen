<?php
// Database configuration
define('DB_HOST', 'localhost');
define('DB_NAME', 'hapag_bayanihan');
define('DB_USER', 'root');
define('DB_PASS', '');

// Application configuration
define('APP_NAME', 'Hapag Bayanihan');
define('APP_URL', 'http://localhost/hapag-bayanihan');
define('UPLOAD_PATH', 'uploads/');

// Security configuration
define('SECRET_KEY', 'your-secret-key-here');
define('PASSWORD_SALT', 'your-password-salt-here');

// Email configuration (for future use)
define('SMTP_HOST', 'smtp.gmail.com');
define('SMTP_PORT', 587);
define('SMTP_USER', 'your-email@gmail.com');
define('SMTP_PASS', 'your-app-password');

// Session configuration
ini_set('session.cookie_lifetime', 86400); // 24 hours
session_start();

// Database connection
try {
    $pdo = new PDO(
        "mysql:host=" . DB_HOST . ";dbname=" . DB_NAME . ";charset=utf8mb4",
        DB_USER,
        DB_PASS,
        [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
            PDO::ATTR_EMULATE_PREPARES => false
        ]
    );
} catch (PDOException $e) {
    die('Database connection failed: ' . $e->getMessage());
}

// Helper functions
function sanitizeInput($data) {
    return htmlspecialchars(strip_tags(trim($data)));
}

function hashPassword($password) {
    return password_hash($password . PASSWORD_SALT, PASSWORD_ARGON2ID);
}

function verifyPassword($password, $hash) {
    return password_verify($password . PASSWORD_SALT, $hash);
}

function generateToken() {
    return bin2hex(random_bytes(32));
}

function redirectTo($url) {
    header("Location: $url");
    exit();
}

function jsonResponse($data, $status = 200) {
    http_response_code($status);
    header('Content-Type: application/json');
    echo json_encode($data);
    exit();
}
?>