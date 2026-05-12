<?php
/**
 * PHPMailer Contact Form System for cPanel
 * 
 * INSTRUCTIONS:
 * 1. Upload this file (contact.php) and the "PHPMailer" folder to your public_html directory.
 * 2. You can download PHPMailer from: https://github.com/PHPMailer/PHPMailer
 * 3. Update the SMTP settings below with your actual password.
 * 4. Ensure your hosting supports PHP and has the openssl extension enabled for Port 465.
 */

// Use PHPMailer classes
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

// Include PHPMailer files
// NOTE: Make sure these paths match where you upload the PHPMailer folder
require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

// Form Data Processing
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    // Sanitize Inputs
    $name    = filter_var($_POST['first_name'], FILTER_SANITIZE_STRING);
    $email   = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $phone   = filter_var($_POST['phone_number'], FILTER_SANITIZE_STRING);
    $company = filter_var($_POST['company_name'], FILTER_SANITIZE_STRING);
    $message = filter_var($_POST['message'], FILTER_SANITIZE_STRING);

    // Validation
    if (!$name || !$email || !$message) {
        echo json_encode(["status" => "error", "message" => "Please fill in all required fields."]);
        exit;
    }

    $mail = new PHPMailer(true);

    try {
        // --- SMTP SETTINGS ---
        $mail->isSMTP();
        $mail->Host       = 'cp68.domains.co.za'; // Your SMTP Host
        $mail->SMTPAuth   = true;
        $mail->Username   = 'help@vibrantws.co.za'; // Your SMTP Username
        $mail->Password   = 'eUJDwV4QACpo';    // Your SMTP Password
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS; // SSL for Port 465
        $mail->Port       = 465;

        // --- EMAIL TO YOU ---
        $mail->setFrom('help@vibrantws.co.za', 'Vibrant Web Form');
        $mail->addAddress('ocksbradley706@gmail.com'); // Your Gmail for receiving inquiries
        $mail->addReplyTo($email, $name);

        $mail->isHTML(true);
        $mail->Subject = "New Website Inquiry from $name";
        $mail->Body    = "
            <div style='font-family: sans-serif; padding: 20px; border: 1px solid #ddd; border-radius: 8px;'>
                <h2 style='color: #0088ff;'>New Contact Submission</h2>
                <p><strong>Name:</strong> $name</p>
                <p><strong>Email:</strong> $email</p>
                <p><strong>Phone:</strong> $phone</p>
                <p><strong>Business:</strong> " . ($company ?: 'N/A') . "</p>
                <hr>
                <p><strong>Message:</strong></p>
                <p style='white-space: pre-wrap;'>$message</p>
            </div>
        ";

        $mail->send();

        // --- AUTO-REPLY TO CLIENT ---
        $mail->clearAddresses();
        $mail->addAddress($email);
        $mail->Subject = "We received your message - Vibrant Web Solutions";
        $mail->Body    = "
            <div style='font-family: sans-serif; padding: 20px; border: 1px solid #ddd; border-radius: 8px;'>
                <h2 style='color: #0088ff;'>Thank you for contacting us!</h2>
                <p>Hi $name,</p>
                <p>Thank you for reaching out to Vibrant Web Solutions. We have received your inquiry and our team will get back to you within 24 hours.</p>
                <p>In the meantime, feel free to visit our website to see more of our work.</p>
                <hr>
                <p style='font-size: 12px; color: #777;'>Vibrant Web Solutions - Affordable Websites for South African Businesses</p>
            </div>
        ";
        
        $mail->send();

        echo json_encode(["status" => "success", "message" => "Message sent! We'll get back to you soon."]);

    } catch (Exception $e) {
        echo json_encode(["status" => "error", "message" => "Message could not be sent. Mailer Error: {$mail->ErrorInfo}"]);
    }
}
?>
