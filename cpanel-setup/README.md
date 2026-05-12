# cPanel Contact Form Setup Instructions

To deploy this contact form system on your cPanel hosting:

## 1. Prepare PHPMailer
1. Download PHPMailer from GitHub: [https://github.com/PHPMailer/PHPMailer/archive/refs/heads/master.zip](https://github.com/PHPMailer/PHPMailer/archive/refs/heads/master.zip)
2. Extract the ZIP file.
3. Upload the folder to your cPanel `public_html` directory and rename it to `PHPMailer`.

## 2. Upload the Script
1. Upload `contact.php` to your `public_html` directory.
2. Edit `contact.php` and replace `YOUR_PASSWORD_HERE` with your actual email password for `help@vibrantws.co.za`.

## 3. Update your HTML Form
Ensure your HTML form points to the PHP script:
```html
<form action="contact.php" method="POST">
  <!-- your input fields here -->
  <button type="submit">Send Message</button>
</form>
```

## 4. Troubleshooting
- **SMTP Port 465**: Ensure your host allows outbound connections on port 465.
- **SSL/TLS**: The script is configured for SSL on port 465. If your host uses port 587, change the script to use `PHPMailer::ENCRYPTION_STARTTLS` and Port `587`.
- **PHP Version**: Recommended PHP 7.4 or 8.x.
