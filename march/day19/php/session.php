<?php
// Check if form submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve preferences from form submission
    $fontStyle = $_POST['font_style'];
    $fontSize = $_POST['font_size'];
    $fontColor = $_POST['font_color'];
    $bgColor = $_POST['background_color'];

    // Set cookies to remember preferences
    setcookie('font_style', $fontStyle, time() + (86400 * 30), "/"); // 86400 = 1 day
    setcookie('font_size', $fontSize, time() + (86400 * 30), "/");
    setcookie('font_color', $fontColor, time() + (86400 * 30), "/");
    setcookie('background_color', $bgColor, time() + (86400 * 30), "/");
    
    // Redirect to implement page
    header("Location: {$_SERVER['PHP_SELF']}");
    exit();
}

// Retrieve preferences from cookies or set defaults
$fontStyle = $_COOKIE['font_style'] ?? 'Arial';
$fontSize = $_COOKIE['font_size'] ?? 'medium';
$fontColor = $_COOKIE['font_color'] ?? '#000000'; // default is black
$bgColor = $_COOKIE['background_color'] ?? '#ffffff'; // default is white
?>
<!DOCTYPE html>
<html>
<head>
    <title>Change Preferences</title>
    <style>
        body {
            font-family: <?php echo $fontStyle; ?>;
            font-size: <?php echo $fontSize; ?>;
            color: <?php echo $fontColor; ?>;
            background-color: <?php echo $bgColor; ?>;
        }
    </style>
</head>
<body>
    <h2>Select Preferences</h2>
    <form method="post" action="<?php echo $_SERVER['PHP_SELF']; ?>">
        <!-- Form fields for preferences -->
    </form>

    <!-- Display selected preferences -->
    <h2>Preferences Implemented</h2>
    <p>This page demonstrates the preferences you've selected:</p>
    <ul>
        <!-- Display selected preferences -->
    </ul>
</body>
</html>
