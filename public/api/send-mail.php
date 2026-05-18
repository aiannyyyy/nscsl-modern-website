<?php
error_reporting(0);
ini_set('display_errors', 0);
ob_start();

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200); exit();
}

require 'PHPMailer/Exception.php';
require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

$data = json_decode(file_get_contents('php://input'), true);

$to       = $data['to'] ?? '';
$cc       = $data['cc'] ?? '';
$replyTo  = $data['replyto'] ?? '';
$subject  = $data['subject'] ?? '';
$message  = $data['message'] ?? '';
$fromName = $data['name'] ?? 'Website Visitor';
$dept     = $data['department'] ?? 'General';

if (!$to || !$subject || !$message) {
    ob_end_clean();
    echo json_encode(['success' => false, 'message' => 'Missing fields']);
    exit();
}

try {
    $mail = new PHPMailer(true);

    $mail->isSMTP();
    $mail->Host       = 'mail.nscsl.com.ph';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'no-reply@nscsl.com.ph';
    $mail->Password   = 'password@nscsl123';
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;

    $mail->setFrom('no-reply@nscsl.com.ph', $fromName . ' <' . $replyTo . '>');

    $mail->addAddress($to);
    if ($cc) {
        foreach (explode(',', $cc) as $ccEmail) {
            $mail->addCC(trim($ccEmail));
        }
    }

    $mail->Subject = "Concern from NSCSL Website - $dept";
    $mail->Body    = $message;
    $mail->isHTML(false);

    $mail->send();
    ob_end_clean();
    echo json_encode(['success' => true]);

} catch (Exception $e) {
    ob_end_clean();
    echo json_encode(['success' => false, 'message' => $e->getMessage()]);
}