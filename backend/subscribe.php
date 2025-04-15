<?php
header('Content-Type: application/json');

$data = json_decode(file_get_contents('php://input'), true);

if (isset($data['email']) && filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {
    $email = $data['email'];
    $file = 'subscribers.csv';

    if (file_exists($file)) {
        $subscribers = array_map('str_getcsv', file($file));
        foreach ($subscribers as $subscriber) {
            if ($subscriber[0] === $email) {
                echo json_encode(['message' => 'Email already subscribed']);
                exit;
            }
        }
    }

    $handle = fopen($file, 'a');
    if ($handle) {
        fputcsv($handle, [$email, date('Y-m-d H:i:s')]);
        fclose($handle);
        echo json_encode(['message' => 'Subscription successful']);
    } else {
        http_response_code(500);
        echo json_encode(['message' => 'Failed to save subscription']);
    }
} else {
    http_response_code(400);
    echo json_encode(['message' => 'Invalid email address']);
}
?>
